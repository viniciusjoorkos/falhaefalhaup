import type {
  User, LoginRecord, Carteira, Sessao, Live, Convite, Depoimento,
} from "@/types";

const KEYS = {
  users: "td_users",
  currentUserId: "td_current_user_id",
  logins: "td_logins",
  carteiras: "td_carteiras",
  sessoes: "td_sessoes",
  lives: "td_lives",
  convites: "td_convites",
  depoimentos: "td_depoimentos",
  expertOnline: "td_expert_online",
  seeded: "td_seeded_v1",
} as const;

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const uid = () =>
  Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

// ---------- Seed ----------
export function seedIfNeeded() {
  if (localStorage.getItem(KEYS.seeded) === "1") return;

  const now = new Date().toISOString();
  const userId = "user-001";
  const adminId = "admin-001";

  const users: (User & { password: string })[] = [
    {
      id: userId,
      email: "user@trade.com",
      name: "João Trader",
      role: "user",
      plan: "free",
      status: "active",
      created_at: now,
      password: "123456",
    },
    {
      id: adminId,
      email: "admin@trade.com",
      name: "Admin",
      role: "admin",
      plan: "premium",
      status: "active",
      created_at: now,
      password: "admin123",
    },
  ];
  write(KEYS.users, users);

  const carteiras: Carteira[] = [
    { user_id: userId, banca_inicial: 1000, saldo_atual: 1180 },
  ];
  write(KEYS.carteiras, carteiras);

  const sessoes: Sessao[] = [
    { id: uid(), user_id: userId, entradas: 8, ganhos: 320, perdas: 140, duracao: 45, resultado: 180, created_at: new Date(Date.now() - 86400000 * 3).toISOString() },
    { id: uid(), user_id: userId, entradas: 6, ganhos: 200, perdas: 100, duracao: 30, resultado: 100, created_at: new Date(Date.now() - 86400000 * 2).toISOString() },
    { id: uid(), user_id: userId, entradas: 5, ganhos: 80, perdas: 180, duracao: 25, resultado: -100, created_at: new Date(Date.now() - 86400000 * 1).toISOString() },
  ];
  write(KEYS.sessoes, sessoes);

  const lives: Live[] = [
    { id: uid(), titulo: "Operando Tendência no M5", link: "https://meet.example.com/sala-1", data: new Date(Date.now() + 86400000).toISOString(), status: "agendada" },
    { id: uid(), titulo: "Análise de Mercado — Pré-Open", link: "https://meet.example.com/sala-2", data: new Date(Date.now() + 86400000 * 3).toISOString(), status: "agendada" },
    { id: uid(), titulo: "Sala de Sinais — Sessão Asiática", link: "https://meet.example.com/sala-3", data: new Date(Date.now() - 86400000 * 2).toISOString(), status: "finalizada", ganhos: 1240, perdas: 420, caixa_final: 5820 },
    { id: uid(), titulo: "Gestão de Banca na Prática", link: "https://meet.example.com/sala-4", data: new Date(Date.now() - 86400000 * 7).toISOString(), status: "finalizada", ganhos: 890, perdas: 310, caixa_final: 5400 },
  ];
  write(KEYS.lives, lives);

  const convites: Convite[] = [{ user_id: userId, quantidade: 3 }];
  write(KEYS.convites, convites);

  const depoimentos: Depoimento[] = [
    { id: uid(), user_id: userId, user_name: "João Trader", tipo: "texto", conteudo: "Plataforma mudou minha forma de operar. Disciplina é tudo!", created_at: now },
  ];
  write(KEYS.depoimentos, depoimentos);

  write(KEYS.expertOnline, true);
  localStorage.setItem(KEYS.seeded, "1");
}

// ---------- Users ----------
type StoredUser = User & { password: string };
export const usersStore = {
  all: (): StoredUser[] => read<StoredUser[]>(KEYS.users, []),
  save: (list: StoredUser[]) => write(KEYS.users, list),
  byEmail: (email: string) =>
    usersStore.all().find((u) => u.email.toLowerCase() === email.toLowerCase()),
  byId: (id: string) => usersStore.all().find((u) => u.id === id),
  create: (data: Omit<StoredUser, "id" | "created_at" | "role" | "plan" | "status">) => {
    const u: StoredUser = {
      ...data,
      id: uid(),
      role: "user",
      plan: "free",
      status: "active",
      created_at: new Date().toISOString(),
    };
    const list = usersStore.all();
    list.push(u);
    usersStore.save(list);
    return u;
  },
  update: (id: string, patch: Partial<StoredUser>) => {
    const list = usersStore.all().map((u) => (u.id === id ? { ...u, ...patch } : u));
    usersStore.save(list);
  },
};

export const session = {
  getId: () => localStorage.getItem(KEYS.currentUserId),
  setId: (id: string | null) => {
    if (id) localStorage.setItem(KEYS.currentUserId, id);
    else localStorage.removeItem(KEYS.currentUserId);
  },
};

// ---------- Logins ----------
export const loginsStore = {
  all: (): LoginRecord[] => read<LoginRecord[]>(KEYS.logins, []),
  save: (list: LoginRecord[]) => write(KEYS.logins, list),
  add: (user_id: string) => {
    const list = loginsStore.all();
    list.push({ id: uid(), user_id, data_hora: new Date().toISOString() });
    loginsStore.save(list);
  },
  byUser: (user_id: string) => loginsStore.all().filter((l) => l.user_id === user_id),
};

// ---------- Carteira ----------
export const carteirasStore = {
  all: (): Carteira[] => read<Carteira[]>(KEYS.carteiras, []),
  save: (list: Carteira[]) => write(KEYS.carteiras, list),
  byUser: (user_id: string) => carteirasStore.all().find((c) => c.user_id === user_id),
  upsert: (c: Carteira) => {
    const list = carteirasStore.all();
    const idx = list.findIndex((x) => x.user_id === c.user_id);
    if (idx >= 0) list[idx] = c;
    else list.push(c);
    carteirasStore.save(list);
  },
};

// ---------- Sessoes ----------
export const sessoesStore = {
  all: (): Sessao[] => read<Sessao[]>(KEYS.sessoes, []),
  save: (list: Sessao[]) => write(KEYS.sessoes, list),
  byUser: (user_id: string) =>
    sessoesStore
      .all()
      .filter((s) => s.user_id === user_id)
      .sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at)),
  add: (s: Omit<Sessao, "id" | "created_at" | "resultado">) => {
    const resultado = s.ganhos - s.perdas;
    const item: Sessao = { ...s, id: uid(), resultado, created_at: new Date().toISOString() };
    const list = sessoesStore.all();
    list.push(item);
    sessoesStore.save(list);
    // update carteira
    const c = carteirasStore.byUser(s.user_id);
    if (c) {
      carteirasStore.upsert({ ...c, saldo_atual: c.saldo_atual + resultado });
    }
    return item;
  },
};

// ---------- Lives ----------
export const livesStore = {
  all: (): Live[] => read<Live[]>(KEYS.lives, []),
  save: (list: Live[]) => write(KEYS.lives, list),
  add: (l: Omit<Live, "id">) => {
    const list = livesStore.all();
    const item: Live = { ...l, id: uid() };
    list.push(item);
    livesStore.save(list);
    return item;
  },
  update: (id: string, patch: Partial<Live>) => {
    const list = livesStore.all().map((l) => (l.id === id ? { ...l, ...patch } : l));
    livesStore.save(list);
  },
  remove: (id: string) => livesStore.save(livesStore.all().filter((l) => l.id !== id)),
};

// ---------- Convites ----------
export const convitesStore = {
  all: (): Convite[] => read<Convite[]>(KEYS.convites, []),
  save: (list: Convite[]) => write(KEYS.convites, list),
  byUser: (user_id: string) =>
    convitesStore.all().find((c) => c.user_id === user_id) ?? { user_id, quantidade: 0 },
  add: (user_id: string, qty: number) => {
    const list = convitesStore.all();
    const idx = list.findIndex((c) => c.user_id === user_id);
    if (idx >= 0) list[idx].quantidade += qty;
    else list.push({ user_id, quantidade: qty });
    convitesStore.save(list);
  },
};

// ---------- Depoimentos ----------
export const depoimentosStore = {
  all: (): Depoimento[] =>
    read<Depoimento[]>(KEYS.depoimentos, []).sort(
      (a, b) => +new Date(b.created_at) - +new Date(a.created_at)
    ),
  save: (list: Depoimento[]) => write(KEYS.depoimentos, list),
  add: (d: Omit<Depoimento, "id" | "created_at">) => {
    const item: Depoimento = { ...d, id: uid(), created_at: new Date().toISOString() };
    const list = read<Depoimento[]>(KEYS.depoimentos, []);
    list.push(item);
    depoimentosStore.save(list);
    return item;
  },
};

// ---------- Expert status ----------
export const expertStore = {
  isOnline: (): boolean => read<boolean>(KEYS.expertOnline, false),
  set: (v: boolean) => write(KEYS.expertOnline, v),
};

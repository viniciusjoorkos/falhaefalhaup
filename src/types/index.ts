export type UserRole = "user" | "admin";
export type UserPlan = "free" | "premium";
export type UserStatus = "active" | "inactive";

export interface Profile {
  id: string;
  email: string;
  name: string;
  avatar_url?: string | null;
  plan: UserPlan;
  status: UserStatus;
  created_at: string;
}

export interface AuthUser extends Profile {
  role: UserRole;
}

export interface Carteira {
  user_id: string;
  banca_inicial: number;
  saldo_atual: number;
}

export interface Sessao {
  id: string;
  user_id: string;
  entradas: number;
  ganhos: number;
  perdas: number;
  duracao: number;
  resultado: number;
  created_at: string;
}

export type LiveStatus = "agendada" | "ao_vivo" | "finalizada";

export interface Live {
  id: string;
  titulo: string;
  descricao?: string | null;
  link: string;
  data: string;
  status: LiveStatus;
  is_premium: boolean;
  ganhos?: number | null;
  perdas?: number | null;
  caixa_final?: number | null;
}

export interface Convite {
  user_id: string;
  quantidade: number;
}

export type DepoimentoTipo = "texto" | "video";

export interface Depoimento {
  id: string;
  user_id: string;
  tipo: DepoimentoTipo;
  conteudo: string;
  created_at: string;
  user_name?: string;
}

export type Nivel = "Iniciante" | "Bronze" | "Prata" | "Ouro";

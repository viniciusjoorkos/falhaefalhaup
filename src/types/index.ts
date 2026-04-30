export type UserRole = "user" | "admin";
export type UserPlan = "free" | "premium";
export type UserStatus = "active" | "inactive";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
  role: UserRole;
  plan: UserPlan;
  status: UserStatus;
  created_at: string;
}

export interface LoginRecord {
  id: string;
  user_id: string;
  data_hora: string;
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
  duracao: number; // minutes
  resultado: number;
  created_at: string;
}

export type LiveStatus = "agendada" | "online" | "finalizada";

export interface Live {
  id: string;
  titulo: string;
  link: string;
  data: string; // ISO
  status: LiveStatus;
  ganhos?: number;
  perdas?: number;
  caixa_final?: number;
}

export interface Convite {
  user_id: string;
  quantidade: number;
}

export type DepoimentoTipo = "texto" | "imagem" | "video";

export interface Depoimento {
  id: string;
  user_id: string;
  user_name: string;
  tipo: DepoimentoTipo;
  conteudo: string;
  created_at: string;
}

export type Nivel = "Iniciante" | "Bronze" | "Prata" | "Ouro";

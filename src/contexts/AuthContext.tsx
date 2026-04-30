import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import {
  loginsStore, seedIfNeeded, session, usersStore,
} from "@/lib/store";
import type { User } from "@/types";

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
  updateProfile: (patch: Partial<User>) => void;
  updatePassword: (newPassword: string) => { ok: boolean; error?: string };
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    seedIfNeeded();
    const id = session.getId();
    if (id) {
      const u = usersStore.byId(id);
      if (u) {
        const { password: _p, ...rest } = u;
        setUser(rest);
      }
    }
    setLoading(false);
  }, []);

  const login: AuthContextValue["login"] = async (email, password) => {
    const u = usersStore.byEmail(email);
    if (!u) return { ok: false, error: "Usuário não encontrado." };
    if (u.password !== password) return { ok: false, error: "Senha incorreta." };
    session.setId(u.id);
    loginsStore.add(u.id);
    const { password: _p, ...rest } = u;
    setUser(rest);
    return { ok: true };
  };

  const signup: AuthContextValue["signup"] = async (name, email, password) => {
    if (usersStore.byEmail(email)) return { ok: false, error: "Email já cadastrado." };
    if (password.length < 6) return { ok: false, error: "Senha deve ter ao menos 6 caracteres." };
    const u = usersStore.create({ name, email, password });
    session.setId(u.id);
    loginsStore.add(u.id);
    const { password: _p, ...rest } = u;
    setUser(rest);
    return { ok: true };
  };

  const logout = () => {
    session.setId(null);
    setUser(null);
  };

  const updateProfile: AuthContextValue["updateProfile"] = (patch) => {
    if (!user) return;
    usersStore.update(user.id, patch);
    setUser({ ...user, ...patch });
  };

  const updatePassword: AuthContextValue["updatePassword"] = (newPassword) => {
    if (!user) return { ok: false, error: "Não autenticado." };
    if (newPassword.length < 6) return { ok: false, error: "Senha deve ter ao menos 6 caracteres." };
    usersStore.update(user.id, { password: newPassword } as any);
    return { ok: true };
  };

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      login,
      signup,
      logout,
      updateProfile,
      updatePassword,
      isAdmin: user?.role === "admin",
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
}

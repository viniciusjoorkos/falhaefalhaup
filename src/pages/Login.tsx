import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Activity, Loader2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await login(email.trim(), password);
    setLoading(false);
    if (!res.ok) {
      toast.error(res.error ?? "Falha ao entrar");
      return;
    }
    toast.success("Bem-vindo de volta!");
    navigate("/app");
  }

  function fill(role: "user" | "admin") {
    if (role === "user") { setEmail("user@trade.com"); setPassword("123456"); }
    else { setEmail("admin@trade.com"); setPassword("admin123"); }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_55%)]" />

      <div className="relative grid w-full max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
        {/* Brand side */}
        <div className="hidden flex-col gap-6 lg:flex">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">TradeDesk</span>
          </Link>
          <h2 className="text-4xl font-bold leading-tight tracking-tight">
            Disciplina, dados e <span className="text-gradient-primary">resultados</span> em um só lugar.
          </h2>
          <p className="max-w-md text-muted-foreground">
            Acompanhe lives ao vivo, gerencie sua banca, evolua de nível e construa consistência —
            tudo em uma plataforma feita por traders, para traders.
          </p>

          <div className="mt-2 flex flex-col gap-2 rounded-xl border border-border bg-card p-4 text-xs">
            <p className="flex items-center gap-2 font-semibold text-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" /> Contas de demonstração
            </p>
            <button
              type="button"
              onClick={() => fill("user")}
              className="flex items-center justify-between rounded-md border border-border bg-background/40 px-3 py-2 text-left hover:border-primary/50"
            >
              <span><span className="text-muted-foreground">Usuário:</span> user@trade.com / 123456</span>
              <span className="text-primary">usar</span>
            </button>
            <button
              type="button"
              onClick={() => fill("admin")}
              className="flex items-center justify-between rounded-md border border-border bg-background/40 px-3 py-2 text-left hover:border-primary/50"
            >
              <span><span className="text-muted-foreground">Admin:</span> admin@trade.com / admin123</span>
              <span className="text-primary">usar</span>
            </button>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="glass-card rounded-2xl p-7 shadow-card lg:p-8"
        >
          <div className="mb-6 flex items-center gap-2 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
              <Activity className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">TradeDesk</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight">Entrar</h1>
          <p className="mt-1 text-sm text-muted-foreground">Acesse sua conta para começar.</p>

          <div className="mt-6 flex flex-col gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email" type="email" autoComplete="email" required
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password" type="password" autoComplete="current-password" required
                value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1.5"
              />
            </div>

            <Button type="submit" className="mt-2 h-11 w-full bg-gradient-primary text-primary-foreground hover:opacity-90" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Entrar
            </Button>

            <p className="mt-2 text-center text-sm text-muted-foreground">
              Não tem conta?{" "}
              <Link to="/signup" className="font-semibold text-primary hover:underline">
                Cadastre-se
              </Link>
            </p>

            <div className="mt-2 flex flex-col gap-1.5 rounded-lg border border-border bg-background/40 p-3 text-[11px] lg:hidden">
              <p className="font-semibold">Contas de teste</p>
              <button type="button" onClick={() => fill("user")} className="text-left text-muted-foreground hover:text-foreground">
                user@trade.com / 123456
              </button>
              <button type="button" onClick={() => fill("admin")} className="text-left text-muted-foreground hover:text-foreground">
                admin@trade.com / admin123
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

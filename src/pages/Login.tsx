import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Crown, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } } | null)?.from?.pathname ?? "/app";
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
    navigate(from, { replace: true });
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_55%)]" />

      <Link
        to="/"
        className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur transition hover:border-primary/40 hover:text-foreground sm:left-6 sm:top-6"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Voltar à home
      </Link>

      <div className="relative grid w-full max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="hidden flex-col gap-6 lg:flex">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-glow">
              <Crown className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">REZENDE CLUB</span>
          </Link>
          <h2 className="text-4xl font-bold leading-tight tracking-tight">
            Disciplina, dados e <span className="text-gradient-primary">resultados</span>.
          </h2>
          <p className="max-w-md text-muted-foreground">
            Lives ao vivo, gestão de banca, evolução por níveis. O ambiente certo para traders sérios.
          </p>
        </div>

        <form onSubmit={onSubmit} className="glass-card rounded-2xl p-7 shadow-card lg:p-8">
          <div className="mb-6 flex items-center gap-2 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Crown className="h-4 w-4" />
            </div>
            <span className="text-lg font-bold">REZENDE CLUB</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight">Entrar</h1>
          <p className="mt-1 text-sm text-muted-foreground">Acesse sua conta para continuar.</p>

          <div className="mt-6 flex flex-col gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" autoComplete="email" required
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" autoComplete="current-password" required
                value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" className="mt-1.5" />
            </div>

            <Button type="submit" className="mt-2 h-11 w-full bg-primary text-primary-foreground hover:opacity-90" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Entrar
            </Button>

            <p className="mt-2 text-center text-sm text-muted-foreground">
              Não tem conta?{" "}
              <Link to="/signup" className="font-semibold text-primary hover:underline">Cadastre-se</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

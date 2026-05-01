import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Crown, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Nome muito curto").max(80, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255),
  password: z.string().min(6, "Senha deve ter ao menos 6 caracteres").max(72),
});

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email, password });
    if (!parsed.success) return toast.error(parsed.error.errors[0].message);

    setLoading(true);
    const res = await signup(parsed.data.name, parsed.data.email, parsed.data.password);
    setLoading(false);
    if (!res.ok) {
      toast.error(res.error ?? "Erro ao cadastrar");
      return;
    }
    toast.success("Conta criada!");
    navigate("/app");
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_55%)]" />
      <form onSubmit={onSubmit} className="glass-card relative w-full max-w-md rounded-2xl p-7 shadow-card lg:p-8">
        <div className="mb-6 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Crown className="h-4 w-4" />
          </div>
          <span className="text-lg font-bold">REZENDE CLUB</span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight">Crie sua conta</h1>
        <p className="mt-1 text-sm text-muted-foreground">Comece grátis e faça upgrade quando quiser.</p>

        <div className="mt-6 flex flex-col gap-4">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mínimo 6 caracteres" className="mt-1.5" />
          </div>

          <Button type="submit" className="mt-2 h-11 w-full bg-primary text-primary-foreground hover:opacity-90" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Criar conta
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Já tem conta?{" "}
            <Link to="/login" className="font-semibold text-primary hover:underline">Entrar</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

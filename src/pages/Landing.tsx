import { Link } from "react-router-dom";
import { Activity, ArrowRight, BarChart3, Calendar, ShieldCheck, Trophy, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight">TradeDesk</span>
          </Link>
          <nav className="flex items-center gap-3">
            <Link to="/login" className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:inline">Entrar</Link>
            <Link to="/signup">
              <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                Começar grátis <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 py-20 lg:px-8 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <span className="dot-online" /> Plataforma para traders sérios
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Domine sua banca.<br />
            Opere com <span className="text-gradient-primary">disciplina</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Lives ao vivo, gestão de sessões, evolução por níveis e indicações.
            Tudo em um dashboard rápido e elegante feito para traders de opções binárias.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                Criar conta grátis
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline">Já tenho conta</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Calendar, title: "Lives ao vivo", desc: "Agenda integrada e histórico das salas com resultados reais." },
            { icon: Wallet, title: "Carteira inteligente", desc: "Banca, sessões e P&L automaticamente calculados." },
            { icon: Trophy, title: "Gamificação", desc: "Evolua de Iniciante a Ouro conforme cresce sua banca." },
            { icon: BarChart3, title: "Histórico completo", desc: "Veja entradas, ganhos, perdas e duração de cada sessão." },
            { icon: ShieldCheck, title: "Alerta anti-tilt", desc: "Detectamos sequências negativas e te alertamos para parar." },
            { icon: Activity, title: "IA de mercado", desc: "Stream contínuo de leituras e setups na sua Home." },
          ].map((f) => (
            <div key={f.title} className="glass-card rounded-xl p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border px-4 py-8 text-center text-xs text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} TradeDesk. Aviso de risco: trading envolve risco substancial.
      </footer>
    </div>
  );
}

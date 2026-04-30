import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar, Wallet, Gift, TrendingUp, TrendingDown, AlertTriangle, X, Trophy,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  carteirasStore, convitesStore, expertStore, livesStore, sessoesStore,
} from "@/lib/store";
import { calcularNivel, formatBRL, formatDate, nivelColor } from "@/lib/calculations";
import { AITerminal } from "@/components/home/AITerminal";
import { StatCard } from "@/components/ui/stat-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { user } = useAuth();
  const [dismissAlert, setDismissAlert] = useState(false);

  const carteira = user ? carteirasStore.byUser(user.id) : undefined;
  const sessoes = user ? sessoesStore.byUser(user.id) : [];
  const convite = user ? convitesStore.byUser(user.id) : { user_id: "", quantidade: 0 };
  const proximaLive = useMemo(
    () => livesStore.all()
      .filter((l) => l.status !== "finalizada" && new Date(l.data) >= new Date(Date.now() - 3600_000))
      .sort((a, b) => +new Date(a.data) - +new Date(b.data))[0],
    []
  );
  const expertOnline = expertStore.isOnline();

  const ultimoResultado = sessoes[0]?.resultado ?? 0;
  const tresPerdas =
    sessoes.length >= 3 && sessoes.slice(0, 3).every((s) => s.resultado < 0);

  const nivel = calcularNivel(carteira?.banca_inicial ?? 0, carteira?.saldo_atual ?? 0);

  // hint to re-render alerts after navigation
  useEffect(() => { setDismissAlert(false); }, [sessoes.length]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-muted-foreground">Bem-vindo de volta,</p>
        <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
          {user?.name} <span className="text-muted-foreground">👋</span>
        </h2>
      </div>

      {tresPerdas && !dismissAlert && (
        <div className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-destructive">Atenção: 3 sessões negativas seguidas</p>
            <p className="mt-0.5 text-xs text-destructive/80">
              Recomendamos uma pausa para revisar seu plano antes de operar novamente.
            </p>
          </div>
          <Button size="icon" variant="ghost" onClick={() => setDismissAlert(true)} className="h-7 w-7">
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Saldo atual"
          value={formatBRL(carteira?.saldo_atual ?? 0)}
          accent="primary"
          icon={<Wallet className="h-4 w-4" />}
          trend={ultimoResultado !== 0 ? {
            value: `${ultimoResultado >= 0 ? "+" : ""}${formatBRL(ultimoResultado)} (último)`,
            positive: ultimoResultado >= 0,
          } : undefined}
        />
        <StatCard
          label="Status do expert"
          value={
            <span className="flex items-center gap-2 text-base">
              <span className={expertOnline ? "dot-online" : "dot-offline"} />
              {expertOnline ? "Online agora" : "Offline"}
            </span>
          }
          icon={expertOnline ? <TrendingUp className="h-4 w-4 text-primary" /> : <TrendingDown className="h-4 w-4" />}
        />
        <StatCard
          label="Indicações"
          value={`${convite.quantidade}`}
          icon={<Gift className="h-4 w-4" />}
          trend={{ value: `Nível ${convite.quantidade >= 10 ? "Diamante" : convite.quantidade >= 5 ? "Bronze" : "Inicial"}`, positive: true }}
        />
        <StatCard
          label="Seu nível"
          value={
            <span className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" /> {nivel}
            </span>
          }
          icon={<Badge className={nivelColor(nivel)} variant="outline">{nivel}</Badge>}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AITerminal />
        </div>

        <div className="glass-card flex flex-col gap-4 rounded-xl p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Próxima live</h3>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </div>

          {proximaLive ? (
            <div className="flex flex-1 flex-col">
              <p className="text-lg font-bold leading-tight">{proximaLive.titulo}</p>
              <p className="mt-1 text-xs text-muted-foreground">{formatDate(proximaLive.data)}</p>
              {proximaLive.status === "online" && (
                <Badge className="mt-2 w-fit bg-primary/15 text-primary border-primary/30 animate-pulse-glow" variant="outline">
                  <span className="dot-online mr-1.5" /> AO VIVO
                </Badge>
              )}
              <a href={proximaLive.link} target="_blank" rel="noreferrer" className="mt-auto">
                <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
                  Entrar na sala
                </Button>
              </a>
            </div>
          ) : (
            <div className="flex flex-1 items-center justify-center text-center text-sm text-muted-foreground">
              Nenhuma live agendada
            </div>
          )}

          <Link to="/app/agenda" className="text-center text-xs font-medium text-primary hover:underline">
            Ver agenda completa →
          </Link>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="glass-card rounded-xl p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Últimas sessões</h3>
            <Link to="/app/carteira" className="text-xs font-medium text-primary hover:underline">Ver tudo →</Link>
          </div>
          <div className="mt-4 flex flex-col divide-y divide-border">
            {sessoes.slice(0, 4).map((s) => (
              <div key={s.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium">{s.entradas} entradas · {s.duracao}min</p>
                  <p className="text-xs text-muted-foreground">{formatDate(s.created_at)}</p>
                </div>
                <span className={`text-sm font-bold ${s.resultado >= 0 ? "text-primary" : "text-destructive"}`}>
                  {s.resultado >= 0 ? "+" : ""}{formatBRL(s.resultado)}
                </span>
              </div>
            ))}
            {sessoes.length === 0 && (
              <p className="py-6 text-center text-sm text-muted-foreground">Nenhuma sessão ainda. Vá para a Carteira para começar.</p>
            )}
          </div>
        </div>

        <div className="glass-card rounded-xl p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Atalhos</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link to="/app/carteira" className="rounded-lg border border-border bg-background/40 p-4 hover:border-primary/40">
              <Wallet className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">Carteira</p>
              <p className="text-xs text-muted-foreground">Nova sessão</p>
            </Link>
            <Link to="/app/agenda" className="rounded-lg border border-border bg-background/40 p-4 hover:border-primary/40">
              <Calendar className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">Lives</p>
              <p className="text-xs text-muted-foreground">Próximas salas</p>
            </Link>
            <Link to="/app/indique" className="rounded-lg border border-border bg-background/40 p-4 hover:border-primary/40">
              <Gift className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">Indique</p>
              <p className="text-xs text-muted-foreground">Ganhe prêmios</p>
            </Link>
            <Link to="/app/depoimentos" className="rounded-lg border border-border bg-background/40 p-4 hover:border-primary/40">
              <Trophy className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">Depoimentos</p>
              <p className="text-xs text-muted-foreground">Compartilhe</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

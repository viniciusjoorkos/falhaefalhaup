import { Link } from "react-router-dom";
import {
  ArrowRight,
  Crown,
  Calendar,
  Wallet,
  Trophy,
  ShieldCheck,
  TrendingUp,
  TrendingDown,
  Activity,
  Timer,
  Target,
  LineChart,
} from "lucide-react";
import DottedSurface from "@/components/home/DottedSurface";
import deskImg from "@/assets/club-desk.jpg";
import chessImg from "@/assets/club-chess.jpg";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-amber-200/70">
      {/* HERO — black, Apple-dark, SaaS feel */}
      <section className="relative isolate overflow-hidden bg-[#050505] text-white">
        <DottedSurface />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(212,175,55,0.18),transparent_70%)]" />
        {/* premium fade to white */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#050505]/60 to-white" />

        {/* Header */}
        <header className="relative z-10">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md border border-amber-500/30 bg-black/40">
                <Crown className="h-3.5 w-3.5 text-amber-400" />
              </div>
              <span className="font-serif text-[11px] tracking-[0.28em] text-white/90 sm:text-[12px]">
                RZ&nbsp;TRADER&nbsp;STHUB
              </span>
            </Link>
            <nav className="flex items-center gap-1.5 text-xs sm:gap-2">
              <Link
                to="/login"
                className="hidden h-8 items-center rounded-full px-3 text-[12px] text-white/70 transition hover:text-white sm:inline-flex"
              >
                Entrar
              </Link>
              <Link
                to="/signup"
                className="inline-flex h-8 items-center rounded-full bg-white px-3.5 text-[12px] font-medium text-neutral-900 transition hover:bg-neutral-100 sm:px-4"
              >
                Solicitar acesso
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero copy */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-14 text-center sm:pb-32 sm:pt-20">
          <p className="font-mono text-[9px] uppercase tracking-[0.45em] text-amber-300/80 sm:text-[10px] sm:tracking-[0.55em]">
            Falha <span className="mx-2 text-white/30">·</span> é <span className="mx-2 text-white/30">·</span> falha
          </p>

          <h1 className="mt-5 font-serif text-[34px] font-light leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[72px]">
            Frente a frente
            <br />
            <span className="italic text-amber-300/95">com o expert Rezende.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-[13px] leading-relaxed text-white/55 sm:max-w-lg sm:text-[14px]">
            O hub fechado de opções binárias para quem quer operar lado a lado
            com quem vive disso — sem ruído, sem promessa, sem grupo de Telegram.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            <Link
              to="/signup"
              className="group inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-5 text-[13px] font-medium text-neutral-900 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] transition hover:bg-neutral-100"
            >
              Quero meu acesso
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/login"
              className="inline-flex h-10 items-center rounded-full px-4 text-[13px] font-medium text-white/70 transition hover:text-white"
            >
              Já sou membro →
            </Link>
          </div>

          <p className="mt-5 text-[10px] uppercase tracking-[0.28em] text-white/30">
            Vagas limitadas · acesso por convite
          </p>

          {/* SaaS hero mockup — trading panel */}
          <div className="relative mx-auto mt-14 max-w-3xl sm:mt-16">
            <div className="absolute -inset-x-10 -top-10 -bottom-6 -z-10 rounded-[2rem] bg-[radial-gradient(50%_60%_at_50%_30%,rgba(212,175,55,0.18),transparent_70%)] blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)] backdrop-blur">
              {/* window chrome */}
              <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/40">
                  <Activity className="h-3 w-3" />
                  <span className="font-mono tracking-wider">EURUSD · M1</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-emerald-300">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" /> live
                </div>
              </div>

              {/* chart area */}
              <div className="grid grid-cols-12">
                <div className="col-span-12 sm:col-span-9 px-5 pb-5 pt-4">
                  <div className="flex items-baseline justify-between">
                    <div className="text-left">
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                        Payout
                      </p>
                      <p className="mt-1 font-serif text-2xl font-light text-white">
                        92<span className="text-white/40">%</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-300">
                      <TrendingUp className="h-3 w-3" />
                      + R$ 2.200
                    </div>
                  </div>

                  {/* candles */}
                  <div className="mt-4 flex h-24 items-end justify-between gap-1">
                    {[
                      { h: 30, c: "up" },
                      { h: 45, c: "up" },
                      { h: 38, c: "down" },
                      { h: 52, c: "up" },
                      { h: 60, c: "up" },
                      { h: 48, c: "down" },
                      { h: 70, c: "up" },
                      { h: 65, c: "up" },
                      { h: 55, c: "down" },
                      { h: 78, c: "up" },
                      { h: 88, c: "up" },
                      { h: 72, c: "down" },
                      { h: 92, c: "up" },
                      { h: 80, c: "up" },
                    ].map((b, i) => (
                      <div
                        key={i}
                        style={{ height: `${b.h}%` }}
                        className={`w-2 rounded-sm ${
                          b.c === "up" ? "bg-emerald-400/80" : "bg-rose-400/70"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-white/30">
                    <span>09:42</span>
                    <span>09:48</span>
                    <span>09:54</span>
                    <span>10:00</span>
                  </div>
                </div>

                {/* side panel — CALL / PUT */}
                <div className="col-span-12 border-t border-white/5 px-5 py-4 sm:col-span-3 sm:border-l sm:border-t-0">
                  <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/40">
                    Próxima entrada
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-white/70">
                    <Timer className="h-3 w-3 text-amber-300" />
                    <span className="font-mono">00:47</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-1">
                    <div className="flex items-center justify-center gap-1.5 rounded-md border border-emerald-400/30 bg-emerald-400/10 py-2 text-[11px] font-medium text-emerald-300">
                      <TrendingUp className="h-3 w-3" /> CALL
                    </div>
                    <div className="flex items-center justify-center gap-1.5 rounded-md border border-rose-400/20 bg-rose-400/5 py-2 text-[11px] font-medium text-rose-300/70">
                      <TrendingDown className="h-3 w-3" /> PUT
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* tiny stats below mockup */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
              <span>+ 400 membros ativos</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:inline-block" />
              <span>7 lives grátis · 5 premium</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:inline-block" />
              <span>payout até 92%</span>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIC HIGHLIGHT — editorial, no box */}
      <section className="border-t border-neutral-200/70 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-amber-700/80">
            Marco histórico
          </p>
          <h3 className="mt-6 font-serif text-[40px] font-light leading-[1.02] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
            30 WIN
            <br />
            <span className="text-neutral-400">sem gale</span>
            <br />
            <span className="italic text-amber-700">em live.</span>
          </h3>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.5em] text-neutral-500 sm:tracking-[0.6em]">
            Rezende
            <br className="sm:hidden" />
            <span className="mx-2 text-neutral-300">·</span>
            fez história
          </p>
        </div>
      </section>

      {/* EDITORIAL split — image + statement */}
      <section className="relative border-t border-neutral-200/70 bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
              <img
                src={deskImg}
                alt="Mesa de trabalho premium do clube"
                width={1280}
                height={896}
                loading="lazy"
                className="aspect-[10/7] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 left-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/95 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-neutral-500 backdrop-blur">
              <span className="h-1 w-1 rounded-full bg-amber-500" /> 01 — Método
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-amber-700/80">Por que existe</p>
            <h2 className="mt-3 font-serif text-3xl font-light leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              O mercado não <br />
              <span className="italic text-amber-700">perdoa improviso.</span>
            </h2>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-neutral-500">
              Aqui não tem grupo de Telegram, nem promessa de virada. Tem método, lives ao vivo e um único objetivo:
              tornar a sua banca consistente em opções binárias.
            </p>
            <div className="mt-7 flex items-center gap-6">
              <div>
                <p className="font-serif text-3xl font-light text-neutral-900">7+5</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-neutral-400">Lives grátis · premium</p>
              </div>
              <div className="h-8 w-px bg-neutral-200" />
              <div>
                <p className="font-serif text-3xl font-light text-neutral-900">92%</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-neutral-400">Payout médio</p>
              </div>
              <div className="h-8 w-px bg-neutral-200" />
              <div>
                <p className="font-serif text-3xl font-light text-neutral-900">0</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-neutral-400">Promessa fácil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-neutral-200/80 bg-neutral-50/40">
        <div className="mx-auto max-w-6xl px-6 pt-16 text-center sm:pt-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-amber-700/80">O essencial</p>
          <h2 className="mx-auto mt-3 max-w-xl font-serif text-2xl font-light tracking-tight text-neutral-900 sm:text-3xl">
            Tudo que você precisa.
            <span className="text-neutral-400"> Nada além.</span>
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-px bg-neutral-200/70 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Calendar, t: "Lives diárias", d: "Opere CALL/PUT junto com o expert, em tempo real." },
            { icon: Wallet, t: "Banca sob controle", d: "P&L automático. Stop antes do tilt." },
            { icon: Target, t: "Sinais com leitura", d: "Entrada, expiração e contexto — não palpite." },
            { icon: ShieldCheck, t: "Sem promessa fácil", d: "Método. Disciplina. Repetição." },
          ].map((f) => (
            <div key={f.t} className="bg-white p-7">
              <f.icon className="h-4 w-4 text-amber-600" strokeWidth={1.5} />
              <h3 className="mt-3.5 text-[13px] font-semibold tracking-tight text-neutral-900">{f.t}</h3>
              <p className="mt-1 text-[12.5px] leading-relaxed text-neutral-500">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METRICS strip — SaaS feel */}
      <section className="border-t border-neutral-200/80 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-y divide-neutral-200/80 px-6 py-14 sm:grid-cols-4 sm:divide-x sm:divide-y-0 sm:py-16">
          {[
            { k: "+400", l: "Membros ativos" },
            { k: "+R$ 500k", l: "Faturados na sala" },
            { k: "30 win", l: "Sem gale em live" },
            { k: "92%", l: "Payout médio" },
          ].map((m, i) => (
            <div key={m.l} className={`px-2 py-4 text-center sm:py-2 ${i === 0 ? "" : ""}`}>
              <p className="font-serif text-3xl font-light text-neutral-900 sm:text-4xl">{m.k}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-neutral-400">{m.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PREMIUM — image left, copy right (dark feature) */}
      {/* premium fade transition white -> black */}
      <div className="h-24 bg-gradient-to-b from-white via-neutral-200/40 to-[#0A0A0A]" />
      <section className="relative bg-[#0A0A0A] text-white">
        {/* subtle grid + glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_50%_at_20%_30%,rgba(212,175,55,0.12),transparent_70%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-24 lg:grid-cols-12 lg:gap-14 lg:py-32">
          <div className="relative lg:col-span-5">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(50%_60%_at_50%_50%,rgba(212,175,55,0.18),transparent_70%)] blur-2xl" />
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)]">
              <img
                src={chessImg}
                alt="Peça de xadrez dourada — estratégia premium"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 left-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-white/60 backdrop-blur">
              <span className="h-1 w-1 rounded-full bg-amber-400" /> 02 — Premium
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-amber-300/80">Lives Premium</p>
            <h2 className="mt-3 font-serif text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Sala fechada. <br />
              <span className="italic text-amber-300">Decisões em segundos.</span>
            </h2>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/55">
              Leitura de fluxo ao vivo, gestão de risco, expiração e entrada
              chamadas em tempo real. Para quem opera sério e não tem mais tempo a perder.
            </p>

            <ul className="mt-6 space-y-2.5 text-[13px] text-white/70">
              {[
                { i: LineChart, t: "Leitura de gráfico em tempo real" },
                { i: Target, t: "Entradas CALL/PUT com expiração definida" },
                { i: ShieldCheck, t: "Gestão de risco e stop diário" },
                { i: Trophy, t: "Replays exclusivos das sessões" },
              ].map((i) => (
                <li key={i.t} className="flex items-center gap-3">
                  <i.i className="h-3.5 w-3.5 text-amber-300/80" strokeWidth={1.5} />
                  {i.t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/signup"
                className="group inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-5 text-[13px] font-medium text-neutral-900 transition hover:bg-neutral-100"
              >
                Garantir minha vaga
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </Link>
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/30">
                Apenas por convite
              </span>
            </div>
          </div>
        </div>

        {/* fade back to white */}
        <div className="h-24 bg-gradient-to-b from-[#0A0A0A] via-neutral-900/40 to-white" />
      </section>

      {/* FINAL CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-amber-700/80">
            Última palavra
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl">
            Pare de operar sozinho.
            <br />
            <span className="italic text-amber-700">Comece hoje.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-neutral-500">
            Acesso por convite. Vagas limitadas por turma para preservar a qualidade da sala.
          </p>
          <div className="mt-8">
            <Link
              to="/signup"
              className="group inline-flex h-11 items-center gap-1.5 rounded-full bg-neutral-900 px-6 text-[13px] font-medium text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] transition hover:bg-neutral-800"
            >
              Solicitar meu acesso
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200/80 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-7 text-[11px] text-neutral-500 sm:flex-row">
          <div className="flex items-center gap-2">
            <Crown className="h-3 w-3 text-amber-600" />
            <span className="tracking-[0.24em]">RZ TRADER STHUB</span>
          </div>
          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} RZ Trader Sthub. Trading envolve risco. Resultados passados não garantem futuros.
          </p>
        </div>
      </footer>
    </div>
  );
}

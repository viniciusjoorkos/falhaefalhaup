import { Link } from "react-router-dom";
import { ArrowRight, Crown, Calendar, Wallet, Trophy, ShieldCheck } from "lucide-react";
import DottedSurface from "@/components/home/DottedSurface";
import deskImg from "@/assets/club-desk.jpg";
import chessImg from "@/assets/club-chess.jpg";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-amber-200/70">
      {/* HERO — black, Apple-dark */}
      <section className="relative isolate overflow-hidden bg-[#050505] text-white">
        <DottedSurface />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(212,175,55,0.18),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />

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
        <div className="relative z-10 mx-auto max-w-4xl px-6 pb-36 pt-16 text-center sm:pb-44 sm:pt-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.45em] text-amber-300/80 sm:text-[10px] sm:tracking-[0.55em]">
            Falha <span className="mx-2 text-white/30">·</span> é <span className="mx-2 text-white/30">·</span> falha
          </p>

          <h1 className="mt-5 font-serif text-[36px] font-light leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[76px]">
            Sem desculpa.
            <br />
            <span className="italic text-amber-300/95">Sem ruído.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-sm text-[13px] leading-relaxed text-white/55 sm:max-w-md sm:text-[14px]">
            O clube fechado dos traders que pararam de inventar histórias para o próprio prejuízo.
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
        </div>
      </section>

      {/* EDITORIAL split — image + statement */}
      <section className="relative -mt-2 border-t border-neutral-200/70">
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
              tornar a sua banca consistente.
            </p>
            <div className="mt-7 flex items-center gap-6">
              <div>
                <p className="font-serif text-3xl font-light text-neutral-900">07</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-neutral-400">Lives / semana</p>
              </div>
              <div className="h-8 w-px bg-neutral-200" />
              <div>
                <p className="font-serif text-3xl font-light text-neutral-900">100%</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-neutral-400">Por convite</p>
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
            { icon: Calendar, t: "Lives diárias", d: "Opere junto com o expert, em tempo real." },
            { icon: Wallet, t: "Banca sob controle", d: "P&L automático. Stop antes do tilt." },
            { icon: Trophy, t: "Evolução visível", d: "Suba de nível pelo desempenho — não pelo ego." },
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

      {/* PREMIUM — image left, copy right (dark feature) */}
      <section className="relative bg-[#0A0A0A] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-24 lg:grid-cols-12 lg:gap-14 lg:py-32">
          <div className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-2xl">
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
              Frente a frente <br />
              <span className="italic text-amber-300">com o expert.</span>
            </h2>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/55">
              Sala fechada. Leitura ao vivo. Decisões em segundos — não em threads.
              Para quem opera sério e não tem mais tempo a perder.
            </p>

            <ul className="mt-6 space-y-2.5 text-[13px] text-white/70">
              {[
                "Acesso direto, sem intermediário",
                "Sinais e gestão de risco em tempo real",
                "Replays exclusivos das sessões",
              ].map((i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-amber-400" />
                  {i}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                to="/signup"
                className="group inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-5 text-[13px] font-medium text-neutral-900 transition hover:bg-neutral-100"
              >
                Garantir minha vaga
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
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

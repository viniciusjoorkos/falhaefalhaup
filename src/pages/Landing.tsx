import { Link } from "react-router-dom";
import { ArrowRight, Crown, Calendar, Wallet, Trophy, ShieldCheck } from "lucide-react";
import DottedSurface from "@/components/home/DottedSurface";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-amber-200/70">
      {/* Hero — black, Apple-dark, with dotted surface */}
      <section className="relative isolate overflow-hidden bg-[#050505] text-white">
        <DottedSurface />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(212,175,55,0.18),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />

        {/* Header */}
        <header className="relative z-10">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-amber-500/30 bg-black/40">
                <Crown className="h-4 w-4 text-amber-400" />
              </div>
              <span className="font-serif text-[15px] tracking-[0.32em] text-white/90">REZENDE&nbsp;CLUB</span>
            </Link>
            <nav className="flex items-center gap-2 text-sm">
              <Link
                to="/login"
                className="hidden h-9 items-center rounded-full px-4 text-sm text-white/70 transition hover:text-white sm:inline-flex"
              >
                Entrar
              </Link>
              <Link
                to="/signup"
                className="inline-flex h-9 items-center gap-1.5 rounded-full bg-white px-4 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
              >
                Solicitar acesso
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero copy */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-44 pt-20 text-center sm:pb-56 sm:pt-28">
          {/* Frase de impacto */}
          <p className="font-mono text-[10px] uppercase tracking-[0.6em] text-amber-300/80 sm:text-[11px]">
            <span className="inline-block animate-[fade-in_0.6s_ease-out]">F</span>
            <span>A</span><span>L</span><span>H</span><span>A</span>
            <span className="mx-3 text-white/30">/</span>
            <span>É</span>
            <span className="mx-3 text-white/30">/</span>
            <span>F</span><span>A</span><span>L</span><span>H</span><span>A</span>
          </p>

          <h1 className="mt-6 font-serif text-[44px] font-light leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-[92px]">
            Sem desculpa.
            <br />
            <span className="italic text-amber-300/95">Sem ruído.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-md text-[15px] leading-relaxed text-white/55">
            O clube fechado dos traders que param de inventar histórias para o próprio prejuízo.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/signup"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-neutral-900 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] transition hover:bg-neutral-100"
            >
              Quero meu acesso
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/login"
              className="inline-flex h-12 items-center rounded-full px-5 text-sm font-medium text-white/70 transition hover:text-white"
            >
              Já sou membro →
            </Link>
          </div>

          <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-white/30">
            Vagas limitadas · acesso por convite
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-neutral-200/80">
        <div className="mx-auto max-w-6xl px-6 pt-20 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-amber-700/80">Por que o club</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-light tracking-tight text-neutral-900 sm:text-4xl">
            Tudo que você precisa.
            <span className="text-neutral-400"> Nada que você não precisa.</span>
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-px bg-neutral-200/80 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Calendar, t: "Lives diárias", d: "Opere junto com o expert, em tempo real." },
            { icon: Wallet, t: "Banca sob controle", d: "P&L automático. Stop antes do tilt." },
            { icon: Trophy, t: "Evolução visível", d: "Suba de nível pelo desempenho — não pelo ego." },
            { icon: ShieldCheck, t: "Sem promessa fácil", d: "Método. Disciplina. Repetição." },
          ].map((f) => (
            <div key={f.t} className="bg-white p-8">
              <f.icon className="h-5 w-5 text-amber-600" strokeWidth={1.5} />
              <h3 className="mt-4 text-[15px] font-semibold text-neutral-900">{f.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Premium block */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <Crown className="mx-auto h-6 w-6 text-amber-600" strokeWidth={1.5} />
          <h2 className="mt-5 font-serif text-3xl font-light tracking-tight text-neutral-900 sm:text-5xl">
            Lives <em className="not-italic text-amber-600">Premium</em>.
            <br />
            Frente a frente com o expert.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-neutral-500">
            Sala fechada. Leitura ao vivo. Decisões em segundos — não em threads.
          </p>
          <Link
            to="/signup"
            className="group mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-neutral-900 px-7 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Garantir minha vaga
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-neutral-500 sm:flex-row">
          <div className="flex items-center gap-2">
            <Crown className="h-3.5 w-3.5 text-amber-600" />
            <span className="tracking-[0.18em]">REZENDE CLUB</span>
          </div>
          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} Rezende Club. Trading envolve risco. Resultados passados não garantem futuros.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, Crown, Calendar, Wallet, Trophy, ShieldCheck } from "lucide-react";
import DottedSurface from "@/components/home/DottedSurface";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-amber-200/70">
      {/* Hero — black with dotted surface */}
      <section className="relative isolate overflow-hidden bg-[#050505] text-white">
        <DottedSurface />
        {/* radial gold spotlight */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(212,175,55,0.18),transparent_70%)]" />
        {/* bottom fade to white */}
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
            <nav className="flex items-center gap-5 text-sm">
              <Link to="/login" className="hidden text-white/60 hover:text-white sm:inline">Entrar</Link>
              <Link
                to="/signup"
                className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-white/5 px-4 py-2 text-sm font-medium text-amber-300 backdrop-blur transition hover:bg-amber-500/10"
              >
                Solicitar acesso <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero copy */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-44 pt-24 text-center sm:pb-56 sm:pt-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.32em] text-amber-300/90 backdrop-blur">
            <span className="h-1 w-1 rounded-full bg-amber-400" /> Por convite
          </span>

          <h1 className="mt-8 font-serif text-5xl font-light leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-[88px]">
            Discreto.
            <br />
            <span className="italic text-amber-300/90">Restrito.</span>{" "}
            <span className="text-white/95">Premium.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-md text-sm tracking-wide text-white/55 sm:text-[15px]">
            Um círculo fechado de traders. Sem vitrine.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/signup"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-neutral-900 transition hover:bg-amber-100"
            >
              Entrar no club
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/login"
              className="inline-flex h-11 items-center rounded-full border border-white/15 px-6 text-sm font-medium text-white/80 transition hover:border-amber-400/50 hover:text-white"
            >
              Já sou membro
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars — typographic, no solid cards */}
      <section className="border-t border-neutral-200/80">
        <div className="mx-auto grid max-w-6xl gap-px bg-neutral-200/80 px-0 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Calendar, t: "Lives ao vivo", d: "Agenda integrada com salas reais." },
            { icon: Wallet, t: "Carteira", d: "Banca e P&L automáticos por sessão." },
            { icon: Trophy, t: "Níveis", d: "De Iniciante a Ouro pelo seu desempenho." },
            { icon: ShieldCheck, t: "Anti-tilt", d: "Alertas em sequências negativas." },
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
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <Crown className="mx-auto h-6 w-6 text-amber-600" strokeWidth={1.5} />
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Lives <em className="not-italic text-amber-600">Premium</em>.<br />
            Acesso direto ao expert.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-500">
            Salas exclusivas, sinais ao vivo e leitura de mercado em tempo real para membros premium.
          </p>
          <Link
            to="/signup"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-amber-500/40 bg-white px-6 text-sm font-medium text-amber-700 transition hover:bg-amber-50"
          >
            Começar agora <ArrowRight className="h-4 w-4" />
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

import { Link } from "react-router-dom";
import { ArrowRight, Crown, Calendar, Wallet, Trophy, ShieldCheck } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-amber-200/70">
      {/* fine gold hairline at top */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-neutral-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 text-white">
              <Crown className="h-4 w-4 text-amber-400" />
            </div>
            <span className="text-[15px] font-semibold tracking-[0.18em]">REZENDE&nbsp;CLUB</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link to="/login" className="hidden text-neutral-600 hover:text-neutral-900 sm:inline">Entrar</Link>
            <Link
              to="/signup"
              className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Criar conta <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 lg:pb-24 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">
              <span className="h-1 w-1 rounded-full bg-amber-500" /> Acesso por convite
            </span>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
              O lounge dos
              <span className="relative mx-2 inline-block">
                <span className="text-amber-600">traders</span>
                <span className="absolute -bottom-1 left-0 h-px w-full bg-amber-500/40" />
              </span>
              sérios.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base text-neutral-500 sm:text-lg">
              Lives ao vivo, gestão de banca e evolução por níveis — em um único ambiente, feito para quem opera com método.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/signup"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-neutral-900 px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Entrar no club <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/login"
                className="inline-flex h-11 items-center rounded-full border border-neutral-300 px-6 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
              >
                Já sou membro
              </Link>
            </div>
          </div>

          {/* Hero mockup */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="absolute inset-x-10 -bottom-8 h-24 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
              {/* mock window chrome */}
              <div className="flex items-center gap-1.5 border-b border-neutral-200 bg-white px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                <span className="ml-3 text-[10px] font-mono text-neutral-400">rezendeclub.app/dashboard</span>
              </div>

              <div className="grid grid-cols-12 gap-4 bg-neutral-950 p-4 text-white sm:p-6">
                {/* sidebar */}
                <aside className="col-span-3 hidden flex-col gap-1 rounded-xl bg-neutral-900/70 p-3 sm:flex">
                  <div className="flex items-center gap-2 px-2 py-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-800">
                      <Crown className="h-3.5 w-3.5 text-amber-400" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-widest">REZENDE</span>
                  </div>
                  {["Home", "Agenda", "Carteira", "Indique"].map((l, i) => (
                    <div
                      key={l}
                      className={`rounded-md px-3 py-2 text-[11px] ${
                        i === 0 ? "bg-neutral-800 text-amber-400" : "text-neutral-400"
                      }`}
                    >
                      {l}
                    </div>
                  ))}
                  <div className="mt-1 rounded-md bg-amber-500/10 px-3 py-2 text-[11px] text-amber-400">
                    ✦ Lives Premium
                  </div>
                </aside>

                {/* main */}
                <div className="col-span-12 flex flex-col gap-4 sm:col-span-9">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { l: "Saldo", v: "R$ 12.480", c: "text-amber-400" },
                      { l: "Sessões", v: "37", c: "text-white" },
                      { l: "Nível", v: "Ouro", c: "text-amber-400" },
                    ].map((s) => (
                      <div key={s.l} className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
                        <p className="text-[10px] uppercase tracking-widest text-neutral-500">{s.l}</p>
                        <p className={`mt-1 text-lg font-semibold ${s.c}`}>{s.v}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] uppercase tracking-widest text-neutral-500">Próxima live</p>
                      <span className="flex items-center gap-1.5 text-[10px] text-amber-400">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" /> AO VIVO
                      </span>
                    </div>
                    <p className="mt-2 text-base font-semibold">Operando tendência no M5</p>
                    <p className="text-[11px] text-neutral-500">hoje · 21:00</p>
                  </div>
                </div>
              </div>
            </div>
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

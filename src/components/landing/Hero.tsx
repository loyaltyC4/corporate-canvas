import { Reveal } from "./Reveal";

const provinces = [
  { code: "GP", name: "Gauteng" },
  { code: "WC", name: "Western Cape" },
  { code: "KZN", name: "KwaZulu-Natal" },
  { code: "EC", name: "Eastern Cape" },
  { code: "LP", name: "Limpopo" },
  { code: "MP", name: "Mpumalanga" },
  { code: "FS", name: "Free State" },
  { code: "NW", name: "North West" },
  { code: "NC", name: "Northern Cape" },
];

function Feather({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      style={style}
      fill="none"
      aria-hidden
    >
      <defs>
        <radialGradient id="featherGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#featherGrad)" />
      <path
        d="M40 12c8 10 12 18 12 28s-4 14-12 16c-8-2-12-6-12-16s4-18 12-28z"
        stroke="#0EA5E9"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path d="M40 14v40" stroke="#0EA5E9" strokeWidth="0.6" opacity="0.45" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-hair bg-radial-sky">
      <div className="absolute inset-0 bg-grid opacity-[0.3] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Decorative floating feathers / sky accents */}
      <Feather className="pointer-events-none absolute left-[6%] top-[18%] size-16 animate-float-slow opacity-70" />
      <Feather
        className="pointer-events-none absolute right-[8%] top-[14%] size-20 animate-float-slow opacity-60"
        style={{ animationDelay: "1.5s" }}
      />
      <Feather
        className="pointer-events-none absolute right-[14%] bottom-[14%] size-12 animate-drift opacity-50"
        style={{ animationDelay: "0.6s" }}
      />
      <Feather
        className="pointer-events-none absolute left-[12%] bottom-[20%] size-10 animate-drift opacity-40"
        style={{ animationDelay: "2.2s" }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy shadow-[0_8px_24px_-12px_rgba(14,165,233,0.4)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-electric/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
              </span>
              Live · National Treasury eTenders
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-8 font-serif text-[44px] leading-[1.04] tracking-[-0.015em] text-balance text-navy sm:text-[72px]">
              Government tenders
              <br />
              you can <em className="italic font-normal text-electric">actually win.</em>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-[1.65] text-navy/65 text-pretty">
              Real-time access to National Treasury eTenders. Find opportunities,
              <br className="hidden sm:block" />
              prepare smarter, <em className="italic text-navy/80">win more.</em>
            </p>
          </Reveal>

          {/* Search */}
          <Reveal delay={320}>
            <form
              className="mx-auto mt-10 flex max-w-2xl items-center gap-2 rounded-full border border-hair bg-white p-2 pl-2 shadow-premium focus-within:ring-2 focus-within:ring-electric/30"
              onSubmit={(e) => e.preventDefault()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-4 shrink-0 text-navy/40" aria-hidden>
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search free — cleaning, security, ICT, R500K…"
                className="flex-1 bg-transparent px-2 py-3 text-[15px] outline-none placeholder:text-navy/40"
              />
              <button className="rounded-full bg-electric px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-8px_rgba(14,165,233,0.55)] transition-all hover:bg-electric-soft active:scale-[0.98]">
                Search
              </button>
            </form>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-navy/40">
                Popular
              </span>
              {["Cleaning", "Security", "Construction", "ICT"].map((p) => (
                <button
                  key={p}
                  className="rounded-full border border-hair bg-white/70 px-3.5 py-1 text-xs font-medium text-navy/80 backdrop-blur-sm transition-all hover:-translate-y-px hover:border-electric/40 hover:text-navy"
                >
                  {p}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={520}>
            <div className="mx-auto mt-9 grid max-w-2xl grid-cols-3 gap-1.5 sm:grid-cols-9">
              {provinces.map((p) => (
                <button
                  key={p.code}
                  title={p.name}
                  className="group rounded-lg border border-hair bg-white/60 py-2.5 font-mono text-[10.5px] font-semibold uppercase tracking-wider text-navy/70 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-electric/50 hover:bg-white hover:text-navy hover:shadow-[0_8px_20px_-8px_rgba(14,165,233,0.35)]"
                >
                  {p.code}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={620}>
            <p className="mt-7 text-xs italic text-navy/45">
              Free to browse. No signup. Searched across all 9 provinces.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

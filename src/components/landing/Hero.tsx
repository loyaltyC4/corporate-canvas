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

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-hair bg-radial-sky">
      <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="relative mx-auto max-w-[1240px] px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-white/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-electric/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
            </span>
            Live · National Treasury eTenders
          </div>
          <h1 className="mt-7 font-serif text-[44px] leading-[1.05] tracking-[-0.01em] text-balance text-navy sm:text-[68px]">
            Government tenders you can{" "}
            <span className="italic text-electric">actually win.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-navy/65 text-pretty">
            Real-time access to National Treasury eTenders. Find opportunities, prepare smarter, win more.
          </p>

          {/* Search */}
          <form
            className="mx-auto mt-10 flex max-w-2xl items-center gap-2 rounded-2xl border border-hair bg-white p-2 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_24px_48px_-24px_rgba(30,58,95,0.25)] focus-within:ring-2 focus-within:ring-electric/30"
            onSubmit={(e) => e.preventDefault()}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-3 shrink-0 text-navy/40" aria-hidden>
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search free — cleaning, security, ICT, R500K…"
              className="flex-1 bg-transparent px-2 py-3 text-[15px] outline-none placeholder:text-navy/40"
            />
            <button className="rounded-xl bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-soft active:scale-[0.98]">
              Search
            </button>
          </form>

          {/* Popular */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-navy/40">
              Popular
            </span>
            {["Cleaning", "Security", "Construction", "ICT"].map((p) => (
              <button
                key={p}
                className="rounded-full border border-hair bg-white px-3 py-1 text-xs font-medium text-navy/80 transition-colors hover:border-electric/40 hover:text-navy"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Provinces */}
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-1.5 sm:grid-cols-9">
            {provinces.map((p) => (
              <button
                key={p.code}
                title={p.name}
                className="group rounded-md border border-hair bg-white/60 py-2 font-mono text-[10.5px] font-semibold uppercase tracking-wider text-navy/70 transition-all hover:border-electric/50 hover:bg-white hover:text-navy"
              >
                {p.code}
              </button>
            ))}
          </div>

          <p className="mt-6 text-xs text-navy/45">
            Free to browse. No signup. Searched across all 9 provinces.
          </p>
        </div>
      </div>
    </section>
  );
}

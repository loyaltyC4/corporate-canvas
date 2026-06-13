export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-b border-navy/40 bg-navy text-white">
      <div className="absolute inset-0 bg-grid opacity-[0.07]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-electric/25 blur-[120px]" />
      <div className="relative mx-auto max-w-[1240px] px-5 py-24 text-center sm:px-8 sm:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur-sm">
          <span className="size-1.5 animate-pulse-dot rounded-full bg-electric" />
          Live · National Treasury eTenders
        </div>
        <h2 className="mx-auto mt-7 max-w-3xl font-serif text-[44px] leading-[1.05] tracking-tight text-balance text-white sm:text-[72px]">
          Your next contract is <em className="italic text-electric-soft">out there.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[16.5px] leading-relaxed text-white/70">
          Free to browse. No signup. Built for South African SMMEs.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-xl bg-electric px-6 py-4 text-[15px] font-semibold text-white shadow-[0_18px_40px_-12px_rgba(14,165,233,0.7)] transition-all hover:bg-electric-soft active:scale-[0.98]"
          >
            Search tenders free
            <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden>
              <path d="M3 6h6m0 0L6 3m3 3L6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-[15px] font-semibold text-white/90 transition-colors hover:bg-white/10"
          >
            See pricing
          </a>
        </div>
        <p className="mt-8 font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/40">
          Live data from National Treasury eTenders · OCDS · POPIA-aligned
        </p>
      </div>
    </section>
  );
}

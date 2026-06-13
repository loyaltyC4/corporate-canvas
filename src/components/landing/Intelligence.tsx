function Sparkline({ values, className = "" }: { values: number[]; className?: string }) {
  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);
  const range = max - min || 1;
  const pts = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * 100;
      const y = 100 - ((v - min) / range) * 100;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={className} aria-hidden>
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={pts}
      />
    </svg>
  );
}

function Bars({ values, className = "" }: { values: number[]; className?: string }) {
  const max = Math.max(...values);
  return (
    <div className={`flex items-end gap-1.5 ${className}`}>
      {values.map((v, i) => (
        <div
          key={i}
          className="w-full rounded-sm bg-gradient-to-t from-electric/30 to-electric"
          style={{ height: `${(v / max) * 100}%` }}
        />
      ))}
    </div>
  );
}

const tiles = [
  {
    eyebrow: "Buyer Intelligence",
    title: "Which buyer awards in your category — and how often.",
    render: () => (
      <div className="space-y-2">
        {[
          ["City of Tshwane", 84],
          ["Dept of Health · GP", 72],
          ["Transnet SOC", 61],
          ["SAPS National", 48],
        ].map(([n, v]) => (
          <div key={n as string} className="flex items-center gap-3">
            <span className="w-32 truncate font-mono text-[10.5px] uppercase tracking-wider text-navy/55">{n}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-sky-tint">
              <div className="h-full rounded-full bg-gradient-to-r from-electric to-electric-soft" style={{ width: `${v}%` }} />
            </div>
            <span className="w-7 text-right font-mono text-[10.5px] tabular-nums text-navy/70">{v}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    eyebrow: "Supplier Analysis",
    title: "Who is winning, where, at what size.",
    render: () => (
      <div className="grid grid-cols-3 gap-2">
        {[
          ["EME", 41, "emerald"],
          ["QSE", 28, "electric"],
          ["Large", 31, "navy"],
        ].map(([label, pct, tone]) => (
          <div key={label as string} className="rounded-lg border border-hair bg-white p-3">
            <div className="font-serif text-2xl tabular-nums text-navy">{pct}%</div>
            <div className="mt-1 font-mono text-[9.5px] uppercase tracking-wider text-navy/50">{label}</div>
            <div className={`mt-2 h-1 rounded-full ${tone === "emerald" ? "bg-emerald-400" : tone === "electric" ? "bg-electric" : "bg-navy"}`} style={{ width: `${pct as number}%` }} />
          </div>
        ))}
      </div>
    ),
  },
  {
    eyebrow: "Spending Trends",
    title: "Where the money is flowing, quarter by quarter.",
    render: () => (
      <div className="relative h-24">
        <Sparkline className="h-full w-full text-electric" values={[24, 30, 22, 41, 38, 52, 48, 62, 70]} />
        <div className="absolute -bottom-0 left-0 right-0 flex justify-between font-mono text-[9px] uppercase tracking-wider text-navy/40">
          <span>Q1'24</span><span>Q3'24</span><span>Q1'25</span><span>Q3'25</span>
        </div>
      </div>
    ),
  },
  {
    eyebrow: "Competitor Watch",
    title: "Track who else is bidding for the contracts you want.",
    render: () => (
      <div className="space-y-2 font-mono text-[11px]">
        {[
          ["Alpha Cleaning Co.", "won R2.4M", "ok"],
          ["NorthStar Holdings", "shortlisted", "warn"],
          ["Sigma Group", "lost on price", "muted"],
        ].map(([who, status, tone]) => (
          <div key={who as string} className="flex items-center justify-between gap-3 rounded-md border border-hair bg-white px-3 py-2">
            <span className="truncate text-[12px] text-navy">{who}</span>
            <span className={
              tone === "ok"
                ? "rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700"
                : tone === "warn"
                  ? "rounded bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700"
                  : "rounded bg-sky-tint px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy/60"
            }>
              {status}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    eyebrow: "Price Benchmarks",
    title: "Know the winning price before you submit.",
    render: () => (
      <div>
        <Bars values={[3, 5, 8, 12, 18, 24, 22, 14, 9, 5]} className="h-24" />
        <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-navy/50">
          <span>R800K low</span>
          <span className="rounded bg-electric/10 px-1.5 py-0.5 text-electric">median R2.1M</span>
          <span>R4.6M high</span>
        </div>
      </div>
    ),
  },
  {
    eyebrow: "Payment Transparency",
    title: "See how reliably buyers actually pay.",
    render: () => (
      <div className="flex items-center gap-5">
        <div className="relative grid size-24 place-items-center">
          <svg viewBox="0 0 36 36" className="size-24 -rotate-90">
            <circle cx="18" cy="18" r="15.5" stroke="var(--sky-wash)" strokeWidth="3.5" fill="none" />
            <circle cx="18" cy="18" r="15.5" stroke="var(--brand-electric)" strokeWidth="3.5" fill="none" strokeDasharray="97 100" strokeLinecap="round" pathLength={100} />
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="font-serif text-2xl tabular-nums text-navy">82%</div>
              <div className="font-mono text-[9px] uppercase tracking-wider text-navy/50">on-time</div>
            </div>
          </div>
        </div>
        <ul className="flex-1 space-y-1.5 font-mono text-[11px]">
          <li className="flex justify-between"><span className="text-navy/60">&lt;30 days</span><span className="text-emerald-700">62%</span></li>
          <li className="flex justify-between"><span className="text-navy/60">30–60 days</span><span className="text-navy">20%</span></li>
          <li className="flex justify-between"><span className="text-navy/60">60+ days</span><span className="text-amber-700">18%</span></li>
        </ul>
      </div>
    ),
  },
];

const stats = [
  { label: "Awarded in window", value: "R48.2B", note: "across 12,840 published awards" },
  { label: "Small-business wins", value: "37.4%", note: "went to EME / QSE bidders" },
  { label: "Most active buyer", value: "Tshwane", note: "418 awards · 12 months" },
];

export function Intelligence() {
  return (
    <section id="intelligence" className="border-b border-hair bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-electric">
            Vula Intelligence
          </div>
          <h2 className="mt-4 font-serif text-[36px] leading-[1.1] tracking-tight text-navy sm:text-[52px]">
            See where the money <em className="italic text-electric">actually</em> goes.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-navy/65">
            Live award data from National Treasury, decoded: which buyers award, to whom, at what size, and how often small businesses win. Stop bidding blind.
          </p>
        </div>

        {/* Stat row */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hair bg-hair sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-6">
              <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/45">
                {s.label}
              </div>
              <div className="mt-2 font-serif text-3xl tabular-nums text-navy sm:text-4xl">{s.value}</div>
              <div className="mt-1.5 text-[13px] text-navy/60">{s.note}</div>
            </div>
          ))}
        </div>

        {/* Tiles */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t) => (
            <div
              key={t.eyebrow}
              className="group relative overflow-hidden rounded-2xl border border-hair bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-electric/30 hover:shadow-[0_24px_48px_-24px_rgba(30,58,95,0.25)]"
            >
              <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-electric">
                {t.eyebrow}
              </div>
              <h3 className="mt-3 text-[15.5px] font-semibold leading-snug text-navy">{t.title}</h3>
              <div className="mt-5">{t.render()}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl border border-hair bg-white px-5 py-3.5 text-sm font-semibold text-navy transition-all hover:border-electric/40 hover:bg-sky-tint"
          >
            Open Intelligence free
            <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden>
              <path d="M3 6h6m0 0L6 3m3 3L6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

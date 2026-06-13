const steps = [
  {
    n: "01",
    title: "Find a tender matched to your business",
    body: "Industry, province, contract size and your compliance profile. Matched daily.",
  },
  {
    n: "02",
    title: "See if you qualify before you bid",
    body: "B-BBEE level, CSD status, CIDB grade and tax clearance, checked against the tender pack.",
  },
  {
    n: "03",
    title: "Fix what stops you",
    body: "A clear gap plan with cost and timeline. Reach Level 2, unlock 40% more tenders.",
  },
];

const checks = [
  { label: "CSD registration", value: "MAAA0482917 · verified", status: "ok" },
  { label: "PSIRA grade", value: "Grade A · valid to Mar 2027", status: "ok" },
  { label: "Tax clearance", value: "PIN active · valid 11 months", status: "ok" },
  { label: "B-BBEE level", value: "Level 4 · target Level 2 for full points", status: "warn" },
];

export function Eligibility() {
  return (
    <section id="eligibility" className="border-b border-hair bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-electric">
              Eligibility engine
            </div>
            <h2 className="mt-4 font-serif text-[36px] leading-[1.1] tracking-tight text-navy sm:text-[52px]">
              Most bids die on <em className="italic text-electric">compliance</em>, not price.
            </h2>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-navy/65">
              One expired certificate. One missing SBD form. One CIDB grade too low. Other platforms show you the tender and wish you luck. Vula checks whether you qualify, then tells you exactly what to fix.
            </p>

            <div className="mt-12 space-y-8">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-hair bg-sky-tint font-mono text-sm font-semibold text-navy">
                    {s.n}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-semibold text-navy">{s.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-navy/65">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility card */}
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-sky-wash to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-hair bg-white shadow-[0_30px_80px_-40px_rgba(30,58,95,0.35)]">
              {/* Card header */}
              <div className="flex items-center justify-between border-b border-hair bg-sky-tint/60 px-6 py-4">
                <div className="min-w-0">
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/50">
                    Eligibility check
                  </div>
                  <div className="mt-0.5 truncate text-[13.5px] font-medium text-navy">
                    Security services · 8 municipal buildings, 24 months
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  Qualified
                </span>
              </div>

              <div className="px-6 py-5">
                <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/45">
                  City of Tshwane · Tender 2026/089-GP · closes 26 Jun 2026
                </div>
                <div className="mt-4 divide-y divide-hair">
                  {checks.map((c) => (
                    <div key={c.label} className="flex items-center justify-between gap-3 py-3">
                      <div className="min-w-0">
                        <div className="text-[13.5px] font-medium text-navy">{c.label}</div>
                        <div className="truncate font-mono text-[11.5px] text-navy/55">{c.value}</div>
                      </div>
                      {c.status === "ok" ? (
                        <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 font-mono text-[10px] font-bold tracking-wide text-emerald-700">
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                            <path d="m2 6 3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          PASS
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 font-mono text-[10px] font-bold tracking-wide text-amber-700">
                          GAP
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Verdict */}
                <div className="mt-5 rounded-xl border border-electric/25 bg-gradient-to-br from-electric/[0.07] to-sky-wash/40 p-5">
                  <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-electric">
                    <span className="size-1.5 rounded-full bg-electric" /> Vula verdict
                  </div>
                  <p className="mt-2 text-[15px] font-semibold leading-snug text-navy">
                    Bid, with one fix.
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-navy/65">
                    You meet the hard requirements. Two changes under R60K close the gap before the next round.
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="flex items-center gap-3 border-t border-hair bg-sky-tint/40 px-6 py-4">
                <div className="grid size-9 shrink-0 place-items-center rounded-full bg-navy font-serif text-sm font-bold text-white">
                  TN
                </div>
                <div className="min-w-0">
                  <p className="text-[12.5px] leading-snug text-navy/80">
                    “We found the tender on Monday and saw exactly what to fix by Tuesday.”
                  </p>
                  <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-wider text-navy/45">
                    Thandiwe Ngcobo · SparkleClean Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const tiers = [
  {
    name: "Free",
    price: "R0",
    cadence: "/forever",
    blurb: "For browsing and first-time bidders",
    features: [
      "Full tender search, all 9 provinces",
      "Saved tenders, saved searches and daily alerts",
      "Spending Trends and Supplier Analysis",
      "Funding directory access",
      "Bid pipeline board",
    ],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Pro",
    price: "R399",
    cadence: "/month",
    blurb: "For active bidders chasing 2–5 tenders a month",
    features: [
      "Everything in Free",
      "AI agent: overnight scan and tender pack analysis",
      "Bid or no-bid verdict with reasoning, per tender",
      "WhatsApp morning brief and unlimited alerts",
      "Per-tender eligibility checks and document vault",
    ],
    cta: "Start 14-day trial",
    popular: true,
  },
  {
    name: "Business",
    price: "R999",
    cadence: "/month",
    blurb: "For serious operators, bid teams and analysts",
    features: [
      "Everything in Pro",
      "Buyer Intelligence: win patterns per department",
      "Competitor Watch with award alerts",
      "Price Benchmarks per category",
      "Payment Transparency (BAS) and team seats",
    ],
    cta: "Start 14-day trial",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-hair bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-electric">
            Pricing
          </div>
          <h2 className="mt-4 font-serif text-[36px] leading-[1.1] tracking-tight text-navy sm:text-[48px]">
            One won tender pays for <em className="italic text-electric">years</em> of Vula.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-navy/65">
            Search is free, forever. Pay only for the intelligence: the agent, the eligibility engine, the vault and the insights suite.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                "relative flex flex-col rounded-2xl border p-8 transition-all " +
                (t.popular
                  ? "border-navy bg-navy text-white shadow-[0_40px_80px_-32px_rgba(30,58,95,0.5)]"
                  : "border-hair bg-white text-navy hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-24px_rgba(30,58,95,0.2)]")
              }
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-electric px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_-8px_rgba(14,165,233,0.7)]">
                  <span className="size-1 rounded-full bg-white" /> Most popular
                </span>
              )}
              <div className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] opacity-60">
                {t.name}
              </div>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="font-serif text-5xl tabular-nums">{t.price}</span>
                <span className={"text-[13.5px] " + (t.popular ? "text-white/60" : "text-navy/55")}>
                  {t.cadence}
                </span>
              </div>
              <p className={"mt-3 text-[14px] " + (t.popular ? "text-white/70" : "text-navy/65")}>
                {t.blurb}
              </p>

              <ul className="mt-7 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span
                      className={
                        "mt-0.5 grid size-4 shrink-0 place-items-center rounded-full " +
                        (t.popular ? "bg-electric/20 text-electric-soft" : "bg-electric/12 text-electric")
                      }
                    >
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path d="m2 6 2.5 2.5L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className={"text-[14px] leading-relaxed " + (t.popular ? "text-white/90" : "text-navy/85")}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={
                  "mt-8 inline-flex items-center justify-center gap-1.5 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all active:scale-[0.98] " +
                  (t.popular
                    ? "bg-electric text-white shadow-[0_12px_28px_-10px_rgba(14,165,233,0.7)] hover:bg-electric-soft"
                    : "border border-navy/15 bg-white text-navy hover:border-electric/40 hover:bg-sky-tint")
                }
              >
                {t.cta}
                <svg width="13" height="13" viewBox="0 0 12 12" aria-hidden>
                  <path d="M3 6h6m0 0L6 3m3 3L6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-[13px] leading-relaxed text-navy/55">
          Prices in ZAR, cancel anytime. Card or debit order. The insights suite runs on open National Treasury data (OCDS and BAS, PDDL licence): no per-query data fees, ever. Once-off services: <strong className="text-navy">CSD registration R800</strong> · <strong className="text-navy">B-BBEE affidavit R350</strong> · <strong className="text-navy">CIDB registration R1 500</strong>.
        </p>
      </div>
    </section>
  );
}

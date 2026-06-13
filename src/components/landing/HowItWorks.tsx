const steps = [
  { n: "01", t: "Tell us what your business does", b: "Industry, province, B-BBEE level. Five fields, no documents needed to start." },
  { n: "02", t: "We find tenders you can win", b: "Matched to your exact profile and ranked by fit, value and deadline." },
  { n: "03", t: "We help you qualify for more", b: "Eligibility gaps, expiry tracking, and a plan to a better B-BBEE level." },
];

export function HowItWorks() {
  return (
    <section className="border-b border-hair bg-sky-tint/60">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-electric">
            How it works
          </div>
          <h2 className="mt-4 font-serif text-[36px] leading-[1.1] tracking-tight text-navy sm:text-[46px]">
            Three steps. <em className="italic text-electric">Under three minutes.</em>
          </h2>
        </div>

        <div className="relative mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-12 hidden h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent md:block" />
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-hair bg-white p-7 text-center transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-24px_rgba(30,58,95,0.2)]"
            >
              <div className="mx-auto grid size-12 place-items-center rounded-full border border-electric/30 bg-white font-mono text-sm font-semibold text-electric shadow-[0_0_0_6px_var(--sky-wash)]">
                {s.n}
              </div>
              <h3 className="mt-5 text-[17px] font-semibold text-navy">{s.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-navy/65">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

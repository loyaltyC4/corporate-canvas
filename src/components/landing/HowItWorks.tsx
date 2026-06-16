import illuProfile from "@/assets/illu-profile.png";
import illuMatch from "@/assets/illu-match.png";
import illuGrow from "@/assets/illu-grow.png";

const steps = [
  {
    n: "01",
    t: "Tell us what your business does",
    b: "Industry, province, B-BBEE level. Five fields, no documents needed to start.",
    illu: illuProfile,
    alt: "Person filling out a business profile form",
  },
  {
    n: "02",
    t: "We find tenders you can win",
    b: "Matched to your exact profile and ranked by fit, value and deadline.",
    illu: illuMatch,
    alt: "Person inspecting a matched tender with a magnifying glass",
  },
  {
    n: "03",
    t: "We help you qualify for more",
    b: "Eligibility gaps, expiry tracking, and a plan to a better B-BBEE level.",
    illu: illuGrow,
    alt: "Person climbing steps holding a victory flag",
  },
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

        <div className="relative mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-[140px] hidden h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative rounded-3xl border border-hair surface-soft p-8 text-center shadow-premium transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Illustration */}
              <div className="relative mx-auto grid h-32 w-32 place-items-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-wash to-transparent blur-xl" />
                <img
                  src={s.illu}
                  alt={s.alt}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="relative h-32 w-32 object-contain transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
                />
              </div>

              <div className="relative mx-auto mt-2 grid size-12 place-items-center rounded-full bg-gradient-to-b from-electric to-electric-soft font-serif text-base font-bold text-white shadow-[0_10px_22px_-8px_rgba(14,165,233,0.55),0_0_0_6px_var(--sky-wash)]">
                <span className="relative">{parseInt(s.n)}</span>
                <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent" />
              </div>
              <h3 className="mt-5 font-serif text-[20px] leading-snug text-navy">{s.t}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-navy/65">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

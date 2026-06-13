const sources = [
  { name: "eTenders Treasury", count: 412, state: "ok" },
  { name: "Provincial portals", count: 274, state: "ok" },
  { name: "Municipal sites", count: 1843, state: "ok" },
  { name: "SOE procurement", count: 196, state: "ok" },
];

const matches = [
  { region: "GP", title: "Supply of office furniture", value: "R1.4M", score: 96 },
  { region: "KZN", title: "Civil works: road upgrade", value: "R12.8M", score: 91 },
  { region: "WC", title: "ICT equipment and licences", value: "R3.2M", score: 88 },
  { region: "LP", title: "Security services, 12 sites", value: "R6.0M", score: 84 },
];

export function AgentPanel() {
  return (
    <section id="agent" className="border-b border-hair bg-sky-tint/60">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Copy */}
          <div>
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-electric">
              Pro and Business
            </div>
            <h2 className="mt-4 font-serif text-[36px] leading-[1.1] tracking-tight text-navy sm:text-[52px]">
              Your tender agent, <em className="italic text-electric">working while you sleep.</em>
            </h2>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-navy/65">
              Vula's AI agent scans thousands of opportunities across South Africa while you focus on running your business.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                ["Scans all major sources", "eTenders, provincial portals, and municipal websites. Every night."],
                ["Finds the right opportunities", "AI matches tenders to your industry, location and capabilities."],
                ["Delivers only what matters", "Wake up to a short list of high-potential matches, not noise."],
                ["Stay ahead of the competition", "Be the first to know. Be the first to respond."],
              ].map(([title, body]) => (
                <li key={title} className="flex gap-3">
                  <svg width="18" height="18" viewBox="0 0 20 20" className="mt-0.5 shrink-0 text-electric" aria-hidden>
                    <path d="M4 10l4 4 8-9" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <div className="text-[15px] font-semibold text-navy">{title}</div>
                    <div className="mt-0.5 text-[14px] leading-relaxed text-navy/65">{body}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-navy/45">
              <span className="size-1.5 rounded-full bg-electric" />
              Secure · POPIA-aligned · South African
            </div>
          </div>

          {/* Terminal panel */}
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-[32px] bg-gradient-to-tr from-electric/15 via-sky-wash/40 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-navy/15 bg-navy text-white shadow-[0_40px_80px_-40px_rgba(30,58,95,0.6)]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="size-2.5 rounded-full bg-electric" />
                  <span className="ml-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/55">
                    vula · ai agent core
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/15 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                  <span className="size-1.5 animate-pulse-dot rounded-full bg-emerald-300" /> online
                </span>
              </div>

              <div className="grid gap-6 p-6 sm:grid-cols-2">
                <div>
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Overnight scan
                  </div>
                  <div className="mt-2 font-serif text-4xl tabular-nums text-white">2,725</div>
                  <div className="mt-1 font-mono text-[10.5px] text-white/45">tenders indexed since 23:00</div>

                  <div className="mt-6 space-y-2.5">
                    {sources.map((s) => (
                      <div key={s.name} className="flex items-center justify-between gap-3 rounded-md border border-white/5 bg-white/[0.04] px-3 py-2">
                        <div className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-electric" />
                          <span className="text-[12.5px] text-white/85">{s.name}</span>
                        </div>
                        <span className="font-mono text-[11px] tabular-nums text-white/60">
                          {s.count.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                      Matches found
                    </div>
                    <span className="font-mono text-[10px] text-white/40">SORTED · FIT</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {matches.map((m) => (
                      <div key={m.title} className="rounded-md border border-white/5 bg-white/[0.04] p-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="rounded-sm bg-electric/20 px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wider text-electric-soft">
                            {m.region}
                          </span>
                          <span className="font-mono text-[10.5px] tabular-nums text-white/55">
                            {m.value}
                          </span>
                        </div>
                        <div className="mt-1.5 truncate text-[12.5px] text-white">{m.title}</div>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-electric to-electric-soft"
                              style={{ width: `${m.score}%` }}
                            />
                          </div>
                          <span className="font-mono text-[10px] tabular-nums text-white/65">
                            {m.score}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#pricing"
                    className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-electric/30 bg-electric/10 px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-electric-soft transition-colors hover:bg-electric/20"
                  >
                    View all matches
                    <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden>
                      <path d="M3 6h6m0 0L6 3m3 3L6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 px-6 py-3">
                <div className="flex items-center justify-between font-mono text-[10.5px] text-white/45">
                  <span>While you read this, the agent indexed +12 new tenders.</span>
                  <span className="text-electric-soft">tomorrow's brief →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const tickerItems = [
  { dept: "DEPT OF HEALTH · GP", title: "Supply of medical consumables, 24-month framework", value: "R12.4M", state: "LIVE" },
  { dept: "CITY OF CAPE TOWN", title: "Security services across 14 reservoirs", value: "R3.8M", state: "NEW" },
  { dept: "TRANSNET FREIGHT RAIL", title: "Maintenance of Richards Bay rail corridor", value: "R48.2M", state: "LIVE" },
  { dept: "CITY OF TSHWANE", title: "Cleaning services, 8 municipal buildings", value: "R6.1M", state: "CLOSING" },
  { dept: "SAPS · NATIONAL", title: "Uniform procurement, 18 months", value: "R22.0M", state: "LIVE" },
  { dept: "DEPT OF EDUCATION · KZN", title: "ICT equipment and licensing", value: "R9.6M", state: "NEW" },
];

function TickerRow() {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12">
      <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-electric">
        ON THE WIRE
      </span>
      {tickerItems.map((t, i) => (
        <span key={i} className="flex items-center gap-3 font-mono text-[11.5px] text-white/85">
          <span className="text-white/40">{t.dept}</span>
          <span className="text-white">{t.title}</span>
          <span className="text-electric-soft">{t.value}</span>
          <span
            className={
              "rounded-sm px-1.5 py-0.5 text-[9px] font-bold tracking-wider " +
              (t.state === "CLOSING"
                ? "bg-amber-400/20 text-amber-200"
                : t.state === "NEW"
                  ? "bg-electric/25 text-electric-soft"
                  : "bg-emerald-400/20 text-emerald-200")
            }
          >
            {t.state}
          </span>
        </span>
      ))}
    </div>
  );
}

export function WireTicker() {
  return (
    <section id="wire" className="relative border-y border-navy/40 bg-navy text-white">
      <div className="mx-auto flex max-w-[1240px] items-center gap-8 px-5 py-3 sm:px-8">
        <div className="hidden shrink-0 items-center gap-6 border-r border-white/10 pr-8 sm:flex">
          <div>
            <div className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
              Active
            </div>
            <div className="font-mono text-xl font-semibold tabular-nums">1,248</div>
          </div>
          <div>
            <div className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
              Today
            </div>
            <div className="font-mono text-xl font-semibold tabular-nums text-electric-soft">+48</div>
          </div>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-navy to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-navy to-transparent" />
          <div className="flex w-max animate-marquee">
            <TickerRow />
            <TickerRow />
          </div>
        </div>
      </div>
    </section>
  );
}

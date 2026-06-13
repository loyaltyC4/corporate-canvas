const items = [
  { title: "Official data", sub: "Direct from National Treasury eTenders" },
  { title: "Live updates", sub: "New tenders as they're published" },
  { title: "Smarter matching", sub: "Find tenders that fit your business" },
  { title: "Free to start", sub: "No subscription. No catch." },
];

export function TrustStrip() {
  return (
    <section className="border-b border-hair bg-white">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-px overflow-hidden bg-hair px-0 sm:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="bg-white px-6 py-7">
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-electric" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/50">
                {it.title}
              </span>
            </div>
            <p className="mt-3 text-[15px] font-medium leading-snug text-navy">{it.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

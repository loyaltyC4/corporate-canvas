export function WhatsAppBrief() {
  return (
    <section id="whatsapp" className="border-b border-hair bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Chat preview */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-[420px]">
              <div className="absolute -inset-8 -z-10 rounded-[36px] bg-gradient-to-br from-sky-wash via-white to-transparent blur-2xl" />
              <div className="overflow-hidden rounded-3xl border border-hair bg-[#ECE5DD] shadow-[0_40px_80px_-40px_rgba(30,58,95,0.35)]">
                {/* Header */}
                <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
                  <div className="grid size-9 place-items-center rounded-full bg-white/10 font-serif text-base font-bold">
                    V
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[14px] font-semibold">Vula Agent</div>
                    <div className="flex items-center gap-1.5 text-[11px] text-white/70">
                      <span className="size-1.5 rounded-full bg-emerald-300" /> online
                    </div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="text-white/80">
                    <circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" />
                  </svg>
                </div>

                {/* Messages */}
                <div className="space-y-3 px-4 py-5">
                  <div className="text-center">
                    <span className="rounded bg-white/70 px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-wider text-navy/60">
                      Today · 07:02
                    </span>
                  </div>

                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-[#DCF8C6] px-3.5 py-2.5 text-[13.5px] leading-snug text-navy shadow-sm">
                    Good morning, Thandiwe. <strong>3 new tenders</strong> match your profile. <strong>1 closes Friday.</strong>
                  </div>

                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-[#DCF8C6] px-3.5 py-2.5 text-[13.5px] leading-snug text-navy shadow-sm">
                    <div className="font-semibold">R2.1M cleaning tender · Gauteng Health</div>
                    <div className="mt-1 text-[12.5px] text-navy/70">
                      You qualify on all 3 hard requirements.
                    </div>
                    <a className="mt-2 inline-block font-mono text-[11px] font-semibold uppercase tracking-wider text-electric">
                      Review →
                    </a>
                  </div>

                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-[#DCF8C6] px-3.5 py-2.5 text-[13.5px] leading-snug text-navy shadow-sm">
                    <span className="inline-flex items-center gap-1.5 rounded bg-amber-100 px-1.5 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-wider text-amber-800">
                      Reminder
                    </span>
                    <p className="mt-1.5">Your <strong>tax clearance</strong> expires in 21 days.</p>
                    <a className="mt-1 inline-block font-mono text-[11px] font-semibold uppercase tracking-wider text-electric">
                      Renew →
                    </a>
                  </div>
                </div>

                {/* Input bar */}
                <div className="flex items-center gap-2 border-t border-black/5 bg-[#F0F0F0] px-3 py-2.5">
                  <div className="flex-1 rounded-full bg-white px-3 py-1.5 text-[12px] text-navy/40">
                    Reply to ask anything…
                  </div>
                  <div className="grid size-8 place-items-center rounded-full bg-[#075E54] text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-electric">
              New
            </div>
            <h2 className="mt-4 font-serif text-[36px] leading-[1.1] tracking-tight text-navy sm:text-[52px]">
              The brief comes to <em className="italic text-electric">WhatsApp.</em>
            </h2>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-navy/65">
              No app to remember. No inbox to dig through. Your matched tenders, closing reminders and document alerts arrive where South African business already happens.
            </p>

            <ul className="mt-10 space-y-3.5 text-[15px] text-navy">
              {[
                "07:02 morning brief",
                "Closing-date nudges",
                "Document expiry alerts",
                "Reply to ask anything",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid size-6 place-items-center rounded-full bg-electric/12 text-electric">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="m2 6 2.6 2.6L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(30,58,95,0.5)] transition-all hover:bg-navy-soft active:scale-[0.98]"
            >
              Set up my WhatsApp brief
              <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden>
                <path d="M3 6h6m0 0L6 3m3 3L6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

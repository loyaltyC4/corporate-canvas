import { Logo } from "./Logo";

const links = [
  { label: "Live tenders", href: "#wire" },
  { label: "Funding", href: "#intelligence" },
  { label: "WhatsApp", href: "#whatsapp" },
  { label: "Dashboard", href: "#agent" },
  { label: "Pricing", href: "#pricing" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-hair bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between gap-3 px-5 sm:px-8">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>
        <div className="hidden items-center gap-8 text-[13.5px] font-medium text-navy/70 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-navy">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden rounded-md px-3 py-2 text-[13.5px] font-medium text-navy/80 transition-colors hover:bg-sky-tint sm:inline-block"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_12px_28px_-12px_rgba(30,58,95,0.55)] transition-all hover:-translate-y-px hover:bg-navy-soft active:scale-[0.98]"
          >
            Get started
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M3 6h6m0 0L6 3m3 3L6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

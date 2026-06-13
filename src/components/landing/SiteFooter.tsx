import { Logo } from "./Logo";

const columns = [
  {
    title: "Browse tenders",
    links: ["All live tenders", "Closing this week", "Cleaning tenders", "Construction tenders", "Security tenders", "ICT tenders"],
  },
  {
    title: "For SMMEs",
    links: ["How to win SA tenders", "CSD registration guide", "B-BBEE levels explained", "Bridging finance guide", "Tender glossary", "Funding directory"],
  },
  {
    title: "Product",
    links: ["Dashboard", "Buyer Intelligence", "WhatsApp brief", "Pricing", "Blog and guides"],
  },
  {
    title: "Company",
    links: ["Vula vs eTenders", "CSD registration (R800)", "B-BBEE affidavit (R350)", "Privacy (POPIA)", "Terms", "Contact on WhatsApp"],
  },
];

const provinces = [
  "Gauteng", "KwaZulu-Natal", "Western Cape", "Eastern Cape", "Limpopo", "Mpumalanga", "Free State", "North West", "Northern Cape",
];

export function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-navy/65">
              Every government tender in South Africa, in one place. Built for the businesses doing the work.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-hair bg-sky-tint px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-navy/65">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-electric" />
              Wire live · OCDS · POPIA-aligned
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-navy/50">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[14px] text-navy/75 transition-colors hover:text-navy">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-hair pt-8">
          <div className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-navy/45">
            Tenders by province
          </div>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {provinces.map((p) => (
              <a key={p} href="#" className="text-[13.5px] text-navy/65 hover:text-navy">
                {p}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-hair pt-6 sm:flex-row sm:items-center">
          <p className="text-[12.5px] text-navy/55">© 2026 Vula (Pty) Ltd, Johannesburg.</p>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-navy/45">
            Open data · National Treasury eTenders OCDS · PDDL licence
          </p>
        </div>
      </div>
    </footer>
  );
}

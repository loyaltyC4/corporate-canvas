import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I find government tenders in South Africa?",
    a: "Every public tender is published on National Treasury's eTenders portal, provincial portals and municipal sites. Vula pulls all of them into one live search, matches them to your business profile, and alerts you on WhatsApp or email the morning new ones land. Searching is free with no signup.",
  },
  {
    q: "What is CSD registration and do I need it to bid?",
    a: "The Central Supplier Database (CSD) is government's master list of approved suppliers. You need an active CSD number (MAAA-) to be awarded any public contract. Registration is free; Vula can handle it for you as a once-off service (R800) and tracks your status afterwards.",
  },
  {
    q: "What B-BBEE level do I need to win tenders?",
    a: "Most tenders score 80/20 or 90/10: price plus preference points tied to your B-BBEE level. Level 1 earns full points; an EME under R10M turnover qualifies automatically via affidavit. Vula shows the level each tender favours and what closing your gap would unlock.",
  },
  {
    q: "How do tender alerts on WhatsApp work?",
    a: "Tell Vula your industry and province once. Every morning at 07:02 the agent sends a WhatsApp brief with new matched tenders, closing-date reminders and document expiry warnings. One thumb-scroll, no portals.",
  },
  {
    q: "What powers the analytics tools?",
    a: "Spending Trends, Supplier Analysis and Buyer Intelligence run on live OCDS award data from National Treasury. Payment tools build on Treasury's published BAS data. All open government data under the PDDL licence.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no notice periods, no phone calls. Cancel from your dashboard in two clicks and keep access until the end of your billing month.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-b border-hair bg-sky-tint/40">
      <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="text-center">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-electric">
            FAQ
          </div>
          <h2 className="mt-4 font-serif text-[34px] leading-[1.1] tracking-tight text-navy sm:text-[44px]">
            Questions you should ask.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-xl border border-hair bg-white px-5 transition-colors hover:border-electric/30 [&[data-state=open]]:border-electric/40 [&[data-state=open]]:shadow-[0_24px_48px_-32px_rgba(30,58,95,0.25)]"
            >
              <AccordionTrigger className="py-5 text-left text-[15.5px] font-semibold text-navy hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[14.5px] leading-relaxed text-navy/70">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

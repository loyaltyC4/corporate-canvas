## What I'm building

A complete redesign of the Vula landing page that keeps every section and all the copy from the live site, but upgrades it to a premium, well-funded corporate aesthetic — Institutional Terminal direction (light blue theme, editorial serif headlines, monospace data accents, live wire ticker).

Since this is a TanStack Start project with a placeholder `index.tsx`, the redesign goes onto the home route as the new landing page.

## Locked design system

- **Palette (Arctic Enterprise — light, no yellow):**
  - Background tints: `#F0F7FF`, `#E0F2FE`, `#FFFFFF`
  - Text / deep brand: `#1E3A5F` (steel navy)
  - Accent / CTAs / live indicator: `#0EA5E9` (electric sky)
  - Supporting: hairline borders at navy 10% opacity, success green for "live/eligible" chips
- **Typography:** Libre Baskerville (headings, occasional italic), IBM Plex Sans (body/UI), IBM Plex Mono (data, eyebrows, tickers, tender IDs)
- **Layout:** full-width stacked bands, each separated by hairline rules, 1240px max content width

## Page sections (all preserved from the original copy)

1. **Sticky translucent nav** — Vula wordmark + SVG logo, links (Live tenders, Funding, WhatsApp, Dashboard, Pricing), Sign in + Get started CTA
2. **Hero** — "Live · National Treasury eTenders" pulse badge, serif headline with italic "win.", free search bar, popular chips (Cleaning, Security, Construction, ICT), all 9 province chips
3. **Trust strip** — 4 pillars (Official data, Live updates, Smarter matching, Free to start) with electric dot bullets
4. **Live wire ticker** — full-width navy band, monospace marquee with live tender headlines + active/today counters
5. **Eligibility section** — "Most bids die on compliance, not price." 01/02/03 steps + a real-looking eligibility check card (Tender ID, CSD/PSIRA/B-BBEE rows, gap plan, "Bid, with one fix" verdict, Thandiwe testimonial)
6. **AI Agent section** — terminal-style mock panel listing scanned sources + matches, with the copy from the original
7. **WhatsApp brief section** — phone-style chat preview with the 07:02 morning brief, closing reminders, doc expiry alert
8. **Intelligence section** — "See where the money actually goes." Stat row + 6 capability tiles (Buyer Intelligence, Supplier Analysis, Spending Trends, Competitor Watch, Price Benchmarks, Payment Transparency), each tile a real mini product surface (mini chart, table snippet, status list — not plain text)
9. **How it works** — three-step "Under three minutes" band
10. **Pricing** — three tiers (Free R0, Pro R399 "Most Popular", Business R999) with full feature lists + the once-off services line (CSD R800, B-BBEE R350, CIDB R1500)
11. **FAQ** — accordion with all 6 questions from the original
12. **Final CTA** — "Your next contract is out there." + Search tenders free
13. **Rich footer** — Browse tenders, For SMMEs, Product, Company columns + province links + POPIA / OCDS line

## Feature-card upgrade (addressing "too bland")

Every card stops being a plain bordered box. Each becomes a miniature product surface:
- Eligibility card → real checklist rows with status chips and a "Vula Verdict" callout
- Agent card → terminal-style scan log with green match lines + status pill
- WhatsApp card → realistic chat bubble layout with timestamp
- Intelligence tiles → each tile gets its own micro visualization (bar slivers, sparkline, ranked list, status dots, percentage ring) rendered in pure CSS/SVG

## Technical approach

- Put the full page into `src/routes/index.tsx`. Break into local components inside `src/components/landing/` so the route file stays readable: `Nav`, `Hero`, `TrustStrip`, `WireTicker`, `Eligibility`, `AgentPanel`, `WhatsAppBrief`, `Intelligence`, `HowItWorks`, `Pricing`, `FAQ`, `FinalCTA`, `SiteFooter`.
- Update `src/styles.css` with the locked palette tokens (override `--background`, `--foreground`, `--primary`, `--accent`, add `--brand-navy`, `--brand-electric`, `--sky-tint`, `--sky-wash`) and load Libre Baskerville + IBM Plex Sans + IBM Plex Mono via `<link>` in `src/routes/__root.tsx`. Register `--font-serif`, `--font-sans`, `--font-mono` in `@theme` so utilities like `font-serif` work.
- Update `__root.tsx` head() with proper SEO (title, description, OG, Twitter) using the real Vula copy.
- Use shadcn `Accordion` for FAQ, shadcn `Button` variants for CTAs, plain semantic markup elsewhere.
- Add a CSS keyframe `marquee` for the wire ticker.
- Animations: scroll-fade utility classes already available (`animate-fade-in`), apply sparingly to section headlines and cards; hover-lift on pricing and intelligence tiles.
- No backend changes, no Cloud needed — purely presentation.

## Out of scope

- Live data wiring (the ticker, counts, and tender items are realistic static mocks for now)
- Authentication / dashboard / pricing checkout
- Sub-routes like `/pricing`, `/live-tenders` (can be follow-up)

Ready to build when you approve.
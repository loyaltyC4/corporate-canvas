import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { WireTicker } from "@/components/landing/WireTicker";
import { Eligibility } from "@/components/landing/Eligibility";
import { AgentPanel } from "@/components/landing/AgentPanel";
import { WhatsAppBrief } from "@/components/landing/WhatsAppBrief";
import { Intelligence } from "@/components/landing/Intelligence";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { Reveal } from "@/components/landing/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vula — Government tenders you can actually win" },
      {
        name: "description",
        content:
          "Real-time access to National Treasury eTenders. Find opportunities, check eligibility, prepare smarter, win more. Built for South African SMMEs.",
      },
      { property: "og:title", content: "Vula — Government tenders you can actually win" },
      {
        property: "og:description",
        content: "Real-time access to National Treasury eTenders. Built for South African SMMEs.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-white text-navy">
      <Nav />
      <Hero />
      <Reveal><TrustStrip /></Reveal>
      <Reveal><WireTicker /></Reveal>
      <Reveal><Eligibility /></Reveal>
      <Reveal><AgentPanel /></Reveal>
      <Reveal><WhatsAppBrief /></Reveal>
      <Reveal><Intelligence /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><Pricing /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><FinalCTA /></Reveal>
      <SiteFooter />
    </main>
  );
}

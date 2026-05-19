import type { Metadata } from "next";
import { content } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import SocialProof from "@/components/sections/SocialProof";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import DownloadCTA from "@/components/sections/DownloadCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tutor IA — AI Tutor for students aged 13–18",
  description:
    "Learn by voice, text, and photo. Socratic method. Aligned with ENEM and vestibular. Available 24/7.",
};

const c = content.en;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function EnglishPage() {
  return (
    <main>
      <Navbar c={c.nav} basePath={basePath} />
      <Hero c={c.hero} />
      <Problem c={c.problem} />
      <Features c={c.features} />
      <HowItWorks c={c.howItWorks} />
      <SocialProof c={c.social} />
      <Pricing c={c.pricing} />
      <FAQ c={c.faq} />
      <DownloadCTA c={c.cta} />
      <Footer c={c.footer} />
    </main>
  );
}

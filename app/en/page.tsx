import type { Metadata } from "next";
import { content } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Comparison from "@/components/sections/Comparison";
import Editorial from "@/components/sections/Editorial";
import Features from "@/components/sections/Features";
import SocialProof from "@/components/sections/SocialProof";
import FAQ from "@/components/sections/FAQ";
import DownloadCTA from "@/components/sections/DownloadCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Clari — AI Tutor for students aged 13–18",
  description:
    "Learn by voice, text, and photo. Socratic method. Aligned with ENEM and vestibular. Available 24/7.",
  alternates: { canonical: "/en/" },
};

const c = content.en;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function EnglishPage() {
  return (
    <main className="grain">
      <Navbar c={c.nav} basePath={basePath} />
      <Hero c={c.hero} lang="en" />
      <Comparison lang="en" />
      <Features c={c.features} />
      <Editorial lang="en" />
      <SocialProof c={c.social} />
      <FAQ c={c.faq} />
      <DownloadCTA c={c.cta} />
      <Footer c={c.footer} />
    </main>
  );
}

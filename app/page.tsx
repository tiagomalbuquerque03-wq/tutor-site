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

const c = content.pt;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <main className="grain">
      <Navbar c={c.nav} cta={c.cta} basePath={basePath} lang="pt" />
      <Hero c={c.hero} cta={c.cta} lang="pt" />
      <Comparison lang="pt" />
      <Features c={c.features} />
      <Editorial lang="pt" />
      <SocialProof c={c.social} />
      <FAQ c={c.faq} />
      <DownloadCTA c={c.cta} lang="pt" />
      <Footer c={c.footer} />
    </main>
  );
}

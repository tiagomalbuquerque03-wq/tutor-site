"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Content } from "@/lib/content";


export default function Navbar({
  c,
  cta,
  basePath,
  lang,
}: {
  c: Content["nav"];
  cta: Content["cta"];
  basePath: string;
  lang: "pt" | "en";
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when modal is open
  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href={`${basePath}/`} className="flex items-center gap-2.5 group">
            <img src={`${basePath}/clari-icon.png`} alt="Clari" className="w-11 h-11 rounded-2xl" />
            <span
              className="font-bold text-3xl tracking-tight"
              style={{ fontFamily: "'Nunito', system-ui, sans-serif", color: "var(--text-primary)" }}
            >
              clari
            </span>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href={c.langHref}
              className="text-sm font-medium px-3 py-1.5 rounded-md transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              {c.lang}
            </Link>

            {/* iOS App Store button */}
            <a
              href={cta.iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.25)",
                color: "#6366F1",
                fontFamily: "var(--font-space-grotesk)",
                textDecoration: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#6366F1">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              {cta.iosLabel}
            </a>

            {/* Android waitlist button — scrolls to #download */}
            <a
              href="#download"
              className="text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "var(--accent-blue)",
                color: "#fff",
                fontFamily: "var(--font-space-grotesk)",
                textDecoration: "none",
              }}
            >
              {c.download}
            </a>
          </div>
        </div>
      </header>

    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Content } from "@/lib/content";

export default function Navbar({ c, basePath }: { c: Content["nav"]; basePath: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(8, 12, 23, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={`${basePath}/`} className="flex items-center gap-2.5 group">
          <img
            src={`${basePath}/clari-icon.png`}
            alt="Clari"
            className="w-11 h-11 rounded-2xl"
          />
          <span
            className="font-bold text-xl tracking-tight"
            style={{ fontFamily: "var(--font-poppins)", color: "#fff" }}
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
          <a
            href="#download"
            className="text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:opacity-90 active:scale-95"
            style={{
              background: "var(--accent-blue)",
              color: "#fff",
              fontFamily: "var(--font-space-grotesk)",
            }}
          >
            {c.download}
          </a>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Content } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function DownloadCTA({ c }: { c: Content["cta"] }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelector(".cta-inner"),
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      }
    );
  }, []);

  return (
    <section
      id="download"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Top border */}
      <div className="section-sep absolute top-0 left-0 right-0" />

      {/* Big glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(58,130,255,0.12) 0%, transparent 70%)" }}
      />

      {/* Dot grid accent */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none dot-grid"
      />

      <div className="cta-inner relative max-w-3xl mx-auto text-center">
        <h2
          className="font-bold mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            color: "var(--text-primary)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          {c.headline}
        </h2>
        <p
          className="text-lg mb-12"
          style={{ color: "var(--text-muted)" }}
        >
          {c.sub}
        </p>

        {/* Store buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Google Play */}
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all hover:opacity-90 active:scale-95"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-strong)",
              color: "var(--text-primary)",
              minWidth: 180,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3.18 1.5c-.42.26-.68.73-.68 1.29v18.42c0 .56.26 1.03.68 1.29l.08.06 10.31-10.31v-.24L3.26 1.44l-.08.06z" fill="#4285F4"/>
              <path d="M17.02 15.04l-3.44-3.44V11.36l3.44-3.44 1.54.88c.44.25.72.68.72 1.16 0 .48-.28.91-.72 1.16l-1.54.92z" fill="#FBBC04"/>
              <path d="M17.57 14.13l-4-4v-.26l4-4 .99.57c.44.25.72.68.72 1.16 0 .48-.28.91-.72 1.16l-.99.57z" fill="url(#gp1)"/>
              <path d="M3.18 22.5l10.4-10.4-3.45-3.44L3.18 15.6v6.9z" fill="#34A853"/>
              <path d="M3.18 1.5l10.4 10.4-3.45 3.44L3.18 8.4v-6.9z" fill="#EA4335"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] leading-none mb-0.5" style={{ color: "var(--text-muted)" }}>Em breve no</p>
              <p className="font-semibold text-sm leading-none" style={{ fontFamily: "var(--font-space-grotesk)" }}>Google Play</p>
            </div>
          </a>

          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all hover:opacity-90 active:scale-95"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-strong)",
              color: "var(--text-primary)",
              minWidth: 180,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] leading-none mb-0.5" style={{ color: "var(--text-muted)" }}>Em breve na</p>
              <p className="font-semibold text-sm leading-none" style={{ fontFamily: "var(--font-space-grotesk)" }}>App Store</p>
            </div>
          </a>
        </div>

        {/* Waitlist note */}
        <p className="mt-6 text-sm" style={{ color: "var(--text-muted)" }}>
          {c.soon}
        </p>
      </div>
    </section>
  );
}

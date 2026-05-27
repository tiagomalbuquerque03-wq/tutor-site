"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AppMockup from "@/components/AppMockup";
import type { Content } from "@/lib/content";

export default function Hero({
  c,
  cta,
  lang = "pt",
}: {
  c: Content["hero"];
  cta: Content["cta"];
  lang?: "pt" | "en";
}) {
  const photoRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on photo
  useEffect(() => {
    const onScroll = () => {
      if (!photoRef.current) return;
      const y = window.scrollY * 0.35;
      photoRef.current.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Background photo ── */}
      <div ref={photoRef} className="absolute inset-0 will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1920&q=85&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.45) saturate(0.8)" }}
        />
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(6,9,15,0.82) 0%, rgba(6,9,15,0.55) 55%, rgba(6,9,15,0.35) 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }}
      />

      {/* Blue accent glow left */}
      <div
        className="absolute top-1/3 left-0 w-96 h-96 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(58,130,255,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left — copy */}
          <div className="max-w-2xl">
            {/* Main headline — HUGE */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="display-xl mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              {c.headline[0]}
              <br />
              <span className="gradient-text">{c.headline[1]}</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "var(--text-muted)" }}
            >
              {c.sub}
            </motion.p>

            {/* Platform CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-12"
            >
              {/* iOS — QR on desktop, link on mobile */}
              <div className="flex flex-col items-center gap-2">
                {/* Desktop: QR code */}
                <a
                  href={cta.iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:block"
                >
                  <div
                    className="rounded-xl overflow-hidden p-1.5 transition-transform hover:scale-105"
                    style={{ background: "#fff", boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
                  >
                    <img
                      src={lang === "pt" ? "/qr-ios-pt.png" : "/qr-ios-en.png"}
                      alt="QR Code App Store"
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                </a>
                {/* Mobile: button */}
                <a
                  href={cta.iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
                  style={{
                    background: "var(--accent-blue)",
                    color: "#fff",
                    fontFamily: "var(--font-space-grotesk)",
                    textDecoration: "none",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  {cta.iosLabel}
                </a>
                <span className="hidden sm:block text-xs text-center" style={{ color: "var(--text-muted)" }}>
                  {cta.iosScan}
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:flex flex-col items-center gap-1 self-stretch justify-center">
                <div className="w-px flex-1" style={{ background: "var(--border-strong)" }} />
                <span className="text-xs px-1" style={{ color: "var(--text-muted)" }}>
                  {lang === "pt" ? "ou" : "or"}
                </span>
                <div className="w-px flex-1" style={{ background: "var(--border-strong)" }} />
              </div>

              {/* Android — waitlist button */}
              <div className="flex flex-col items-center gap-2">
                <a
                  href="#download"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-strong)",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-space-grotesk)",
                    textDecoration: "none",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M3.18 1.5c-.42.26-.68.73-.68 1.29v18.42c0 .56.26 1.03.68 1.29l.08.06 10.31-10.31v-.24L3.26 1.44l-.08.06z" fill="#8A94A6"/>
                    <path d="M17.02 15.04l-3.44-3.44V11.36l3.44-3.44.78.44c.44.25.72.68.72 1.16 0 .48-.28.91-.72 1.16l-.78.32z" fill="#8A94A6"/>
                    <path d="M3.18 22.5l10.4-10.4-3.45-3.44L3.18 15.6v6.9z" fill="#8A94A6"/>
                    <path d="M3.18 1.5l10.4 10.4-3.45 3.44L3.18 8.4v-6.9z" fill="#8A94A6"/>
                  </svg>
                  {cta.androidLabel} — {lang === "pt" ? "lista de espera" : "join waitlist"}
                </a>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {cta.androidComingSoon}
                </span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-10"
            >
              {[c.stat1, c.stat2, c.stat3].map((s, i) => (
                <div key={i}>
                  <p
                    className="text-3xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — phone */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden lg:flex justify-end animate-float"
          >
            <AppMockup lang={lang} />
          </motion.div>
        </div>

        {/* Mobile phone */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex lg:hidden justify-center mt-12"
        >
          <AppMockup lang={lang} />
        </motion.div>
      </div>
    </section>
  );
}

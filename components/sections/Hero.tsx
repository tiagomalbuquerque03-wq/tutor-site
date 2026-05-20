"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AppMockup from "@/components/AppMockup";
import type { Content } from "@/lib/content";

export default function Hero({ c, lang = "pt" }: { c: Content["hero"]; lang?: "pt" | "en" }) {
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
          style={{ filter: "brightness(0.28) saturate(0.7)" }}
        />
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(6,9,15,0.97) 0%, rgba(6,9,15,0.7) 55%, rgba(6,9,15,0.5) 100%)",
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
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-10"
              style={{
                background: "rgba(58,130,255,0.1)",
                border: "1px solid rgba(58,130,255,0.25)",
                color: "#60A5FA",
                fontFamily: "var(--font-space-grotesk)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent-blue)" }} />
              {c.badge}
            </motion.div>

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
              className="text-lg leading-relaxed mb-12 max-w-xl"
              style={{ color: "var(--text-muted)" }}
            >
              {c.sub}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-16"
            >
              <a
                href="#download"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: "var(--accent-blue)",
                  color: "#fff",
                  fontFamily: "var(--font-space-grotesk)",
                  boxShadow: "0 8px 40px rgba(58,130,255,0.4)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" fill="white" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {c.cta}
              </a>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>{c.ctaSub}</p>
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

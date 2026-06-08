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
    <section className="relative min-h-[75vh] flex items-center overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-10 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left — copy */}
          <div className="max-w-2xl">
            {/* Main headline — HUGE */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="display-xl mb-5"
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

"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AppMockup from "@/components/AppMockup";
import type { Content } from "@/lib/content";

export default function Hero({ c }: { c: Content["hero"] }) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      bgRef.current.style.background = `radial-gradient(ellipse at ${x}% ${y}%, rgba(58,130,255,0.12) 0%, transparent 60%)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden dot-grid">
      {/* Interactive gradient layer */}
      <div ref={bgRef} className="absolute inset-0 transition-all duration-500 pointer-events-none" />

      {/* Top radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(58,130,255,0.15) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8"
              style={{
                background: "rgba(58,130,255,0.12)",
                border: "1px solid rgba(58,130,255,0.3)",
                color: "#60A5FA",
                fontFamily: "var(--font-space-grotesk)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent-blue)" }}
              />
              {c.badge}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="leading-[1.05] mb-6"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
                color: "var(--text-primary)",
              }}
            >
              {c.headline[0]}
              <br />
              <span className="gradient-text">{c.headline[1]}</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: "var(--text-muted)" }}
            >
              {c.sub}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14"
            >
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-base transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: "var(--accent-blue)",
                  color: "#fff",
                  fontFamily: "var(--font-space-grotesk)",
                  boxShadow: "0 8px 32px rgba(58,130,255,0.35)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" fill="white" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {c.cta}
              </a>
              <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                {c.ctaSub}
              </span>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-8"
            >
              {[c.stat1, c.stat2, c.stat3].map((s, i) => (
                <div key={i}>
                  <p
                    className="text-2xl font-bold leading-none mb-1"
                    style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end animate-float"
          >
            <AppMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }}
      />
    </section>
  );
}

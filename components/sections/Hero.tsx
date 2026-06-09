"use client";

import { motion } from "framer-motion";
import AppMockup from "@/components/AppMockup";
import type { Content } from "@/lib/content";

export default function Hero({ c, lang = "pt" }: { c: Content["hero"]; lang?: "pt" | "en" }) {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Indigo blob — top right */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 20%, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
        }}
      />
      {/* Softer blob — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 80%, rgba(99,102,241,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-12 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left — copy */}
          <div className="max-w-2xl">
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "var(--text-muted)" }}
            >
              {c.sub}
            </motion.p>

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
                    style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--accent-blue)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — phone (desktop) */}
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

"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import type { Content } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function FAQ({ c }: { c: Content["faq"] }) {
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const items = sectionRef.current.querySelectorAll(".faq-item");
    gsap.fromTo(
      items,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-14 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--accent-blue)", fontFamily: "var(--font-space-grotesk)" }}
          >
            {c.eyebrow}
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold leading-tight"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "var(--text-primary)",
              whiteSpace: "pre-line",
            }}
          >
            {c.headline}
          </h2>
        </div>

        {/* Items */}
        <div className="space-y-2">
          {c.items.map((item, i) => (
            <div
              key={i}
              className="faq-item rounded-xl overflow-hidden transition-colors"
              style={{
                background: open === i ? "var(--bg-card)" : "transparent",
                border: `1px solid ${open === i ? "var(--border-strong)" : "var(--border)"}`,
              }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="font-medium text-base"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-space-grotesk)" }}
                >
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{
                    background: open === i ? "var(--accent-blue)" : "rgba(255,255,255,0.06)",
                    color: open === i ? "#fff" : "var(--text-muted)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p
                      className="px-6 pb-6 text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

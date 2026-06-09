"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Content } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  clock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  zap: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  dollar: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
};

export default function Problem({ c }: { c: Content["problem"] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll(".problem-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--accent-blue)", fontFamily: "var(--font-space-grotesk)" }}
          >
            {c.eyebrow}
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}
          >
            {c.headline}
          </h2>
        </div>

        {/* Cards — intentionally asymmetric layout */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-5">
          {c.items.map((item, i) => (
            <div
              key={i}
              className="problem-card group relative p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-4px]"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                marginTop: i === 1 ? 24 : 0,
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: "rgba(99,102,241,0.1)",
                  color: "var(--accent-blue)",
                  border: "1px solid rgba(99,102,241,0.18)",
                }}
              >
                {iconMap[item.icon]}
              </div>

              <h3
                className="text-xl font-semibold mb-3"
                style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {item.desc}
              </p>

              {/* Subtle hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top left, rgba(99,102,241,0.05) 0%, transparent 60%)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Content } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < Math.floor(count) ? "#FBBF24" : "none"} stroke="#FBBF24" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof({ c }: { c: Content["social"] }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll(".proof-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  const renderCard = (card: typeof c.studentCard, accent: string, bg: string) => (
    <div
      className="proof-card flex-1 p-8 rounded-2xl relative overflow-hidden"
      style={{ background: bg, border: `1px solid ${accent}30` }}
    >
      {/* Rating */}
      <div className="flex items-end gap-3 mb-2">
        <span
          className="text-6xl font-bold leading-none"
          style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}
        >
          {card.rating}
        </span>
        <div className="pb-2">
          <Stars count={parseFloat(card.rating.replace(",", "."))} />
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{card.label}</p>
        </div>
      </div>

      <p className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>{card.sub}</p>

      {/* Percentage highlight */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold mb-8"
        style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}30` }}
      >
        <span style={{ fontFamily: "var(--font-space-grotesk)" }}>{card.pct}</span>
        <span className="text-xs font-normal" style={{ color: "var(--text-muted)" }}>{card.pctLabel}</span>
      </div>

      {/* Quotes */}
      <div className="space-y-4">
        {card.quotes.map((q, i) => (
          <div
            key={i}
            className="p-4 rounded-xl"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--text-primary)" }}>
              {q.text}
            </p>
            <p className="text-xs font-medium" style={{ color: accent }}>— {q.name}</p>
          </div>
        ))}
      </div>

      {/* Decorative glow */}
      <div
        className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${accent}12 0%, transparent 70%)` }}
      />
    </div>
  );

  return (
    <section ref={sectionRef} className="py-28 px-6">
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
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "var(--text-primary)",
              whiteSpace: "pre-line",
            }}
          >
            {c.headline}
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {renderCard(c.studentCard, "#3A82FF", "rgba(58,130,255,0.06)")}
          {renderCard(c.parentCard, "#10B981", "rgba(16,185,129,0.06)")}
        </div>
      </div>
    </section>
  );
}

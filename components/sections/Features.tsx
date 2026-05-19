"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Content } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function Features({ c }: { c: Content["features"] }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const items = sectionRef.current.querySelectorAll(".feature-item");
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -32 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 78%",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-28 px-6 relative overflow-hidden">
      {/* Decorative right glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--accent-emerald)", fontFamily: "var(--font-space-grotesk)" }}
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

        {/* Feature items */}
        <div className="space-y-5">
          {c.items.map((item, i) => (
            <div
              key={i}
              className="feature-item group flex flex-col md:flex-row items-start gap-8 p-8 rounded-2xl transition-all duration-300 hover:bg-white/[0.02]"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Number */}
              <div
                className="shrink-0 text-5xl font-bold leading-none"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  color: "rgba(255,255,255,0.06)",
                  minWidth: 56,
                }}
              >
                {item.tag}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3
                    className="text-xl font-semibold"
                    style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(58,130,255,0.1)",
                      color: "#60A5FA",
                      border: "1px solid rgba(58,130,255,0.2)",
                      fontFamily: "var(--font-space-grotesk)",
                    }}
                  >
                    {item.highlight}
                  </span>
                </div>
                <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)" }}>
                  {item.desc}
                </p>
              </div>

              {/* Arrow */}
              <div
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

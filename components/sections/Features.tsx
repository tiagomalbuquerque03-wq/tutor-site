"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Content } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

const photos = [
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=900&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=85&auto=format&fit=crop",
];

export default function Features({ c }: { c: Content["features"] }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const rows = sectionRef.current.querySelectorAll(".feature-row");
    rows.forEach((row) => {
      const img = row.querySelector(".feat-img");
      const txt = row.querySelector(".feat-txt");
      gsap.fromTo(
        [img, txt],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 75%" },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-xl mb-20">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--accent-emerald)", fontFamily: "var(--font-space-grotesk)" }}
          >
            {c.eyebrow}
          </p>
          <h2 className="display-lg" style={{ color: "var(--text-primary)" }}>
            {c.headline}
          </h2>
        </div>

        {/* Feature rows — editorial alternating layout */}
        <div className="space-y-6">
          {c.items.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className="feature-row group grid md:grid-cols-[1fr_1fr] gap-0 rounded-2xl overflow-hidden"
                style={{ border: "1px solid var(--border)" }}
              >
                {/* Photo */}
                <div
                  className={`feat-img relative h-64 md:h-auto overflow-hidden ${isEven ? "" : "md:order-last"}`}
                >
                  <img
                    src={photos[i]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.6) saturate(0.8)" }}
                  />
                  {/* Tag number overlay */}
                  <div
                    className="absolute top-5 left-5 text-6xl font-bold leading-none select-none"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      color: "rgba(255,255,255,0.15)",
                    }}
                  >
                    {item.tag}
                  </div>
                  {/* Gradient fade to card */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isEven
                        ? "linear-gradient(to right, transparent 60%, var(--bg-card) 100%)"
                        : "linear-gradient(to left, transparent 60%, var(--bg-card) 100%)",
                    }}
                  />
                </div>

                {/* Text */}
                <div
                  className="feat-txt flex flex-col justify-center px-8 py-10 md:py-12"
                  style={{ background: "var(--bg-card)" }}
                >
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 self-start"
                    style={{
                      background: "rgba(58,130,255,0.1)",
                      color: "#60A5FA",
                      border: "1px solid rgba(58,130,255,0.2)",
                      fontFamily: "var(--font-space-grotesk)",
                    }}
                  >
                    {item.highlight}
                  </span>
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

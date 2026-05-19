"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Content } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks({ c }: { c: Content["howItWorks"] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stepsRef.current) return;
    const steps = stepsRef.current.querySelectorAll(".how-step");

    gsap.fromTo(
      steps,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 70%",
        },
      }
    );

    // Animate the connecting line
    const line = sectionRef.current?.querySelector(".connect-line") as HTMLElement;
    if (line) {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power2.out",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 px-6 relative"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Top/bottom borders */}
      <div className="section-sep absolute top-0 left-0 right-0" />
      <div className="section-sep absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-xl mb-20">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--accent-blue)", fontFamily: "var(--font-space-grotesk)" }}
          >
            {c.eyebrow}
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "var(--text-primary)",
              whiteSpace: "pre-line",
            }}
          >
            {c.headline}
          </h2>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="connect-line hidden md:block absolute top-10 left-[calc(33%+1.5rem)] right-[calc(33%+1.5rem)] h-px"
            style={{ background: "var(--border-strong)", transformOrigin: "left center" }}
          />

          {c.steps.map((step, i) => (
            <div key={i} className="how-step">
              {/* Step number */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg relative z-10"
                  style={{
                    background: i === 1 ? "var(--accent-blue)" : "var(--bg-card)",
                    color: i === 1 ? "#fff" : "var(--text-muted)",
                    border: i === 1 ? "none" : "1px solid var(--border-strong)",
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                >
                  {step.num}
                </div>
              </div>

              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}
              >
                {step.title}
              </h3>
              <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

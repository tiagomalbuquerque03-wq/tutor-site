"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Content } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Pricing({ c }: { c: Content["pricing"] }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll(".pricing-card");
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
          trigger: sectionRef.current,
          start: "top 72%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 px-6 relative"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="section-sep absolute top-0 left-0 right-0" />
      <div className="section-sep absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--accent-blue)", fontFamily: "var(--font-space-grotesk)" }}
          >
            {c.eyebrow}
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "var(--text-primary)",
              whiteSpace: "pre-line",
            }}
          >
            {c.headline}
          </h2>
          <p style={{ color: "var(--text-muted)" }}>{c.sub}</p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {c.plans.map((plan, i) => (
            <div
              key={i}
              className="pricing-card relative p-8 rounded-2xl flex flex-col"
              style={
                plan.highlight
                  ? {
                      background: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(99,102,241,0.05) 100%)",
                      border: "1px solid rgba(99,102,241,0.3)",
                      boxShadow: "0 0 40px rgba(99,102,241,0.08)",
                    }
                  : {
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                    }
              }
            >
              {/* Badge */}
              {"badge" in plan && plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: "var(--accent-blue)",
                    color: "#fff",
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <p
                  className="text-sm font-semibold mb-3"
                  style={{
                    color: plan.highlight ? "#6366F1" : "var(--text-muted)",
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span
                    className="text-4xl font-bold leading-none"
                    style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm pb-1" style={{ color: "var(--text-muted)" }}>
                      {plan.period}
                    </span>
                  )}
                </div>
                {"annual" in plan && plan.annual && (
                  <p className="text-xs" style={{ color: "var(--accent-emerald)" }}>{plan.annual}</p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                    <span
                      className="shrink-0 mt-0.5"
                      style={{ color: plan.highlight ? "var(--accent-blue)" : "var(--accent-emerald)" }}
                    >
                      <Check />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#download"
                className="w-full py-3.5 rounded-xl text-center text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                style={
                  plan.ctaStyle === "filled"
                    ? {
                        background: "var(--accent-blue)",
                        color: "#fff",
                        fontFamily: "var(--font-space-grotesk)",
                        boxShadow: "0 4px 16px rgba(99,102,241,0.25)",
                        display: "block",
                      }
                    : {
                        background: "transparent",
                        color: "var(--text-primary)",
                        border: "1px solid var(--border-strong)",
                        fontFamily: "var(--font-space-grotesk)",
                        display: "block",
                      }
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

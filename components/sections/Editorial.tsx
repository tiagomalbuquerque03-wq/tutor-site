"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  lang: "pt" | "en";
}

const copy = {
  pt: {
    quote: "A primeira IA que entende o material real do aluno.",
    sub: "Lê sua prova, identifica os pontos fracos e adapta o estudo — tudo em diálogo natural por voz.",
    tag: "Tutor por voz",
  },
  en: {
    quote: "The first AI that understands the student's real material.",
    sub: "Reads your exam, identifies weak points and adapts the study plan — all through natural voice dialogue.",
    tag: "Voice tutor",
  },
};

export default function Editorial({ lang }: Props) {
  const c = copy[lang];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelector(".ed-text"),
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ minHeight: 520 }}>
      {/* Full-bleed background photo */}
      <img
        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1920&q=85&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.38) saturate(0.7)" }}
      />

      {/* Overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,9,15,0.72) 0%, rgba(6,9,15,0.45) 50%, rgba(99,102,241,0.08) 100%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to bottom, var(--bg), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
      />

      {/* Content */}
      <div className="ed-text relative max-w-7xl mx-auto px-6 py-28 flex flex-col justify-center h-full">
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-8 self-start"
          style={{
            background: "rgba(99,102,241,0.12)",
            border: "1px solid rgba(99,102,241,0.3)",
            color: "#818CF8",
            fontFamily: "var(--font-space-grotesk)",
          }}
        >
          {c.tag}
        </span>

        <blockquote
          className="mb-6"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: "var(--text-primary)",
            maxWidth: 820,
          }}
        >
          "{c.quote}"
        </blockquote>

        <p
          className="text-lg max-w-xl"
          style={{ color: "var(--text-muted)", lineHeight: 1.7 }}
        >
          {c.sub}
        </p>
      </div>
    </section>
  );
}

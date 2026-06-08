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
    eyebrow: "A diferença que muda tudo",
    headline: ["A mesma pergunta.", "Dois resultados."],
    leftLabel: "ChatGPT",
    rightLabel: "Clari",
    leftBadge: "✗ Resposta copiada",
    leftSub: "Memorizou por 1 hora. Errou na prova.",
    rightBadge: "✓ Conceito aprendido",
    rightSub: "Entendeu o raciocínio. Acertou na prova.",
    leftChat: [
      { role: "user", text: "Qual a energia cinética de um objeto de 2kg a 3m/s?" },
      { role: "ai",   text: "Ec = ½mv² = ½ × 2 × 3² = 9J ✓" },
    ],
    rightChat: [
      { role: "user",  text: "Qual a energia cinética de um objeto de 2kg a 3m/s?" },
      { role: "tutor", text: "Boa! Antes de calcular — o que a energia cinética representa fisicamente?" },
      { role: "user",  text: "É a energia do movimento?" },
      { role: "tutor", text: "Exato! E a fórmula Ec = ½mv² traduz exatamente isso. Agora aplique com m=2 e v=3. Quanto dá?" },
      { role: "user",  text: "9 Joules!" },
      { role: "tutor", text: "Perfeito. E agora você sabe o porquê de cada número. 🎯" },
    ],
    note: "Alunos que aprendem pela descoberta retêm o conteúdo 6× mais.",
    source: "Pesquisa Clari com 17 alunos BR, abr/2026",
  },
  en: {
    eyebrow: "The difference that changes everything",
    headline: ["Same question.", "Two outcomes."],
    leftLabel: "ChatGPT",
    rightLabel: "Clari",
    leftBadge: "✗ Answer copied",
    leftSub: "Memorized for 1 hour. Failed the test.",
    rightBadge: "✓ Concept mastered",
    rightSub: "Understood the reasoning. Aced the test.",
    leftChat: [
      { role: "user", text: "What's the kinetic energy of a 2kg object at 3m/s?" },
      { role: "ai",   text: "Ek = ½mv² = ½ × 2 × 3² = 9J ✓" },
    ],
    rightChat: [
      { role: "user",  text: "What's the kinetic energy of a 2kg object at 3m/s?" },
      { role: "tutor", text: "Great question! Before calculating — what does kinetic energy represent physically?" },
      { role: "user",  text: "It's the energy of motion?" },
      { role: "tutor", text: "Exactly! And Ek = ½mv² captures precisely that. Now apply it with m=2 and v=3. What do you get?" },
      { role: "user",  text: "9 Joules!" },
      { role: "tutor", text: "Perfect. Now you know the WHY behind every number. 🎯" },
    ],
    note: "Students who learn by discovery retain content 6× longer.",
    source: "Clari research with 17 Brazilian students, Apr 2026",
  },
};

function ChatCard({
  label,
  badge,
  sub,
  messages,
  side,
}: {
  label: string;
  badge: string;
  sub: string;
  messages: { role: string; text: string }[];
  side: "left" | "right";
}) {
  const isLeft = side === "left";
  const accent = isLeft ? "#EF4444" : "#3A82FF";
  const accentSub = isLeft ? "rgba(239,68,68,0.08)" : "rgba(58,130,255,0.08)";
  const borderClass = isLeft ? "gradient-border-red" : "gradient-border-blue";

  return (
    <div
      className={`flex-1 rounded-2xl overflow-hidden ${borderClass}`}
      style={{
        background: isLeft ? "rgba(239,68,68,0.04)" : "rgba(58,130,255,0.04)",
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-3.5 flex items-center gap-2"
        style={{ borderBottom: `1px solid ${accent}20` }}
      >
        <div
          className="w-2.5 h-2.5 rounded-full"
          style={{
            background: accent,
            boxShadow: isLeft ? "none" : `0 0 8px ${accent}`,
          }}
        />
        <span
          className="text-sm font-semibold"
          style={{ color: accent, fontFamily: "var(--font-space-grotesk)" }}
        >
          {label}
        </span>
      </div>

      {/* Chat */}
      <div className="p-5 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className="max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed"
              style={
                msg.role === "user"
                  ? {
                      background: "rgba(255,255,255,0.06)",
                      color: "var(--text-muted)",
                      borderBottomRightRadius: 4,
                    }
                  : {
                      background: accentSub,
                      color: isLeft ? "#FCA5A5" : "#93C5FD",
                      borderBottomLeftRadius: 4,
                      border: `1px solid ${accent}20`,
                    }
              }
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Result */}
      <div
        className="mx-4 mb-4 px-4 py-3 rounded-xl flex flex-col gap-1"
        style={{ background: `${accent}10`, border: `1px solid ${accent}20` }}
      >
        <span
          className="text-sm font-bold"
          style={{ color: accent, fontFamily: "var(--font-space-grotesk)" }}
        >
          {badge}
        </span>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>{sub}</span>
      </div>
    </div>
  );
}

export default function Comparison({ lang }: Props) {
  const c = copy[lang];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll(".cmp-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-14 px-6 relative overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="section-sep absolute top-0 left-0 right-0" />
      <div className="section-sep absolute bottom-0 left-0 right-0" />

      {/* Ambient glows */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(58,130,255,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: "var(--accent-blue)", fontFamily: "var(--font-space-grotesk)" }}
          >
            {c.eyebrow}
          </p>
          <h2 className="display-lg" style={{ color: "var(--text-primary)" }}>
            {c.headline[0]}
            <br />
            <span className="gradient-text">{c.headline[1]}</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-5 mb-6">
          <div className="cmp-card flex-1">
            <ChatCard
              label={c.leftLabel}
              badge={c.leftBadge}
              sub={c.leftSub}
              messages={c.leftChat}
              side="left"
            />
          </div>
          <div className="cmp-card flex-1">
            <ChatCard
              label={c.rightLabel}
              badge={c.rightBadge}
              sub={c.rightSub}
              messages={c.rightChat}
              side="right"
            />
          </div>
        </div>

        {/* Research note */}
        <div
          className="flex items-start gap-3 px-5 py-4 rounded-xl max-w-xl"
          style={{ background: "rgba(58,130,255,0.06)", border: "1px solid rgba(58,130,255,0.15)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5" stroke="#60A5FA" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <div>
            <p className="text-sm" style={{ color: "var(--text-primary)" }}>{c.note}</p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{c.source}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

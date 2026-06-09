"use client";

import { useEffect, useState } from "react";

type Lang = "pt" | "en";

const copy = {
  pt: {
    otherLabel: "ChatGPT",
    tutorLabel: "Clari",
    resultBad: "Resposta copiada. Esquece em 1h.",
    resultGood: "Conceito aprendido. Fica na prova.",
    voicePlaceholder: "Falar com o Clari…",
    otherChat: [
      { role: "user", text: "F₁=10N e F₂=6N em sentidos opostos. Resultante?" },
      { role: "ai",   text: "A força resultante é 4N no sentido de F₁. (F = 10−6 = 4N) ✓" },
    ],
    tutorChat: [
      { role: "user",  text: "F₁=10N e F₂=6N opostas. Resultante?" },
      { role: "tutor", text: "Boa questão! Quando forças opostas atuam num objeto, o que acontece com elas?" },
      { role: "user",  text: "Acho que elas se subtraem?" },
      { role: "tutor", text: "Exato! Então, sabendo isso, qual seria F₁ − F₂? 🎯" },
      { role: "user",  text: "4N! Entendi o raciocínio agora." },
    ],
  },
  en: {
    otherLabel: "ChatGPT",
    tutorLabel: "Clari",
    resultBad: "Answer copied. Forgotten in 1h.",
    resultGood: "Concept mastered. Sticks for the test.",
    voicePlaceholder: "Talk to Clari…",
    otherChat: [
      { role: "user", text: "F₁=10N and F₂=6N in opposite directions. Resultant?" },
      { role: "ai",   text: "The resultant force is 4N in the direction of F₁. (F = 10−6 = 4N) ✓" },
    ],
    tutorChat: [
      { role: "user",  text: "F₁=10N and F₂=6N opposing. Resultant?" },
      { role: "tutor", text: "Great question! When opposite forces act on an object, what do you think happens?" },
      { role: "user",  text: "I think they subtract?" },
      { role: "tutor", text: "Exactly! So knowing that, what would F₁ − F₂ be? 🎯" },
      { role: "user",  text: "4N! I understand the reasoning now." },
    ],
  },
};

export default function AppMockup({ lang = "pt" }: { lang?: Lang }) {
  const c = copy[lang];
  const [otherVisible, setOtherVisible] = useState<number[]>([]);
  const [tutorVisible, setTutorVisible] = useState<number[]>([]);
  const [phase, setPhase] = useState<"other" | "tutor" | "done">("other");

  useEffect(() => {
    c.otherChat.forEach((_, i) => {
      setTimeout(() => setOtherVisible((p) => [...p, i]), 500 + i * 600);
    });
    const tutorStart = 2000;
    c.tutorChat.forEach((_, i) => {
      setTimeout(() => {
        setPhase("tutor");
        setTutorVisible((p) => [...p, i]);
      }, tutorStart + i * 800);
    });
    setTimeout(() => setPhase("done"), tutorStart + c.tutorChat.length * 800 + 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative mx-auto select-none" style={{ width: 270, height: 540 }}>
      {/* Subtle glow */}
      <div
        className="absolute inset-0 rounded-[2.5rem] blur-3xl opacity-30"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.25) 0%, transparent 70%)" }}
      />

      {/* Phone frame — light */}
      <div
        className="relative w-full h-full rounded-[2.5rem] overflow-hidden flex flex-col"
        style={{
          background: "#FFFFFF",
          border: "1.5px solid rgba(0,0,0,0.08)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
        }}
      >
        {/* Status bar */}
        <div className="flex justify-between items-center px-5 pt-3.5 pb-2 shrink-0">
          <span className="text-[11px] font-semibold" style={{ color: "#0F172A" }}>9:41</span>
          <div className="w-16 h-4 rounded-full" style={{ background: "rgba(0,0,0,0.06)" }} />
          <span className="text-[11px]" style={{ color: "#94A3B8" }}>●●●</span>
        </div>

        {/* ── Section 1: ChatGPT ── */}
        <div
          className="mx-3 mb-0 rounded-xl overflow-hidden shrink-0 transition-all duration-500"
          style={{
            background: "rgba(239,68,68,0.05)",
            border: "1px solid rgba(239,68,68,0.18)",
            opacity: otherVisible.length > 0 ? 1 : 0,
          }}
        >
          <div
            className="px-3 py-2 flex items-center gap-1.5"
            style={{ borderBottom: "1px solid rgba(239,68,68,0.12)" }}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: "#EF4444" }} />
            <span className="text-[10px] font-semibold tracking-wide" style={{ color: "#DC2626", fontFamily: "var(--font-space-grotesk)" }}>
              {c.otherLabel}
            </span>
          </div>
          <div className="px-3 py-2.5 space-y-2">
            {c.otherChat.map((msg, i) =>
              otherVisible.includes(i) ? (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  style={{ animation: "bubbleIn 0.25s ease-out" }}
                >
                  <div
                    className="max-w-[85%] px-2.5 py-1.5 rounded-xl text-[11px] leading-relaxed"
                    style={
                      msg.role === "user"
                        ? { background: "rgba(0,0,0,0.05)", color: "#64748B", borderBottomRightRadius: 4 }
                        : { background: "rgba(239,68,68,0.1)", color: "#B91C1C", borderBottomLeftRadius: 4 }
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ) : null
            )}
          </div>
          {otherVisible.length >= c.otherChat.length && (
            <div
              className="px-3 pb-2.5 flex items-center gap-1.5"
              style={{ animation: "fadeUp 0.4s ease-out" }}
            >
              <span className="text-[10px]" style={{ color: "#EF4444" }}>✗</span>
              <span className="text-[10px]" style={{ color: "#94A3B8" }}>{c.resultBad}</span>
            </div>
          )}
        </div>

        {/* Divider */}
        {phase !== "other" && (
          <div className="mx-3 my-2 flex items-center gap-2" style={{ animation: "fadeUp 0.3s ease-out" }}>
            <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.08)" }} />
            <span className="text-[10px] font-bold" style={{ color: "#94A3B8", fontFamily: "var(--font-space-grotesk)" }}>VS</span>
            <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.08)" }} />
          </div>
        )}

        {/* ── Section 2: Clari ── */}
        {phase !== "other" && (
          <div
            className="mx-3 rounded-xl overflow-hidden flex-1 flex flex-col"
            style={{
              background: "rgba(99,102,241,0.06)",
              border: "1px solid rgba(99,102,241,0.22)",
              animation: "fadeUp 0.35s ease-out",
            }}
          >
            <div
              className="px-3 py-2 flex items-center gap-1.5 shrink-0"
              style={{ borderBottom: "1px solid rgba(99,102,241,0.12)" }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "#6366F1", boxShadow: "0 0 6px rgba(99,102,241,0.5)" }}
              />
              <span className="text-[10px] font-semibold tracking-wide" style={{ color: "#6366F1", fontFamily: "var(--font-space-grotesk)" }}>
                {c.tutorLabel}
              </span>
            </div>
            <div className="px-3 py-2.5 space-y-2 flex-1 overflow-hidden">
              {c.tutorChat.map((msg, i) =>
                tutorVisible.includes(i) ? (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    style={{ animation: "bubbleIn 0.25s ease-out" }}
                  >
                    <div
                      className="max-w-[85%] px-2.5 py-1.5 rounded-xl text-[11px] leading-relaxed"
                      style={
                        msg.role === "user"
                          ? { background: "rgba(0,0,0,0.05)", color: "#64748B", borderBottomRightRadius: 4 }
                          : { background: "rgba(99,102,241,0.12)", color: "#4338CA", borderBottomLeftRadius: 4 }
                      }
                    >
                      {msg.text}
                    </div>
                  </div>
                ) : null
              )}
            </div>
            {phase === "done" && (
              <div
                className="px-3 pb-2.5 flex items-center gap-1.5 shrink-0"
                style={{ animation: "fadeUp 0.4s ease-out" }}
              >
                <span className="text-[10px]" style={{ color: "#10B981" }}>✓</span>
                <span className="text-[10px]" style={{ color: "#94A3B8" }}>{c.resultGood}</span>
              </div>
            )}
          </div>
        )}

        {/* Voice bar */}
        <div
          className="mx-3 mb-3 mt-2 rounded-xl px-3 py-2.5 flex items-center gap-2.5 shrink-0"
          style={{ background: "#F8F9FB", border: "1px solid rgba(0,0,0,0.07)" }}
        >
          <div className="flex items-center gap-0.5">
            {[0.4, 0.7, 1, 0.8, 0.5, 0.9, 0.6].map((h, i) => (
              <div
                key={i}
                className="w-px rounded-full"
                style={{
                  background: "#6366F1",
                  height: 12,
                  transform: `scaleY(${h})`,
                  animation: `voicePulse ${0.6 + i * 0.1}s ease-in-out infinite ${i * 0.07}s`,
                }}
              />
            ))}
          </div>
          <span className="text-[11px] flex-1" style={{ color: "#94A3B8" }}>
            {c.voicePlaceholder}
          </span>
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ background: "#6366F1" }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" fill="white" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

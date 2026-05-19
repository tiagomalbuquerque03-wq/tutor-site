"use client";

import { useEffect, useState } from "react";

const messages = [
  { role: "user", text: "Não entendi essa questão de física 😕", delay: 0 },
  { role: "tutor", text: "Claro! Antes de explicar — qual parte ficou confusa?", delay: 900 },
  { role: "user", text: "A parte da força resultante", delay: 1800 },
  { role: "tutor", text: "Ok. Se um objeto está em repouso, o que você acha que acontece com as forças sobre ele?", delay: 2700 },
  { role: "user", text: "Devem se cancelar?", delay: 3600 },
  { role: "tutor", text: "Exato! Isso é a 1ª Lei de Newton. Agora aplique esse raciocínio ao problema 👏", delay: 4500 },
];

export default function AppMockup() {
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    messages.forEach((msg, i) => {
      const timer = setTimeout(() => {
        setVisible((prev) => [...prev, i]);
      }, 600 + msg.delay);
      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <div className="relative mx-auto" style={{ width: 280, height: 560 }}>
      {/* Glow behind phone */}
      <div
        className="absolute inset-0 rounded-[2.5rem] blur-3xl opacity-30"
        style={{ background: "radial-gradient(ellipse at center, #3A82FF 0%, transparent 70%)" }}
      />

      {/* Phone frame */}
      <div
        className="relative w-full h-full rounded-[2.5rem] overflow-hidden flex flex-col"
        style={{
          background: "#0D1425",
          border: "1.5px solid rgba(255,255,255,0.12)",
          boxShadow: "0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Status bar */}
        <div className="flex justify-between items-center px-6 pt-4 pb-2 shrink-0">
          <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>9:41</span>
          <div className="w-20 h-5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div className="flex gap-1 items-center">
            <div className="w-4 h-2.5 rounded-sm border" style={{ borderColor: "var(--text-muted)" }}>
              <div className="h-full w-3/4 rounded-sm" style={{ background: "var(--accent-emerald)" }} />
            </div>
          </div>
        </div>

        {/* App header */}
        <div
          className="flex items-center gap-3 px-4 py-3 shrink-0"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
            style={{ background: "var(--accent-blue)", color: "#fff" }}
          >
            T
          </div>
          <div>
            <p className="text-sm font-semibold leading-none" style={{ color: "var(--text-primary)" }}>
              Tutor IA
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--accent-emerald)" }}>● online</p>
          </div>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-hidden px-3 py-3 flex flex-col gap-2.5">
          {messages.map((msg, i) =>
            visible.includes(i) ? (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                style={{ animation: "bubbleIn 0.3s ease-out" }}
              >
                <div
                  className="max-w-[80%] px-3 py-2 rounded-2xl text-xs leading-relaxed"
                  style={
                    msg.role === "user"
                      ? { background: "var(--accent-blue)", color: "#fff", borderBottomRightRadius: 4 }
                      : { background: "rgba(255,255,255,0.08)", color: "var(--text-primary)", borderBottomLeftRadius: 4 }
                  }
                >
                  {msg.text}
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* Voice input bar */}
        <div
          className="shrink-0 mx-3 mb-4 rounded-2xl px-4 py-3 flex items-center gap-3"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid var(--border)" }}
        >
          {/* Voice waves */}
          <div className="flex items-center gap-0.5">
            {[0.4, 0.7, 1, 0.8, 0.5, 0.9, 0.6].map((h, i) => (
              <div
                key={i}
                className="w-0.5 rounded-full"
                style={{
                  background: "var(--accent-blue)",
                  height: 14,
                  transform: `scaleY(${h})`,
                  animation: `voicePulse ${0.6 + i * 0.1}s ease-in-out infinite`,
                  animationDelay: `${i * 0.07}s`,
                }}
              />
            ))}
          </div>
          <span className="text-xs flex-1" style={{ color: "var(--text-muted)" }}>
            Falar...
          </span>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: "var(--accent-blue)" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" fill="white" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="19" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Content } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default function DownloadCTA({
  c,
  lang,
}: {
  c: Content["cta"];
  lang: "pt" | "en";
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelector(".cta-inner"),
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
      }
    );
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone) return;
    setStatus("loading");
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_ANON_KEY!,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Prefer": "return=minimal",
        },
        body: JSON.stringify({ email: phone, platform: "android" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="download"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="section-sep absolute top-0 left-0 right-0" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(58,130,255,0.10) 0%, transparent 70%)" }}
      />
      <div className="absolute inset-0 opacity-30 pointer-events-none dot-grid" />

      <div className="cta-inner relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="font-bold mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "var(--text-primary)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
            }}
          >
            {c.headline}
          </h2>
          <p className="text-lg" style={{ color: "var(--text-muted)" }}>
            {c.sub}
          </p>
        </div>

        {/* Two columns */}
        <div className="flex flex-col md:flex-row gap-6 max-w-3xl mx-auto">

          {/* iOS — App Store */}
          <div
            className="flex-1 flex flex-col items-center justify-center gap-6 rounded-2xl p-8"
            style={{
              background: "rgba(58,130,255,0.05)",
              border: "1px solid rgba(58,130,255,0.2)",
            }}
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#60A5FA">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span
                className="font-bold text-xl"
                style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}
              >
                {c.iosLabel}
              </span>
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ background: "rgba(34,197,94,0.12)", color: "#4ADE80", border: "1px solid rgba(34,197,94,0.2)" }}
              >
                ✓ {c.iosAppStore}
              </span>
            </div>

            <a
              href={c.iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-4 rounded-xl font-semibold text-base transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "var(--accent-blue)",
                color: "#fff",
                fontFamily: "var(--font-space-grotesk)",
                textDecoration: "none",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              {lang === "pt" ? "Baixar na App Store" : "Download on App Store"}
            </a>
          </div>

          {/* Android — waitlist form */}
          <div
            className="flex-1 flex flex-col gap-5 rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--border-strong)",
            }}
          >
            <div className="flex items-center gap-2.5 flex-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3.18 1.5c-.42.26-.68.73-.68 1.29v18.42c0 .56.26 1.03.68 1.29l.08.06 10.31-10.31v-.24L3.26 1.44l-.08.06z" fill="#8A94A6"/>
                <path d="M17.02 15.04l-3.44-3.44V11.36l3.44-3.44.78.44c.44.25.72.68.72 1.16 0 .48-.28.91-.72 1.16l-.78.32z" fill="#8A94A6"/>
                <path d="M3.18 22.5l10.4-10.4-3.45-3.44L3.18 15.6v6.9z" fill="#8A94A6"/>
                <path d="M3.18 1.5l10.4 10.4-3.45 3.44L3.18 8.4v-6.9z" fill="#8A94A6"/>
              </svg>
              <span
                className="font-bold text-base"
                style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-muted)" }}
              >
                {c.androidLabel}
              </span>
            </div>

            {/* Promo badge */}
            <div
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-center"
              style={{
                background: "rgba(58,130,255,0.08)",
                border: "1px solid rgba(58,130,255,0.2)",
                color: "#60A5FA",
                fontFamily: "var(--font-space-grotesk)",
              }}
            >
              {c.androidComingSoon}
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center gap-3 py-4 text-center flex-1 justify-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(58,130,255,0.12)", border: "1px solid rgba(58,130,255,0.3)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#3A82FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-bold text-lg" style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}>
                  {c.successTitle}
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{c.successSub}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 flex-1">
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={c.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-strong)",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    background: "var(--accent-blue)",
                    color: "#fff",
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                >
                  {status === "loading" ? "…" : c.submit}
                </button>
                {status === "error" && (
                  <p className="text-xs" style={{ color: "var(--accent-red)" }}>{c.errorMsg}</p>
                )}
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

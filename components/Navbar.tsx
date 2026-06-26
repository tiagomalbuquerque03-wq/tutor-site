"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Content } from "@/lib/content";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default function Navbar({
  c,
  cta,
  basePath,
  lang,
}: {
  c: Content["nav"];
  cta: Content["cta"];
  basePath: string;
  lang: "pt" | "en";
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [platform, setPlatform] = useState<"ios" | "android">("android");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function closeModal() {
    setOpen(false);
    setStatus("idle");
    setEmail("");
    setPlatform("android");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!platform || !email) return;
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
        body: JSON.stringify({ email, platform }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href={`${basePath}/`} className="flex items-center gap-2.5 group">
            <img src={`${basePath}/clari-icon.png`} alt="Clari" className="w-11 h-11 rounded-2xl" />
            <span
              className="font-bold text-3xl tracking-tight"
              style={{ fontFamily: "'Nunito', system-ui, sans-serif", color: "var(--text-primary)" }}
            >
              clari
            </span>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href={c.langHref}
              className="text-sm font-medium px-3 py-1.5 rounded-md transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              {c.lang}
            </Link>

            {/* iOS App Store button */}
            <a
              href={cta.iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.25)",
                color: "#6366F1",
                fontFamily: "var(--font-space-grotesk)",
                textDecoration: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#6366F1">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              {cta.iosLabel}
            </a>

            {/* Android waitlist button */}
            <button
              onClick={() => setOpen(true)}
              className="text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "var(--accent-blue)",
                color: "#fff",
                fontFamily: "var(--font-space-grotesk)",
              }}
            >
              {c.download}
            </button>
          </div>
        </div>
      </header>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div
            className="relative w-full max-w-md rounded-2xl p-8"
            style={{ background: "var(--bg-surface)", border: "1px solid var(--border-strong)" }}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:opacity-70"
              style={{ color: "var(--text-muted)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            <h3
              className="font-bold text-xl mb-1"
              style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}
            >
              {cta.headline}
            </h3>
            <p className="text-sm mb-5" style={{ color: "var(--text-muted)" }}>
              {cta.sub}
            </p>

            {/* Platform tabs */}
            <div className="flex gap-2 mb-6">
              {(["ios", "android"] as const).map((p) => {
                const sel = platform === p;
                const label = p === "ios" ? cta.iosLabel : cta.androidLabel;
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => { setPlatform(p); setStatus("idle"); }}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all"
                    style={{
                      background: sel ? "rgba(99,102,241,0.12)" : "var(--bg-card)",
                      border: `1px solid ${sel ? "rgba(99,102,241,0.5)" : "var(--border-strong)"}`,
                      color: sel ? "#6366F1" : "var(--text-muted)",
                      fontFamily: "var(--font-space-grotesk)",
                    }}
                  >
                    {p === "ios"
                      ? <svg width="14" height="14" viewBox="0 0 24 24" fill={sel ? "#6366F1" : "#8A94A6"}><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                      : <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3.18 1.5c-.42.26-.68.73-.68 1.29v18.42c0 .56.26 1.03.68 1.29l.08.06 10.31-10.31v-.24L3.26 1.44l-.08.06z" fill={sel ? "#6366F1" : "#8A94A6"}/><path d="M17.02 15.04l-3.44-3.44V11.36l3.44-3.44.78.44c.44.25.72.68.72 1.16 0 .48-.28.91-.72 1.16l-.78.32z" fill={sel ? "#6366F1" : "#8A94A6"}/><path d="M3.18 22.5l10.4-10.4-3.45-3.44L3.18 15.6v6.9z" fill={sel ? "#6366F1" : "#8A94A6"}/><path d="M3.18 1.5l10.4 10.4-3.45 3.44L3.18 8.4v-6.9z" fill={sel ? "#6366F1" : "#8A94A6"}/></svg>
                    }
                    {label}
                  </button>
                );
              })}
            </div>

            {platform === "ios" ? (
              /* iOS — QR + App Store link */
              <div className="flex flex-col items-center gap-4 py-2">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: "rgba(34,197,94,0.12)", color: "#4ADE80", border: "1px solid rgba(34,197,94,0.2)" }}
                >
                  ✓ {cta.iosAppStore}
                </span>
                <a
                  href={cta.iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <img
                    src={`${basePath}/qr-ios.png`}
                    alt="QR Code App Store"
                    width={148}
                    height={148}
                    style={{ borderRadius: 10, border: "2px solid rgba(255,255,255,0.1)", display: "block" }}
                  />
                </a>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{cta.iosScan}</p>
                <a
                  href={cta.iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95 w-full justify-center"
                  style={{
                    background: "var(--accent-blue)",
                    color: "#fff",
                    fontFamily: "var(--font-space-grotesk)",
                    textDecoration: "none",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  {lang === "pt" ? "Baixar na App Store" : "Download on App Store"}
                </a>
              </div>
            ) : (
              /* Android — waitlist form */
              status === "success" ? (
                <div className="flex flex-col items-center gap-3 py-4 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.3)" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-bold text-lg" style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}>
                    {cta.successTitle}
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>{cta.successSub}</p>
                  <button
                    onClick={closeModal}
                    className="mt-1 text-sm font-semibold px-5 py-2 rounded-lg transition-all hover:opacity-90"
                    style={{ background: "var(--accent-blue)", color: "#fff", fontFamily: "var(--font-space-grotesk)" }}
                  >
                    OK
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="tel"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={cta.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
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
                    {status === "loading" ? "…" : cta.submit}
                  </button>
                  {status === "error" && (
                    <p className="text-xs text-center" style={{ color: "var(--accent-red)" }}>{cta.errorMsg}</p>
                  )}
                  <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                    {cta.androidComingSoon}
                  </p>
                </form>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}

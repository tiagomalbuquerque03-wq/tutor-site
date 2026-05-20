import type { Content } from "@/lib/content";

export default function Footer({ c }: { c: Content["footer"] }) {
  return (
    <footer className="px-6 py-10" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + tagline */}
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs"
            style={{ background: "var(--accent-blue)" }}
          >
            C
          </div>
          <div>
            <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}>
              Clari
            </p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>{c.tagline}</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {c.links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              className="text-xs transition-colors hover:opacity-80"
              style={{ color: "var(--text-muted)" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Copy */}
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>{c.copy}</p>
      </div>
    </footer>
  );
}

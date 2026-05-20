import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/nunito/800.css";
import "@fontsource/nunito/900.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clari — O tutor de IA para alunos de 13–18 anos",
  description:
    "Aprende por voz, texto e foto. Método socrático. Alinhado ao ENEM e vestibular. Disponível 24h.",
  openGraph: {
    title: "Clari",
    description: "O tutor de IA para alunos de 13–18 anos",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}

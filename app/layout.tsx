import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/nunito/800.css";
import "@fontsource/nunito/900.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clari — Entende o que o aluno precisa estudar.",
  description:
    "IA por voz que lê o material real do aluno, identifica pontos fracos e organiza o estudo. Disponível 24h.",
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

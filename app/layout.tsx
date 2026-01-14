import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Para Cecilia Zhang Yuan 💖',
  description: 'Contagem fofíssima até 15/01/2026 — com toques de Genshin e muito amor.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

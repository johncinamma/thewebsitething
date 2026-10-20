import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Saira_Condensed } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const stencil = Saira_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-stencil',
});

export const metadata: Metadata = {
  title: '160th Special Operations Aviation Regiment (Airborne) — Night Stalkers',
  description:
    "Official site of the 160th Special Operations Aviation Regiment (Airborne) — the U.S. Army's elite rotary-wing special operations force. Night Stalkers Don't Quit.",
  openGraph: {
    title: '160th SOAR — Night Stalkers',
    description: "Special Operations Aviation Regiment (Airborne). Night Stalkers Don't Quit.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${stencil.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

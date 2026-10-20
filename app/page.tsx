'use client';

import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/hero';
import { Mission } from '@/components/mission';
import { Aircraft } from '@/components/aircraft';
import { History } from '@/components/history';
import { Leadership } from '@/components/leadership';
import { Recruitment } from '@/components/recruitment';
import { SiteFooter } from '@/components/site-footer';

const MARQUEE = [
  'NIGHT STALKERS DON\'T QUIT',
  '★',
  'DE OPPRESSO LIBER',
  '★',
  'DEATH WAITS IN THE DARK',
  '★',
  'SEMPER SUPRA',
  '★',
  'WHERE THE DARKNESS BEGINS, WE BEGIN',
  '★',
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Mission />
        <Marquee />
        <Aircraft />
        <History />
        <Leadership />
        <Recruitment />
      </main>
      <SiteFooter />
    </>
  );
}

function Marquee() {
  return (
    <div className="border-y border-gold/30 bg-background-elev overflow-hidden py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((t, i) => (
          <span
            key={i}
            className={`mx-6 font-stencil text-sm tracking-[0.3em] ${
              t === '★' ? 'text-gold' : 'text-muted-foreground'
            }`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
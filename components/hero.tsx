'use client';

import { ChevronDown, ArrowRight, Radar } from 'lucide-react';
import { HERO_IMAGE } from '@/lib/site-data';

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Military helicopter silhouette at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      <div className="absolute inset-0 tactical-grid opacity-40 pointer-events-none" />

      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden md:block" />
      <div className="absolute top-1/2 right-16 -translate-y-1/2 hidden md:flex flex-col items-center gap-1 text-[10px] font-mono-tac text-gold/60 tracking-widest">
        <Radar size={20} className="animate-pulse-slow" />
        <span className="rotate-90 origin-center mt-8 whitespace-nowrap">LON 86°W // LAT 36°N</span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <span className="h-px w-12 bg-gold" />
            <span className="text-gold font-mono-tac text-xs tracking-[0.3em] uppercase">
              Special Operations Aviation Regiment (Airborne)
            </span>
          </div>

          <h1 className="font-stencil text-5xl sm:text-7xl md:text-8xl text-foreground leading-[0.95] text-shadow-lg animate-fade-up" style={{ animationDelay: '0.1s' }}>
            NIGHT
            <span className="block text-gold">STALKERS</span>
          </h1>

          <p className="mt-4 font-mono-tac text-sm sm:text-base text-muted-foreground tracking-wide max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            160th Special Operations Aviation Regiment (Airborne) — the U.S. Army&apos;s only
            rotary-wing special operations force, forged in darkness, answering the nation&apos;s
            most demanding missions.
          </p>

          <div className="mt-6 flex items-center gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <span className="font-stencil text-xl sm:text-2xl text-gold tracking-wider">
              &quot;Night Stalkers Don&apos;t Quit&quot;
            </span>
            <span className="font-mono-tac text-xs text-muted-foreground">— REGIMENTAL MOTTO</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#mission"
              className="group clip-tag bg-gold text-background font-stencil text-lg tracking-wider px-8 py-3.5 hover:bg-gold/90 transition-all flex items-center gap-2"
            >
              EXPLORE THE MISSION
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#recruitment"
              className="group border border-gold/40 text-gold font-stencil text-lg tracking-wider px-8 py-3.5 hover:bg-gold/10 transition-all"
            >
              JOIN THE RANKS
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border/60 max-w-3xl animate-fade-up" style={{ animationDelay: '0.5s' }}>
            {[
              { v: '160th', l: 'Regiment' },
              { v: 'Airborne', l: 'Designation' },
              { v: 'EST.', l: '2026' },
              { v: 'Ft. Campbell BRM5', l: 'Home Station' },
            ].map((s) => (
              <div key={s.l} className="bg-background/80 backdrop-blur-sm px-4 py-3">
                <div className="font-stencil text-xl text-gold tracking-wide">{s.v}</div>
                <div className="text-[10px] font-mono-tac uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 flex justify-center pb-6">
        <a href="#mission" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-gold transition-colors">
          <span className="font-mono-tac text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
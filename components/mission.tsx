'use client';

import { Target, Crosshair, ShieldCheck, Plane } from 'lucide-react';
import { STATS, CAPABILITIES, SOLDIERS_SUNSET } from '@/lib/site-data';
import { SectionTag } from './section-tag';

const ICONS = [Target, Crosshair, ShieldCheck, Plane];

export function Mission() {
  return (
    <section id="mission" className="relative py-24 border-t border-border">
      <div className="absolute inset-0 tactical-grid-fine opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <SectionTag code="01 / MISSION" label="The Charge" />
            <h2 className="mt-6 font-stencil text-4xl sm:text-5xl text-foreground leading-tight">
              To fly, fight, and win <span className="text-gold">in the dark.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              The 160th Special Operations Aviation Regiment provides dedicated aviation support to
              Army special operations forces and other government agencies. Its mission is to
              deliver special operations forces to and from objective areas under cover of darkness,
              in any environment, anywhere on earth.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Night Stalkers train relentlessly to master no-notice deployment, night flight, and
              sustained operations — often flying in blackout conditions, nap-of-the-earth, relying
              solely on sensors and instinct. When the nation calls, the 160th answers.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="font-mono-tac text-xs text-gold tracking-widest">CORE VALUES</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {['Excellence', 'Integrity', 'Selfless Service'].map((v) => (
                <div key={v} className="text-center border border-border bg-card/50 px-3 py-2 clip-corner">
                  <div className="font-stencil text-gold text-sm tracking-wide">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative clip-corner overflow-hidden border border-border">
              <img
                src={SOLDIERS_SUNSET}
                alt="Soldiers at sunset"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-background/90 to-transparent">
                <div className="font-mono-tac text-[10px] text-gold tracking-widest mb-1">// FIELD OPERATIONS</div>
                <div className="font-stencil text-xl text-foreground">Dawn Insertion Exercise</div>
              </div>
            </div>
            <div className="absolute -top-3 -left-3 bg-gold text-background font-mono-tac text-[10px] px-2 py-1 tracking-widest">
              CLASSIFIED
            </div>
            <div className="absolute -bottom-3 -right-3 bg-background-elev border border-gold/40 px-4 py-2">
              <div className="font-mono-tac text-[10px] text-muted-foreground">OPERATIONAL TEMPO</div>
              <div className="font-stencil text-2xl text-gold">24/7/365</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 mb-20">
          {STATS.map((s) => (
            <div key={s.label} className="bg-card px-6 py-8 text-center group hover:bg-secondary transition-colors">
              <div className="font-stencil text-4xl sm:text-5xl text-gold tracking-wide group-hover:scale-105 transition-transform">
                {s.value}
              </div>
              <div className="mt-2 text-[11px] font-mono-tac uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <SectionTag code="02 / CAPABILITIES" label="Warfighting Functions" className="mb-8" />
        <div className="grid sm:grid-cols-2 gap-px bg-border/60">
          {CAPABILITIES.map((cap, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div key={cap.code} className="bg-card p-6 group hover:bg-secondary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 border border-gold/30 flex items-center justify-center clip-corner text-gold group-hover:bg-gold group-hover:text-background transition-colors">
                    <Icon size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono-tac text-[10px] text-muted-foreground tracking-widest">
                        {cap.code}
                      </span>
                    </div>
                    <h3 className="font-stencil text-xl text-foreground tracking-wide">{cap.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cap.points.map((p) => (
                        <span
                          key={p}
                          className="text-[10px] font-mono-tac uppercase tracking-wider text-gold border border-gold/30 px-2 py-1"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
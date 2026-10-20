'use client';

import { Star, Shield, Award, Medal } from 'lucide-react';
import { LEADERSHIP, SPECOPS } from '@/lib/site-data';
import { SectionTag } from './section-tag';

export function Leadership() {
  return (
    <section id="leadership" className="relative py-24 border-t border-border">
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionTag code="05 / COMMAND" label="Regimental Leadership" />
        <h2 className="mt-6 mb-12 font-stencil text-4xl sm:text-5xl text-foreground leading-tight">
          Led by the <span className="text-gold">Best</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {LEADERSHIP.map((person, i) => {
            const Icon = i === 0 ? Star : Shield;
            return (
              <div
                key={person.role}
                className="relative border border-border bg-card overflow-hidden group hover:border-gold/40 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={SPECOPS}
                    alt=""
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-40 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute inset-0 tactical-grid-fine opacity-20" />
                  <div className="absolute top-4 left-4 w-12 h-12 border border-gold/40 flex items-center justify-center clip-corner text-gold">
                    <Icon size={22} />
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="font-mono-tac text-[10px] text-gold tracking-widest mb-1">
                      {person.rank.toUpperCase()}
                    </div>
                    <div className="font-stencil text-xl text-foreground tracking-wide">
                      {person.name}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={14} className="text-gold" />
                    <span className="font-mono-tac text-[11px] uppercase tracking-wider text-muted-foreground">
                      {person.role}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{person.summary}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid sm:grid-cols-3 gap-px bg-border/60">
          {[
            { icon: Medal, label: 'Distinguished Unit', value: 'Presidential Unit Citation' },
            { icon: Award, label: 'Battle Streamers', value: '14 Campaign Credits' },
            { icon: Shield, label: 'Force Posture', value: '1st / 2nd / 3rd Bn' },
          ].map((m) => (
            <div key={m.label} className="bg-card p-5 flex items-center gap-4">
              <m.icon size={28} className="text-gold shrink-0" />
              <div>
                <div className="font-mono-tac text-[10px] uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </div>
                <div className="font-stencil text-sm text-foreground tracking-wide">{m.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
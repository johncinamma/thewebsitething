'use client';

import { useState } from 'react';
import { ChevronRight, Gauge, Users, MapPin, Crosshair } from 'lucide-react';
import { AIRCRAFT } from '@/lib/site-data';
import { SectionTag } from './section-tag';

export function Aircraft() {
  const [active, setActive] = useState(0);
  const craft = AIRCRAFT[active];

  return (
    <section id="aircraft" className="relative py-24 border-t border-border bg-background-elev/40">
      <div className="absolute inset-0 tactical-grid opacity-15 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4">
        <SectionTag code="03 / FLEET" label="Aircraft Inventory" />
        <div className="mt-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <h2 className="font-stencil text-4xl sm:text-5xl text-foreground leading-tight">
            The <span className="text-gold">Arsenal</span> of the Night
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
            Every aircraft in the regiment&apos;s fleet is heavily modified with classified mission
            equipment, sensors, and defensive systems. Select an airframe to view its profile.
          </p>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-6 lg:gap-10">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {AIRCRAFT.map((a, i) => (
              <button
                key={a.designation}
                onClick={() => setActive(i)}
                className={`shrink-0 lg:w-full text-left px-4 py-3 border transition-all group ${
                  i === active
                    ? 'border-gold bg-gold/10'
                    : 'border-border bg-card hover:border-gold/40'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className={`font-stencil text-lg tracking-wide ${i === active ? 'text-gold' : 'text-foreground'}`}>
                      {a.designation}
                    </div>
                    <div className="text-[10px] font-mono-tac uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                      {a.name}
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`shrink-0 transition-all ${
                      i === active ? 'text-gold translate-x-0' : 'text-muted-foreground -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="relative border border-border bg-card overflow-hidden clip-corner">
            <div className="relative h-72 sm:h-96 overflow-hidden">
              <img
                key={craft.designation}
                src={craft.image}
                alt={`${craft.designation} ${craft.name}`}
                className="w-full h-full object-cover animate-fade-up"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <div className="absolute inset-0 tactical-grid-fine opacity-30" />
              <div className="absolute top-4 left-4 bg-gold text-background font-mono-tac text-[10px] px-2 py-1 tracking-widest">
                {craft.highlight.toUpperCase()}
              </div>
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm border border-border px-3 py-1">
                <div className="font-mono-tac text-[10px] text-muted-foreground tracking-widest">S/N</div>
                <div className="font-stencil text-gold text-sm">{craft.designation}</div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-mono-tac text-[11px] text-gold tracking-widest mb-1">
                  {craft.role.toUpperCase()}
                </div>
                <div className="font-stencil text-3xl sm:text-4xl text-foreground text-shadow-lg">
                  {craft.designation} <span className="text-gold">{craft.name}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-muted-foreground leading-relaxed">{craft.description}</p>
              <div className="mt-6 grid grid-cols-3 gap-px bg-border/60">
                <Spec icon={Users} label="Crew" value={craft.crew} />
                <Spec icon={Gauge} label="Max Speed" value={craft.speed} />
                <Spec icon={MapPin} label="Range" value={craft.range} />
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-mono-tac text-muted-foreground tracking-widest">
                <Crosshair size={12} className="text-gold" />
                SPECIFICATIONS SUBJECT TO CLASSIFICATION RESTRICTIONS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Spec({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="bg-secondary/50 px-4 py-3 text-center">
      <Icon size={18} className="mx-auto text-gold mb-1" />
      <div className="text-[10px] font-mono-tac uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="font-stencil text-sm text-foreground tracking-wide mt-0.5">{value}</div>
    </div>
  );
}
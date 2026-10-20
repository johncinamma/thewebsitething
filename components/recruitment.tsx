'use client';

import { ArrowRight, Check, Clock, Shield, Mountain, Eye } from 'lucide-react';
import { BLACK_HAWK } from '@/lib/site-data';
import { SectionTag } from './section-tag';

const PIPELINE = [
  { phase: '01', title: 'Assessment & Selection', detail: 'A 3-week assessment of flying skills, physical fitness, and mental resilience. Only the most qualified candidates are selected.' },
  { phase: '02', title: 'Green Platoon (SOAR Qualification)', detail: 'A grueling 6-month course covering night vision goggle flight, aerial gunnery, and special operations tactics.' },
  { phase: '03', title: 'Regimental Assignment', detail: 'Graduates earn the Night Stalker tab and are assigned to one of the three battalions at Fort Campbell, KY.' },
  { phase: '04', title: 'Continuous Training', detail: 'Night Stalkers never stop training — maintaining readiness for no-notice deployment anywhere in the world.' },
];

const REQUIREMENTS = [
  { icon: Shield, label: 'U.S. Citizen', desc: 'Eligible for a Secret clearance' },
  { icon: Clock, label: 'Sustained Commitment', desc: 'Willing for multiple deployments' },
  { icon: Mountain, label: 'Physical Readiness', desc: 'Exceed Army PT standards' },
  { icon: Eye, label: 'Night Vision Proficient', desc: 'Pass NVG flight qualification' },
];

export function Recruitment() {
  return (
    <section id="recruitment" className="relative py-24 border-t border-border bg-background-elev/40">
      <div className="absolute inset-0 tactical-grid opacity-15 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <div>
            <SectionTag code="06 / ACCESSION" label="Becoming a Night Stalker" />
            <h2 className="mt-6 font-stencil text-4xl sm:text-5xl text-foreground leading-tight">
              Join the <span className="text-gold">Regiment</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              The BRM5 160th Special Operations Aviation Regiment offers the most elite and
              highest calibre of training and event sessions daily. If you are interested in
              learning or conducting milsim, we need you!
            </p>

            <div className="mt-8 space-y-4">
              {PIPELINE.map((p) => (
                <div key={p.phase} className="flex gap-4 group">
                  <div className="shrink-0 w-10 h-10 border border-gold/40 flex items-center justify-center font-mono-tac text-sm text-gold group-hover:bg-gold group-hover:text-background transition-colors clip-corner">
                    {p.phase}
                  </div>
                  <div className="flex-1 pb-4 border-b border-border/60">
                    <h3 className="font-stencil text-lg text-foreground tracking-wide">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="relative border border-border bg-card overflow-hidden clip-corner">
              <div className="relative h-56 overflow-hidden">
                <img src={BLACK_HAWK} alt="MH-60 in flight" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute inset-0 tactical-grid-fine opacity-20" />
                <div className="absolute bottom-3 left-4">
                  <div className="font-mono-tac text-[10px] text-gold tracking-widest">// RECRUITMENT ADVISORY</div>
                  <div className="font-stencil text-2xl text-foreground">Now Accepting Applications</div>
                </div>
              </div>

              <div className="p-6">
                <div className="font-mono-tac text-[11px] uppercase tracking-widest text-muted-foreground mb-4">
                  Minimum Requirements
                </div>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {REQUIREMENTS.map((r) => (
                    <div key={r.label} className="flex items-start gap-3 p-3 border border-border bg-secondary/30">
                      <r.icon size={18} className="text-gold shrink-0 mt-0.5" />
                      <div>
                        <div className="font-stencil text-sm text-foreground tracking-wide">{r.label}</div>
                        <div className="text-[11px] text-muted-foreground leading-snug">{r.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  {['Volunteer for airborne and special operations', 'Minimum 2 years Army service', 'Pass Class 1 Flight Physical'].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-tactical shrink-0" />
                      {c}
                    </div>
                  ))}
                </div>

                <a
                  href="#top"
                  className="group clip-tag bg-gold text-background font-stencil text-lg tracking-wider px-6 py-3 flex items-center justify-center gap-2 hover:bg-gold/90 transition-colors"
                >
                  INITIATE APPLICATION
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="mt-3 text-center font-mono-tac text-[10px] text-muted-foreground tracking-widest">
                  CONTACT YOUR UNIT RETENTION NCO FOR ELIGIBILITY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
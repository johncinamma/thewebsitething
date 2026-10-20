'use client';

import { HELI_TWILIGHT } from '@/lib/site-data';
import { TIMELINE } from '@/lib/site-data';
import { SectionTag } from './section-tag';

export function History() {
  return (
    <section id="history" className="relative py-24 border-t border-border overflow-hidden">
      <div className="absolute inset-0">
        <img src={HELI_TWILIGHT} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-radial-fade" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <SectionTag code="04 / LINEAGE" label="Real Life SOAR Regimental History" />
        <div className="mt-6 mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <h2 className="font-stencil text-4xl sm:text-5xl text-foreground leading-tight">
            Forged in <span className="text-gold">Adversity</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
            From a failed rescue mission in the Iranian desert to the unit that delivered SEALs to
            Abbottabad — four decades of courage, sacrifice, and excellence in the dark.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-border to-gold/60 md:-translate-x-1/2" />

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 md:px-8">
                  <div
                    className={`bg-card border border-border p-5 clip-corner group hover:border-gold/40 transition-colors ${
                      i % 2 === 0 ? 'md:text-right' : ''
                    }`}
                  >
                    <div className="font-stencil text-3xl text-gold tracking-wide mb-2">
                      {item.year}
                    </div>
                    <h3 className="font-stencil text-lg text-foreground tracking-wide mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 top-6 md:-translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-gold border-2 border-background-elev rotate-45 group-hover:scale-125 transition-transform" />
                </div>

                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 border border-gold/40 bg-card px-6 py-4 clip-corner">
            <span className="font-stencil text-xl text-gold tracking-wider">
              &quot;Night Stalkers Don&apos;t Quit&quot;
            </span>
          </div>
          <p className="mt-3 font-mono-tac text-[11px] text-muted-foreground tracking-widest">
            — THE FALLEN ARE NEVER FORGOTTEN
          </p>
        </div>
      </div>
    </section>
  );
}
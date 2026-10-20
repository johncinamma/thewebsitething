'use client';

import { Shield, ArrowUp, Mail } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background-elev">
      <div className="absolute inset-0 tactical-grid-fine opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Emblem />
              <div>
                <div className="font-stencil text-xl text-gold tracking-wide">160th SOAR(A)</div>
                <div className="font-mono-tac text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Night Stalkers
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
              This is an unofficial tribute site honoring the 160th Special Operations Aviation
              Regiment (Airborne) — the U.S. Army&apos;s elite rotary-wing special operations force.
              Night Stalkers Don&apos;t Quit.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-2 border border-border px-3 py-2">
                <Mail size={14} className="text-gold" />
                <input
                  type="email"
                  placeholder="Enter email for updates"
                  className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-48"
                />
              </div>
              <button className="bg-gold text-background font-stencil text-sm tracking-wider px-4 py-2 clip-tag hover:bg-gold/90 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div>
            <div className="font-mono-tac text-[11px] uppercase tracking-widest text-gold mb-4">Navigate</div>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <div className="font-mono-tac text-[11px] uppercase tracking-widest text-gold mb-4">Regimental</div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Ft. Campbell, Kentucky</span>
              <span>U.S. Army Special Operations</span>
              <span>Activated 1981</span>
              <span className="mt-2 flex items-center gap-1.5 text-tactical">
                <Shield size={12} /> OPSEC: ACTIVE
              </span>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono-tac text-[10px] text-muted-foreground tracking-widest text-center sm:text-left">
            UNOFFICIAL TRIBUTE // NOT AFFILIATED WITH THE U.S. DEPARTMENT OF DEFENSE
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono-tac text-[10px] text-muted-foreground tracking-widest">
              © 2026 NIGHT STALKERS TRIBUTE
            </span>
            <a
              href="#top"
              className="flex items-center gap-1 font-mono-tac text-[10px] text-gold tracking-widest hover:text-gold/80 transition-colors"
            >
              <ArrowUp size={12} /> TOP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Emblem() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="24" cy="24" r="22" />
      <circle cx="24" cy="24" r="18" className="opacity-60" />
      <path d="M14 28 L24 14 L34 28 L24 24 Z" fill="currentColor" fillOpacity="0.3" />
      <text x="24" y="27" textAnchor="middle" fontSize="6" fill="currentColor" stroke="none">
        160
      </text>
    </svg>
  );
}
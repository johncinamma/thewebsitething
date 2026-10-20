'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/site-data';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const z = (n: number) => String(n).padStart(2, '0');
      setTime(`${z(now.getUTCHours())}:${z(now.getUTCMinutes())}:${z(now.getUTCSeconds())}Z`);
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/50'
          : 'bg-gradient-to-b from-black/60 to-transparent border-b border-transparent'
      }`}
    >
      <div className="border-b border-border/50 bg-background-elev/80">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-1.5 text-[11px] font-mono-tac text-muted-foreground tracking-wider">
          <div className="flex items-center gap-4">
            <span className="text-gold flex items-center gap-1.5">
              <Shield size={12} className="text-gold" /> CLASSIFIED // UNOFFICIAL TRIBUTE
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>OPSEC: ACTIVE</span>
            <span className="text-tactical">● COMMS NOMINAL</span>
            <span className="text-gold tabular-nums">{time}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="group flex items-center gap-3">
            <Emblem />
            <div className="leading-none">
              <div className="font-stencil text-lg sm:text-xl text-gold tracking-wide">
                160th SOAR
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono-tac uppercase tracking-[0.3em] text-muted-foreground">
                Night Stalkers
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium uppercase tracking-wider text-foreground/80 hover:text-gold transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
            <a
              href="#recruitment"
              className="ml-3 clip-tag bg-gold text-background font-stencil tracking-wider px-6 py-2.5 text-sm hover:bg-gold/90 transition-colors flex items-center gap-1"
            >
              ENLIST <ChevronRight size={16} />
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-gold p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background-elev border-t border-border animate-fade-up">
          <nav className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium uppercase tracking-wider text-foreground/80 hover:text-gold hover:bg-secondary transition-colors border-l-2 border-transparent hover:border-gold"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#recruitment"
              onClick={() => setOpen(false)}
              className="mt-2 block text-center bg-gold text-background font-stencil tracking-wider px-6 py-3"
            >
              ENLIST
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Emblem() {
  return (
    <svg viewBox="0 0 48 48" className="w-9 h-9 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="24" cy="24" r="22" />
      <circle cx="24" cy="24" r="18" className="opacity-60" />
      <path d="M24 6 L24 42 M6 24 L42 24" className="opacity-30" />
      <path
        d="M24 12 a12 12 0 1 1 -8 8"
        className="opacity-90"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path d="M14 28 L24 14 L34 28 L24 24 Z" fill="currentColor" fillOpacity="0.3" />
      <text x="24" y="27" textAnchor="middle" className="font-mono-tac" fontSize="6" fill="currentColor" stroke="none">
        160
      </text>
    </svg>
  );
}
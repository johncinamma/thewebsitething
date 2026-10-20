'use client';

import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { NEWS } from '@/lib/site-data';
import { SectionTag } from './section-tag';

export function News() {
  return (
    <section id="news" className="relative py-24 border-t border-border">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <SectionTag code="07 / SITREP" label="Latest Reports" />
            <h2 className="mt-6 font-stencil text-4xl sm:text-5xl text-foreground leading-tight">
              From the <span className="text-gold">Field</span>
            </h2>
          </div>
          <a href="#news" className="group flex items-center gap-2 font-mono-tac text-xs uppercase tracking-widest text-gold hover:text-gold/80 transition-colors">
            View All SITREPs
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {NEWS.map((n) => (
            <article
              key={n.title}
              className="group border border-border bg-card overflow-hidden hover:border-gold/40 transition-colors flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={n.image}
                  alt=""
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-gold text-background font-mono-tac text-[10px] px-2 py-1 tracking-widest">
                  {n.tag.toUpperCase()}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="font-mono-tac text-[10px] text-muted-foreground tracking-widest mb-2">
                  {n.date}
                </div>
                <h3 className="font-stencil text-lg text-foreground tracking-wide leading-snug mb-2 group-hover:text-gold transition-colors">
                  {n.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{n.excerpt}</p>
                <a
                  href="#news"
                  className="mt-4 flex items-center gap-1 font-mono-tac text-[11px] uppercase tracking-widest text-gold"
                >
                  Read Full Report
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
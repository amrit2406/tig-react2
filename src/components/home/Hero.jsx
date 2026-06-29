import React from "react";
import heroImg from "../../assets/hero.jpg";

function Stat({ n, l }) {
  return (
    <div>
      <div className="font-serif text-2xl">{n}</div>
      <div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">{l}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              <span className="w-8 h-px bg-accent" />
              Est. 2026 — Three disciplines, one studio
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5rem] leading-[0.95] tracking-tight">
              Spaces, structures<br />
              and the <em className="text-accent">material</em><br />
              between them.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              TIG is an integrated design and build group. We compose interiors, raise the buildings that hold them, and manufacture the bricks they are built from.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a href="#projects" className="bg-foreground text-background px-6 py-3 rounded-full text-sm hover:bg-accent transition-colors">
                Explore our work
              </a>
              <a href="#divisions" className="text-sm flex items-center gap-2 group">
                Our three divisions
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img src={heroImg} alt="Architectural facade detail" className="w-full h-full object-cover" width={1024} height={1280} />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-6 text-sm">
              <Stat n="120+" l="Projects delivered" />
              <Stat n="2 yr" l="In practice" />
              <Stat n="3" l="Disciplines" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
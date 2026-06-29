import React from "react";

const PROJECTS = [
  { t: "Verdant House", c: "Private residence · Interiors + Build", y: "2024" },
  { t: "Atrium 14", c: "Commercial tower · Construction", y: "2023" },
  { t: "Kiln Series No. 7", c: "Brickworks · Manufacturing", y: "2024" },
  { t: "The Olive Hotel", c: "Hospitality · Interiors", y: "2023" },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">— Selected work</div>
            <h2 className="font-serif text-4xl lg:text-5xl">Recent projects</h2>
          </div>
          <a href="#" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground">View archive →</a>
        </div>
        <ul className="border-t border-border">
          {PROJECTS.map((p) => (
            <li key={p.t} className="border-b border-border group">
              <a href="#" className="grid grid-cols-12 gap-4 py-6 lg:py-8 items-center hover:px-4 transition-all duration-300">
                <span className="col-span-1 text-xs text-muted-foreground">{p.y}</span>
                <span className="col-span-7 sm:col-span-6 font-serif text-2xl lg:text-3xl">{p.t}</span>
                <span className="col-span-3 sm:col-span-4 text-sm text-muted-foreground hidden sm:block">{p.c}</span>
                <span className="col-span-1 text-right text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
import React from "react";
import Logo from "../assets/tig.png";

export default function Nav() {
  const links = [
    { label: "Interiors", href: "#interiors" },
    { label: "Construction", href: "#construction" },
    { label: "Bricks", href: "#bricks" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={Logo}
            alt="Tostyam Infa Logo"
            className="w-18 h-18 object-contain"
          />
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-sm border border-foreground/80 px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}
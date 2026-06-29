import React from "react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/60 border-t border-background/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div>© {new Date().getFullYear()} Tostyam infra group. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-background">Instagram</a>
          <a href="#" className="hover:text-background">LinkedIn</a>
          <a href="#" className="hover:text-background">Press</a>
        </div>
      </div>
    </footer>
  );
}
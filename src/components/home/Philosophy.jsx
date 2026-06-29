import React from "react";

export default function Philosophy() {
  return (
    <section className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">— Our philosophy</div>
        <p className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
          "A building is only as honest as the brick it's made of, and a room only as considered as the hands that shaped it. We build the whole chain, so nothing is left to chance."
        </p>
        <div className="mt-10 text-sm text-muted-foreground">
          — Founder &amp; Principal Architect
        </div>
      </div>
    </section>
  );
}
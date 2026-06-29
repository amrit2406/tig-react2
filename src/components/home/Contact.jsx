import React from "react";

function ContactRow({ label, v }) {
  return (
    <div className="grid grid-cols-3 gap-4 pb-4 border-b border-background/15">
      <span className="text-background/50 uppercase tracking-wider text-xs">{label}</span>
      <span className="col-span-2">{v}</span>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-36 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.2em] text-background/60 mb-6">— Let's build</div>
          <h2 className="font-serif text-5xl lg:text-7xl leading-[0.98]">
            Tell us about<br />your project.
          </h2>
          <p className="mt-8 max-w-md text-background/70 leading-relaxed">
            Whether it's a single room, an entire building, or a pallet of bricks — start the conversation. We respond within two working days.
          </p>
        </div>
        <div className="lg:col-span-5 space-y-8 text-sm">
          <ContactRow label="General" v="hello@tig.group" />
          <ContactRow label="Interiors" v="interiors@tig.group" />
          <ContactRow label="Construction" v="build@tig.group" />
          <ContactRow label="Bricks (trade)" v="trade@tig.group" />
          <ContactRow label="Studio" v="Bhubaneswar, Odisha" />
          <ContactRow label="Phone" v="+91 9876543210" />
        </div>
      </div>
    </section>
  );
}
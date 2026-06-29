import React from "react";
import { motion } from "framer-motion";

const easeCurve = [0.16, 1, 0.3, 1];

const parentContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const leftSideVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: easeCurve },
  },
};

const rightListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const rowItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeCurve },
  },
};

const borderLineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: easeCurve },
  },
};

function ContactRow({ label, v }) {
  return (
    <motion.div className="relative pb-4" variants={rowItemVariants}>
      <div className="grid grid-cols-3 gap-4">
        <span className="text-background/50 uppercase tracking-wider text-xs">{label}</span>
        <span className="col-span-2 selection:bg-background/20">{v}</span>
      </div>
      {/* Animated baseline divider extending from left to right */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-background/15 origin-left"
        variants={borderLineVariants}
      />
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-foreground text-background overflow-hidden">
      <motion.div 
        className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-36 grid lg:grid-cols-12 gap-12"
        variants={parentContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
      >
        {/* Left Layout Column: Brand Callout */}
        <motion.div className="lg:col-span-7" variants={leftSideVariants}>
          <div className="text-xs uppercase tracking-[0.2em] text-background/60 mb-6">— Let's build</div>
          <h2 className="font-serif text-5xl lg:text-7xl leading-[0.98]">
            Tell us about<br />your project.
          </h2>
          <p className="mt-8 max-w-md text-background/70 leading-relaxed">
            Whether it's a single room, an entire building, or a pallet of bricks — start the conversation. We respond within two working days.
          </p>
        </motion.div>
        
        {/* Right Layout Column: Data Nodes */}
        <motion.div className="lg:col-span-5 space-y-8 text-sm pt-4 lg:pt-8" variants={rightListVariants}>
          <ContactRow label="General" v="hello@tig.group" />
          <ContactRow label="Interiors" v="interiors@tig.group" />
          <ContactRow label="Construction" v="build@tig.group" />
          <ContactRow label="Bricks (trade)" v="trade@tig.group" />
          <ContactRow label="Studio" v="Bhubaneswar, Odisha" />
          <ContactRow label="Phone" v="+91 9876543210" />
        </motion.div>
      </motion.div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";

const easeCurve = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textFadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easeCurve,
    },
  },
};

export default function Philosophy() {
  return (
    <section className="border-t border-border bg-secondary overflow-hidden">
      <motion.div 
        className="mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20% 0px" }} // Triggers when the section is well into view
      >
        {/* Label Tracker */}
        <motion.div 
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6"
          variants={textFadeUpVariants}
        >
          — Our philosophy
        </motion.div>
        
        {/* Core Blockquote Statement */}
        <motion.p 
          className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-foreground"
          variants={textFadeUpVariants}
        >
          "A building is only as honest as the brick it's made of, and a room only as considered as the hands that shaped it. We build the whole chain, so nothing is left to chance."
        </motion.p>
        
        {/* Attribution Signature */}
        <motion.div 
          className="mt-10 text-sm text-muted-foreground"
          variants={textFadeUpVariants}
        >
          — Founder &amp; Principal Architect
        </motion.div>
      </motion.div>
    </section>
  );
}
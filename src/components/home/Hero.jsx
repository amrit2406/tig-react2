import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/hero.jpg";

// Animation configuration variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Automatically staggers child elements down the tree
      delayChildren: 0.1,
    },
  },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Smooth, cinematic custom cubic-bezier
    },
  },
};

const imageContainerVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageRevealVariants = {
  hidden: { scale: 1.15 },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function Stat({ n, l }) {
  return (
    <motion.div variants={fadeInUpVariants}>
      <div className="font-serif text-2xl">{n}</div>
      <div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">{l}</div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          
          {/* Left Column: Text Content Container */}
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tagline */}
            <motion.div 
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8"
              variants={fadeInUpVariants}
            >
              <span className="w-8 h-px bg-accent" />
              Est. 2026 — Three disciplines, one studio
            </motion.div>
            
            {/* Heading */}
            <motion.h1 
              className="font-serif text-5xl sm:text-6xl lg:text-[5rem] leading-[0.95] tracking-tight"
              variants={fadeInUpVariants}
            >
              Spaces, structures<br />
              and the <em className="text-accent not-italic font-sans font-light tracking-normal">material</em><br />
              between them.
            </motion.h1>
            
            {/* Paragraph */}
            <motion.p 
              className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
              variants={fadeInUpVariants}
            >
              TIG is an integrated design and build group. We compose interiors, raise the buildings that hold them, and manufacture the bricks they are built from.
            </motion.p>
            
            {/* Interactive Call to Actions */}
            <motion.div 
              className="mt-10 flex items-center gap-4"
              variants={fadeInUpVariants}
            >
              <a href="#projects" className="bg-foreground text-background px-6 py-3 rounded-full text-sm hover:bg-accent transition-colors duration-300 shadow-sm">
                Explore our work
              </a>
              <a href="#divisions" className="text-sm flex items-center gap-2 group text-foreground/80 hover:text-foreground transition-colors">
                Our three divisions
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Column: Imagery & Core Stats */}
          <div className="lg:col-span-5 w-full">
            {/* Animated Image Wrapper Frame */}
            <motion.div 
              className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted/20"
              variants={imageContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.img 
                src={heroImg} 
                alt="Architectural facade detail" 
                className="w-full h-full object-cover" 
                width={1024} 
                height={1280}
                variants={imageRevealVariants}
              />
            </motion.div>
            
            {/* Staggered Row for Stats */}
            <motion.div 
              className="mt-6 grid grid-cols-3 gap-6 text-sm"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Stat n="120+" l="Projects delivered" />
              <Stat n="27 yr" l="In practice" />
              <Stat n="3" l="Disciplines" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
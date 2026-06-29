import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  { t: "Verdant House", c: "Private residence · Interiors + Build", y: "2024" },
  { t: "Atrium 14", c: "Commercial tower · Construction", y: "2023" },
  { t: "Kiln Series No. 7", c: "Brickworks · Manufacturing", y: "2024" },
  { t: "The Olive Hotel", c: "Hospitality · Interiors", y: "2023" },
];

const easeCurve = [0.16, 1, 0.3, 1];

// Header animation container
const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeCurve },
  },
};

// List wrapper to stagger rows as they come into view
const listContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Individual row initial reveal
const rowItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeCurve },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        
        {/* Animated Section Header */}
        <motion.div 
          className="flex items-end justify-between mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">— Selected work</div>
            <h2 className="font-serif text-4xl lg:text-5xl">Recent projects</h2>
          </div>
          <a href="#" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            View archive →
          </a>
        </motion.div>

        {/* Project List Node */}
        <motion.ul 
          className="border-t border-border"
          variants={listContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {PROJECTS.map((p) => (
            <motion.li 
              key={p.t} 
              className="border-b border-border group"
              variants={rowItemVariants}
            >
              {/* Framer Motion controls the layout/padding transition natively on hover */}
              <motion.a 
                href="#" 
                className="grid grid-cols-12 gap-4 py-6 lg:py-8 items-center block text-foreground"
                whileHover={{ px: "16px" }} // Moves padding symmetrically inward on active states
                transition={{ duration: 0.35, ease: easeCurve }}
              >
                <span className="col-span-1 text-xs text-muted-foreground">{p.y}</span>
                <span className="col-span-7 sm:col-span-6 font-serif text-2xl lg:text-3xl transition-colors duration-300 group-hover:text-accent">
                  {p.t}
                </span>
                <span className="col-span-3 sm:col-span-4 text-sm text-muted-foreground hidden sm:block">
                  {p.c}
                </span>
                <span className="col-span-1 text-right text-muted-foreground group-hover:text-accent group-hover:translate-x-1.5 transition-all duration-300">
                  →
                </span>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
        
      </div>
    </section>
  );
}
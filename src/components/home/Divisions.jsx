import React from "react";
import { motion } from "framer-motion";
import interiorImg from "../../assets/interior.jpg";
import constructionImg from "../../assets/construction.jpg";
import bricksImg from "../../assets/bricks.jpg";

const DIVISIONS = [
  {
    id: "interiors",
    no: "01",
    title: "Interior Design",
    tag: "Residential · Hospitality · Workplace",
    body: "Interiors composed for how you actually live and work. From a single room to a full programme, our studio shapes light, material and proportion into spaces that feel inevitable.",
    points: ["Concept & spatial planning", "FF&E and custom joinery", "Lighting design", "Site supervision"],
    img: interiorImg,
  },
  {
    id: "construction",
    no: "02",
    title: "Construction",
    tag: "Residential · Commercial · Turnkey",
    body: "A construction practice built on engineering discipline and craftsmanship. We deliver projects of every scale on programme and on budget, with a quality bar set by our own design teams.",
    points: ["Turnkey contracting", "Project & cost management", "Structural & MEP coordination", "Renovation & retrofit"],
    img: constructionImg,
  },
  {
    id: "bricks",
    no: "03",
    title: "Bricks",
    tag: "Manufacturing · Supply · Trade",
    body: "Our own kilns produce premium fired clay bricks for builders, contractors and architects. Honest material, consistent batches, delivered at scale.",
    points: ["Solid & perforated clay bricks", "Custom batch firing", "Pallet & bulk supply", "Architect specification"],
    img: bricksImg,
  },
];

// Clean reusable transitions
const easeCurve = [0.16, 1, 0.3, 1];

const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeCurve,
      staggerChildren: 0.15,
    },
  },
};

const rowVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeCurve },
  },
};

const pointVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeCurve },
  },
};

function Division({ d, reverse }) {
  // Determine entry direction for images based on alignment pattern
  const imageSlideIn = {
    hidden: { opacity: 0, x: reverse ? 40 : -40, scale: 1.02 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: easeCurve },
    },
  };

  return (
    <article id={d.id} className="bg-background overflow-hidden">
      <motion.div
        data-reverse={reverse}
        className="grid lg:grid-cols-2 gap-10 lg:gap-16 py-16 lg:py-24 lg:data-[reverse=true]:[&>div:first-child]:order-2"
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15% 0px" }} // Triggers slightly before the item hits mid-screen
      >
        {/* Animated Media Frame */}
        <motion.div className="relative" variants={imageSlideIn}>
          <div className="aspect-[5/4] overflow-hidden rounded-sm bg-muted/20">
            <img
              src={d.img}
              alt={d.title}
              loading="lazy"
              width={1024}
              height={820}
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>

        {/* Content Node */}
        <div className="flex flex-col justify-center">
          <motion.div className="flex items-baseline gap-4 text-muted-foreground text-sm" variants={textContentVariants}>
            <span className="font-serif text-3xl text-foreground">{d.no}</span>
            <span className="uppercase tracking-[0.18em] text-xs">{d.tag}</span>
          </motion.div>

          <motion.h3 className="font-serif text-4xl lg:text-5xl mt-5" variants={textContentVariants}>
            {d.title}
          </motion.h3>

          <motion.p className="mt-5 text-muted-foreground leading-relaxed max-w-md" variants={textContentVariants}>
            {d.body}
          </motion.p>

          {/* Staggered Feature List */}
          <motion.ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 max-w-md text-sm">
            {d.points.map((p) => (
              <motion.li key={p} className="flex items-start gap-2" variants={pointVariants}>
                <span className="text-accent mt-1.5">◆</span>
                <span>{p}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={textContentVariants}>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 text-sm border-b border-foreground pb-1 self-start hover:gap-3 transition-all duration-300"
            >
              Enquire about {d.title.toLowerCase()} <span>→</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </article>
  );
}

export default function Divisions() {
  return (
    <section id="divisions" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        
        {/* Top Header Block */}
        <motion.div 
          className="flex items-end justify-between gap-8 mb-16"
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <div>
            <motion.div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4" variants={textContentVariants}>
              — Three divisions
            </motion.div>
            <motion.h2 className="font-serif text-4xl lg:text-6xl max-w-2xl leading-[1.02]" variants={textContentVariants}>
              One group. Three crafts, working in concert.
            </motion.h2>
          </div>
          <motion.p className="hidden lg:block max-w-sm text-muted-foreground" variants={textContentVariants}>
            Independent specialists under a single roof — so a project can move from drawing, to site, to material without ever leaving the family.
          </motion.p>
        </motion.div>

        {/* Division List */}
        <div className="space-y-px bg-border">
          {DIVISIONS.map((d, i) => (
            <Division key={d.id} d={d} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { CinematicBackground } from "@/components/cinematic-background";
import { profile, summary } from "@/lib/content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden border-b border-(--color-border)"
    >
      <CinematicBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-40 pb-20 sm:px-10 sm:pb-28"
      >
        <motion.p
          variants={item}
          className="mb-6 text-xs tracking-[0.3em] text-(--color-accent) uppercase"
        >
          Case File — Data Annotation &amp; AI Evaluation
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-balance text-5xl leading-[1.05] font-light text-(--color-foreground) sm:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-lg tracking-wide text-(--color-muted) sm:text-xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          variants={item}
          className="font-display mt-10 max-w-2xl text-2xl leading-snug font-light text-(--color-foreground) sm:text-3xl"
        >
          {profile.hook}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-sm leading-relaxed text-(--color-muted)"
        >
          {summary}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-sm bg-(--color-accent) px-6 text-sm font-medium tracking-wide text-(--color-accent-foreground) transition-colors hover:bg-(--color-accent-hover)"
          >
            Available for contract work
          </a>
          <a
            href="#experience"
            className="inline-flex h-11 items-center justify-center rounded-sm border border-(--color-border) px-6 text-sm font-medium tracking-wide text-(--color-foreground) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
          >
            Review the record
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

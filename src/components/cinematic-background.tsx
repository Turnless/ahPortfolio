"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CinematicBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-(--color-background)" />
        <div
          className="animate-drift absolute -top-1/3 left-1/4 h-[70vh] w-[70vh] rounded-full opacity-[0.16] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          }}
        />
        <div
          className="animate-drift-slow absolute top-1/4 right-0 h-[60vh] w-[60vh] rounded-full opacity-[0.10] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.9]"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, var(--color-background) 92%)",
          }}
        />
        <div className="grain absolute inset-0 opacity-[0.05] mix-blend-overlay" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 20%, black 0%, transparent 70%)",
          }}
        />
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/content";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#method", label: "Method" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-(--color-border)/60 bg-(--color-background)/70 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#top"
          className="font-display shrink-0 text-xs tracking-[0.2em] text-(--color-foreground) uppercase sm:text-sm"
        >
          {profile.name}
        </a>
        <nav className="hidden items-center gap-8 text-xs tracking-[0.12em] text-(--color-muted) uppercase md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-(--color-accent)"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="hidden text-xs tracking-[0.12em] text-(--color-muted) uppercase transition-colors hover:text-(--color-accent) sm:block"
        >
          {profile.email}
        </a>
      </div>
    </motion.header>
  );
}

"use client";

import { motion } from "framer-motion";
import { BadgeCheck, BrainCircuit, Layers3 } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { aboutHighlights } from "@/lib/data";

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Engineering intelligence into everyday workflows."
          description="Ahmad Raza is a BSCS student at Virtual University of Pakistan who builds practical AI automation systems using n8n, APIs, databases, and modern web apps. His work is focused on solving real problems with clean, reliable systems that feel fast and polished."
        />

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.1 }} className="mt-10 grid gap-4 md:grid-cols-3">
          {aboutHighlights.map((item, index) => {
            const icons = [BrainCircuit, Layers3, BadgeCheck];
            const Icon = icons[index];

            return (
              <motion.div key={item} variants={itemVariants} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-parrot-400/15 bg-parrot-400/10 text-parrot-400">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-base leading-7 text-muted-foreground">{item}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
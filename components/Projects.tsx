"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE
    }
  }
};

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Work"
          title="Systems I've built."
          description="Each project reflects a practical, product-focused approach to AI automation, business logic, and polished product design."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
                className="group rounded-[1.75rem] border border-border bg-card/50 p-0 shadow-soft backdrop-blur-xl transition-all duration-300 hover:border-parrot-400/40 hover:bg-card/80 hover:shadow-glow cursor-pointer relative overflow-hidden"
              >
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-parrot-400/20 via-parrot-500/20 to-parrot-600/20 blur-xl" />

                <Card className="h-full border-none bg-transparent shadow-none relative z-10">
                  <CardHeader>
                    <div className="mb-5 flex items-center justify-between">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-parrot-400/15 bg-parrot-400/10 text-parrot-400 group-hover:border-parrot-400/40 group-hover:bg-parrot-400/20 transition-colors duration-300"
                      >
                        <Icon className="h-5 w-5" />
                      </motion.div>
                      <span className="rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs font-medium text-muted-foreground group-hover:border-parrot-400/30 group-hover:text-parrot-400 transition-all duration-300">
                        Case study ready
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-parrot-400 transition-colors duration-300">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-7 text-muted-foreground group-hover:text-foreground transition-colors duration-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.badges.map((badge) => (
                        <motion.span
                          key={badge}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground hover:border-parrot-400/30 hover:text-parrot-400 transition-all duration-300"
                        >
                          {badge}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
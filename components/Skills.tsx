"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Arsenal"
          title="Tools and systems I use to build intelligent products."
          description="A premium toolkit that spans automation, backend logic, frontend interfaces, and secure operational workflows."
        />

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.06 }} className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div key={skill.name} whileHover={{ y: -6 }} className="group rounded-3xl border border-border bg-card/50 p-0 shadow-soft backdrop-blur-xl transition-all duration-300 hover:border-parrot-400/30">
                <Card className="border-none bg-transparent shadow-none">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-foreground/5 text-parrot-400 transition-colors duration-300 group-hover:bg-parrot-400/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{skill.name}</CardTitle>
                    <CardDescription>{skill.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-px w-full bg-gradient-to-r from-parrot-400/40 via-border to-transparent" />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
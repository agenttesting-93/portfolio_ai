"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How I Build"
          title="A visual pipeline from raw concept to deployed system."
          description="The workflow stays deliberate: clarify the logic, design the AI behavior, connect the services, persist state, and deploy a product that is actually usable."
        />

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-soft backdrop-blur-xl sm:p-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.08 }} className="grid gap-4 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.04 }} className="relative rounded-3xl border border-border bg-card/60 p-5 backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-parrot-400/15 bg-parrot-400/10 text-sm font-semibold text-parrot-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  {index < processSteps.length - 1 && <ChevronRight className="hidden h-5 w-5 text-muted-foreground xl:block" />}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
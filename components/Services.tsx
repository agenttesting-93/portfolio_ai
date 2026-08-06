"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I Do"
          title="Specialized services bridging AI and scalable web infrastructure."
          description="Focused offerings for founders, creators, and operators who want automation systems that look premium and work reliably."
        />

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.08 }} className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div key={service.title} whileHover={{ y: -6 }}>
                <Card className="h-full border-white/10 bg-white/[0.04] backdrop-blur-xl">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-foreground/5 text-parrot-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="leading-7">{service.description}</CardDescription>
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
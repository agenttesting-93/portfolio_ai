"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { socialLinks, whatsappHref } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="grid gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(14,165,233,0.16),rgba(15,23,42,0.92)_48%,rgba(91,33,182,0.16))] p-6 shadow-soft backdrop-blur-xl lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-parrot-400">Contact</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">Have an automation idea? Let’s build it.</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Whether you need a custom n8n workflow, an AI agent, or a full-stack Next.js application, I’m ready to turn your concept into a reliable system.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild variant="glow" size="lg">
                <Link href={whatsappHref} target="_blank" rel="noreferrer" className="group">
                  Contact Me
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <div className="rounded-full border border-border bg-foreground/5 px-4 py-3 text-sm text-muted-foreground">Email: razaahmadzafar.dev@gmail.com</div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-border bg-card/60 p-5 backdrop-blur-xl sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-parrot-400/20 bg-parrot-400/10 text-parrot-400">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Clean contact card</p>
                <p className="text-xs text-muted-foreground">Available for new projects</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <MapPin className="h-4 w-4 text-parrot-400" />
                Virtual University of Pakistan
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                Fast response for automation builds, portfolio systems, and AI-driven MVPs.
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                {socialLinks.map((social) => (
                  <Link key={social.label} href={social.href} target="_blank" rel="noreferrer" className="rounded-full border border-border bg-foreground/5 px-4 py-2 text-xs text-muted-foreground transition-colors duration-200 hover:border-parrot-400/40 hover:text-parrot-400">
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
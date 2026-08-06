"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Code2, Cpu, Sparkles, Workflow } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroStats } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } }
};

const slideIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } }
};

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(124,252,0,0.16),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(74,187,23,0.16),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(124,252,0,0.10),_transparent_34%)]" />
      <div className="absolute inset-0 -z-20 bg-grid-fine bg-[size:48px_48px] opacity-20" />

      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8 lg:pb-28">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }} className="relative z-10">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-parrot-400/20 bg-foreground/5 px-4 py-2 text-xs font-medium text-parrot-300 shadow-glow backdrop-blur hover:border-parrot-400/40 transition-colors duration-300"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-parrot-400" />
            </motion.div>
            Premium AI automation and modern frontend systems
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Ahmad Raza
          </motion.h1>
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-4xl mt-4 font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Ai Automation Expert,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-parrot-400 via-parrot-500 to-parrot-600 animate-gradientShift bg-[length:200%_auto]">
              Frontend Developer
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            I create n8n workflows, AI-powered SaaS prototypes, automation systems, and modern React / Next.js interfaces that turn ideas into working products.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="glow" size="lg">
              <Link href="#projects" className="group">
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-2xl border border-border bg-card/50 px-4 py-4 backdrop-blur-xl hover:border-parrot-400/30 hover:bg-card/70 transition-all duration-300 cursor-default group"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground group-hover:text-parrot-400 transition-colors duration-300">{stat.label}</p>
                <p className="mt-2 text-sm font-medium text-foreground">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative group"
        >
          <motion.div
            className="absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.25),_transparent_56%)] blur-3xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/70 p-4 shadow-soft backdrop-blur-2xl">
            <div className="rounded-[1.4rem] border border-border bg-background/80 p-5">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Automation console</p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">n8n_agent_workflow.json</h3>
                </div>
                <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  System Status: All Agents Active
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-parrot-400/18 bg-parrot-400/[0.06] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-parrot-400/15 text-parrot-400">
                        <Workflow className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Webhook Trigger</p>
                        <p className="text-xs text-muted-foreground">Incoming event received</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-rows-2 gap-4">
                    <div className="rounded-2xl border border-border bg-card/50 p-4">
                      <div className="mb-6 flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">AI Reasoning</span>
                        <Cpu className="h-4 w-4 text-parrot-400" />
                      </div>
                      <div className="h-28 rounded-2xl border border-border bg-background/85  font-mono text-[10px] leading-5 text-muted-foreground">
                        <p className="text-parrot-400">const analysis = await agent.run();</p>
                        <p>const risk = classifyEmail(analysis);</p>
                        <p>if (risk &gt; 0.8) alertUser();</p>
                        <p>storeTrace(source, score, context);</p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-card/50 p-4">
                      <div className="mb-6 flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Database</span>
                        <Code2 className="h-4 w-4 text-parrot-400" />
                      </div>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="rounded-xl border border-parrot-400/15 bg-parrot-400/[0.08] px-3 py-2">PostgreSQL: synced</div>
                        <div className="rounded-xl border border-parrot-400/15 bg-parrot-400/[0.08] px-3 py-2">Webhook: connected</div>
                        <div className="rounded-xl border border-parrot-400/15 bg-parrot-400/[0.08] px-3 py-2">UI: live dashboard</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-border bg-card/50 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Connected nodes</p>
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />
                    </div>
                    <div className="mt-5 space-y-3">
                      {[
                        ["Email Intake", "Active"],
                        ["LLM Classifier", "Reasoning"],
                        ["PostgreSQL Log", "Stored"],
                        ["Notification Engine", "Dispatched"]
                      ].map(([label, status]) => (
                        <div key={label} className="flex items-center justify-between rounded-2xl border border-border bg-background/65 px-4 py-3">
                          <div>
                            <p className="text-sm font-medium text-foreground">{label}</p>
                            <p className="text-xs text-muted-foreground">Automation stage</p>
                          </div>
                          <span className="rounded-full border border-parrot-400/25 bg-parrot-400/10 px-3 py-1 text-xs text-parrot-400">{status}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-border bg-card/50 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Latency</p>
                      <p className="mt-3 text-3xl font-semibold text-parrot-400">1.8s</p>
                      <p className="mt-2 text-sm text-muted-foreground">from trigger to action</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card/50 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Uptime</p>
                      <p className="mt-3 text-3xl font-semibold text-parrot-400">99.9%</p>
                      <p className="mt-2 text-sm text-muted-foreground">observed flow reliability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
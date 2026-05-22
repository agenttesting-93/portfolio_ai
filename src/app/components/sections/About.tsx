import { motion } from "motion/react";
import { User, Code2, Cpu, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 items-center">

        {/* Visual / Image area */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 border border-white/10 p-2">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent opacity-50 blur-2xl"></div>
            <div className="w-full h-full rounded-2xl bg-[#0A0F1C] border border-white/5 flex flex-col relative overflow-hidden">
              {/* Terminal Decor */}
              <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              </div>
              <div className="p-6 font-mono text-lg flex flex-col gap-4 text-slate-300">
                <div><span className="text-indigo-400">~/ahmad</span> <span className="text-emerald-400">❯</span> whoami</div>
                <div className="text-slate-300">
                  Ahmad Raza<br />
                  AI Automation Developer<br />
                  BSCS @ Virtual University of Pakistan
                </div>
                <div><span className="text-indigo-400">~/ahmad</span> <span className="text-emerald-400">❯</span> cat focus.txt</div>
                <div className="text-slate-300">
                  n8n workflows, backend architecture, <br />
                  AI integration, turning complex logic <br />
                  into seamless digital products.
                </div>
                <div className="mt-auto animate-pulse">_</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-7/12"
        >
          <div className="inline-flex items-center gap-2 text-indigo-400 font-bold text-2xl mb-4">
            <User size={24} />
            <span>About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Engineering intelligence into everyday workflows.</h2>

          <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-8">
            <p>
              I'm <span className="text-slate-200 font-semibold">Ahmad Raza</span>, an AI Automation Developer and BSCS student at the Virtual University of Pakistan. I specialize in bridging the gap between raw AI capabilities and practical business solutions.
            </p>
            <p>
              My approach is heavily product-focused. I don't just write code; I architect systems. Whether it's building complex n8n automation pipelines, designing scalable PostgreSQL databases, or crafting sleek Next.js interfaces, my goal is always to create robust, high-conversion products that save time and amplify capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCard icon={<Cpu size={20} />} title="AI-First Mindset" desc="Building with LLMs at the core." />
            <InfoCard icon={<Code2 size={20} />} title="Full-Stack Ready" desc="From DB to sleek UI." />
            <InfoCard icon={<GraduationCap size={20} />} title="BSCS Student" desc="Virtual University of Pakistan." />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-4">
      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-medium mb-1">{title}</h4>
        <p className="text-sm text-slate-400">{desc}</p>
      </div>
    </div>
  )
}

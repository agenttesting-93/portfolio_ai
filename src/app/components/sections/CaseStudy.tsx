import { motion } from "motion/react";
import { Mail, BrainCircuit, Database, BellRing, CheckCircle2 } from "lucide-react";

export function CaseStudy() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="rounded-[2.5rem] bg-gradient-to-b from-[#0A0F1C] to-[#030712] border border-white/10 p-8 md:p-16 relative overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 text-indigo-400 font-medium mb-4 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs">
              Deep Dive
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              From manual triage to an <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">autonomous agent</span>.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              A real-world example of how I transformed a chaotic, manual email sorting process into a seamless, intelligent n8n workflow. The system reads incoming requests, extracts intent via an LLM, updates the database, and alerts the team—all in seconds.
            </p>
            
            <div className="flex gap-4">
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white mb-1">15hrs</span>
                  <span className="text-sm text-slate-500">Saved per week</span>
               </div>
               <div className="w-px bg-white/10" />
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white mb-1">&lt;2s</span>
                  <span className="text-sm text-slate-500">Processing time</span>
               </div>
               <div className="w-px bg-white/10" />
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white mb-1">100%</span>
                  <span className="text-sm text-slate-500">Accuracy rate</span>
               </div>
            </div>
          </div>

          {/* Workflow Diagram */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] rounded-3xl" />
            
            <div className="flex flex-col gap-4 relative z-10 p-6 md:p-8">
              <StepCard 
                icon={<Mail className="text-sky-400" />} 
                title="1. Trigger: New Email" 
                desc="Webhook catches incoming support request." 
                delay={0}
              />
              <div className="w-0.5 h-6 bg-gradient-to-b from-sky-400/50 to-indigo-400/50 ml-10" />
              
              <StepCard 
                icon={<BrainCircuit className="text-indigo-400" />} 
                title="2. AI Reasoning" 
                desc="LLM analyzes sentiment & extracts core issue." 
                delay={0.1}
              />
              <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-400/50 to-emerald-400/50 ml-10" />
              
              <StepCard 
                icon={<Database className="text-emerald-400" />} 
                title="3. PostgreSQL Update" 
                desc="Creates formatted ticket in the database." 
                delay={0.2}
              />
              <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-400/50 to-amber-400/50 ml-10" />
              
              <StepCard 
                icon={<BellRing className="text-amber-400" />} 
                title="4. Notification" 
                desc="Alerts the specific team via Slack channel." 
                delay={0.3}
              />
              <div className="w-0.5 h-6 bg-gradient-to-b from-amber-400/50 to-transparent ml-10" />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="ml-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium"
              >
                <CheckCircle2 size={16} className="text-emerald-400" /> Complete
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-4 rounded-2xl bg-[#030712]/80 backdrop-blur-md border border-white/10 flex items-center gap-4 shadow-xl hover:border-white/20 transition-colors"
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-semibold text-sm mb-0.5">{title}</h4>
        <p className="text-slate-400 text-xs">{desc}</p>
      </div>
    </motion.div>
  )
}

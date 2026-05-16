import { motion } from "motion/react";
import { ArrowRight, Terminal, Database, Webhook, Cpu } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">
      
      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          Available for new projects
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400">AI Agents</span>, Automations & Smart Web Systems
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
        >
          I design and develop n8n workflows, AI-powered SaaS prototypes, automation systems, and modern Next.js interfaces that turn ideas into working products.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
        >
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
            View Projects
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center font-semibold">
            Hire Me
          </a>
        </motion.div>
      </div>

      {/* Visual Composition */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex-1 w-full max-w-lg lg:max-w-none relative z-10"
      >
        <div className="relative aspect-square md:aspect-[4/3] w-full rounded-2xl bg-[#0A0F1C]/80 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden p-6">
          {/* Mock Dashboard Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-xs font-mono text-slate-500">n8n_agent_workflow.json</div>
          </div>

          {/* Workflow Canvas Mockup */}
          <div className="relative h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-xl border border-white/5 p-4 flex items-center justify-center">
            
            {/* Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <path d="M 120 100 C 180 100, 180 60, 240 60" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="2" fill="none" className="animate-pulse" />
              <path d="M 120 100 C 180 100, 180 160, 240 160" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="2" fill="none" />
              <path d="M 280 60 C 340 60, 340 100, 400 100" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="2" fill="none" />
              <path d="M 280 160 C 340 160, 340 100, 400 100" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" fill="none" className="animate-[pulse_2s_ease-in-out_infinite]" />
            </svg>

            {/* Nodes */}
            <div className="relative z-10 flex flex-col gap-12 sm:scale-100 scale-75 origin-center">
              {/* Trigger */}
              <div className="flex gap-16 items-center absolute left-[10%] top-[40%] -translate-y-1/2">
                <Node icon={<Webhook size={20} className="text-indigo-400" />} label="Webhook" />
              </div>
              
              {/* Processing */}
              <div className="flex flex-col gap-12 absolute left-[45%] top-[20%] -translate-y-1/2">
                <Node icon={<Cpu size={20} className="text-blue-400" />} label="AI Reasoning" active />
                <Node icon={<Database size={20} className="text-emerald-400" />} label="PostgreSQL" />
              </div>

              {/* Output */}
              <div className="flex gap-16 items-center absolute left-[80%] top-[40%] -translate-y-1/2">
                <Node icon={<Terminal size={20} className="text-violet-400" />} label="Next.js Client" glow="shadow-[0_0_20px_rgba(139,92,246,0.3)]" />
              </div>
            </div>

            {/* Floating Status Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-6 right-6 bg-[#030712]/90 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-xl flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <div className="text-xs text-slate-400">System Status</div>
                <div className="text-sm font-medium text-white">All Agents Active</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Node({ icon, label, active, glow }: { icon: React.ReactNode, label: string, active?: boolean, glow?: string }) {
  return (
    <div className={`relative flex flex-col items-center gap-2 ${glow || ''}`}>
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-[#0F172A] border ${active ? 'border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.4)]' : 'border-white/10'} backdrop-blur-md z-10`}>
        {icon}
      </div>
      <div className="text-xs font-medium text-slate-300 bg-[#0A0F1C] px-2 py-1 rounded border border-white/5">{label}</div>
      {/* Connection points */}
      <div className="absolute top-1/2 -left-2 w-2 h-2 rounded-full bg-slate-600 -translate-y-1/2" />
      <div className="absolute top-1/2 -right-2 w-2 h-2 rounded-full bg-slate-600 -translate-y-1/2" />
    </div>
  )
}

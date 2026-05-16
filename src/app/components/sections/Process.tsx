import { motion } from "motion/react";
import { Lightbulb, MessageSquareCode, GitMerge, Link2, Database, Layout, TestTube, Rocket } from "lucide-react";

export function Process() {
  const steps = [
    { icon: <Lightbulb size={20} />, label: "Idea & Logic" },
    { icon: <MessageSquareCode size={20} />, label: "Prompt Eng." },
    { icon: <GitMerge size={20} />, label: "n8n Workflow" },
    { icon: <Link2 size={20} />, label: "API Connect" },
    { icon: <Database size={20} />, label: "PostgreSQL" },
    { icon: <Layout size={20} />, label: "Next.js UI" },
    { icon: <TestTube size={20} />, label: "Testing" },
    { icon: <Rocket size={20} />, label: "Deploy" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">How I Build.</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">From raw concept to fully functioning, automated system.</p>
      </div>

      <div className="relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-0 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center group relative"
            >
              {/* Desktop Node Connectors */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-indigo-500/0 group-hover:bg-indigo-500/50 transition-colors -translate-y-1/2 z-0" />
              
              <div className="w-14 h-14 rounded-2xl bg-[#0A0F1C] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-indigo-500/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300 relative z-10 mb-4 bg-gradient-to-b from-white/[0.05] to-transparent">
                {step.icon}
              </div>
              
              <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors text-center">
                {step.label}
              </div>
              <div className="text-xs text-slate-600 font-mono mt-1">0{i + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

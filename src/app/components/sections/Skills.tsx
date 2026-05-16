import { motion } from "motion/react";
import { Bot, Workflow, Layers, Server, Database, Webhook, ShieldAlert, Youtube, ArrowLeftRight } from "lucide-react";

export function Skills() {
  const skills = [
    { icon: <Bot size={24} />, name: "AI Agents", color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { icon: <Workflow size={24} />, name: "n8n Automation", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    { icon: <Layers size={24} />, name: "Next.js / React", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { icon: <Server size={24} />, name: "Node.js Backend", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
    { icon: <Database size={24} />, name: "PostgreSQL", color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20" },
    { icon: <ArrowLeftRight size={24} />, name: "API Integration", color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
    { icon: <Webhook size={24} />, name: "Webhooks", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
    { icon: <ShieldAlert size={24} />, name: "Cybersecurity Workflows", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
    { icon: <Youtube size={24} />, name: "YouTube Automation", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Technical Arsenal</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">The tools and technologies I use to build scalable, automated, and intelligent systems.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#0A0F1C] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all group"
          >
            <div className={`p-4 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${skill.bg} ${skill.color} border ${skill.border}`}>
              {skill.icon}
            </div>
            <h3 className="text-sm font-semibold text-slate-200">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

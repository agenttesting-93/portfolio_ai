import { motion } from "motion/react";
import { Zap, Bot, Laptop, ArrowLeftRight, LayoutDashboard, PlaySquare } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Zap size={24} className="text-amber-400" />,
      title: "Custom n8n Automation",
      description: "Connect your apps, automate repetitive tasks, and build complex logic pipelines using n8n without costly subscription limits."
    },
    {
      icon: <Bot size={24} className="text-indigo-400" />,
      title: "AI Agent Development",
      description: "Custom AI agents powered by OpenAI, Claude, or local LLMs to handle customer support, data extraction, or content generation."
    },
    {
      icon: <Laptop size={24} className="text-emerald-400" />,
      title: "SaaS MVP Prototypes",
      description: "Fast-track your startup idea. I build complete, scalable MVPs using Next.js, Node, and PostgreSQL in record time."
    },
    {
      icon: <ArrowLeftRight size={24} className="text-violet-400" />,
      title: "API & Webhook Integration",
      description: "Seamlessly connect disparate systems. I build custom bridges between your favorite SaaS tools and internal databases."
    },
    {
      icon: <LayoutDashboard size={24} className="text-blue-400" />,
      title: "Dashboard & Admin UIs",
      description: "Beautiful, data-dense, and highly responsive React dashboards to monitor your automations and business metrics."
    },
    {
      icon: <PlaySquare size={24} className="text-rose-400" />,
      title: "YouTube Automation Systems",
      description: "End-to-end automated pipelines that generate scripts, synthesize voiceovers, and edit short-form content."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">What I Do.</h2>
        <p className="text-slate-400 max-w-2xl">Specialized services bridging the gap between intelligent AI and scalable web infrastructure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0A0F1C] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

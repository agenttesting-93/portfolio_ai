import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "AI Phishing Detection Agent",
      description: "Automated cybersecurity workflow that analyzes incoming emails, extracts links, and uses AI to determine phishing probabilities before alerting the user.",
      tags: ["n8n", "AI Agent", "Cybersecurity", "Webhooks"],
      image: "bg-gradient-to-br from-red-900/40 to-slate-900",
      accent: "text-red-400"
    },
    {
      title: "Healthcare AI Consultation",
      description: "A secure workflow that triages patient symptoms via chat, integrates with medical databases, and summarizes context for doctors before the appointment.",
      tags: ["Next.js", "OpenAI", "PostgreSQL", "Healthcare"],
      image: "bg-gradient-to-br from-emerald-900/40 to-slate-900",
      accent: "text-emerald-400"
    },
    {
      title: "YouTube Shorts Pipeline",
      description: "Fully automated system that scrapes trending topics, generates scripts via LLM, creates voiceovers, and compiles short-form video content automatically.",
      tags: ["YouTube API", "n8n", "Node.js", "Automation"],
      image: "bg-gradient-to-br from-rose-900/40 to-slate-900",
      accent: "text-rose-400"
    },
    {
      title: "WhatsApp Task & Prayer Agent",
      description: "A personal assistant bot over WhatsApp that schedules tasks, manages PostgreSQL records, and sends timely prayer and habit reminders.",
      tags: ["WhatsApp API", "n8n", "PostgreSQL", "Cron"],
      image: "bg-gradient-to-br from-green-900/40 to-slate-900",
      accent: "text-green-400"
    },
    {
      title: "Fiverr / Portfolio System",
      description: "A sleek, high-conversion Next.js portfolio integrated with a custom admin dashboard to manage leads, showcase projects, and track analytics.",
      tags: ["Next.js", "Tailwind CSS", "Vite", "React"],
      image: "bg-gradient-to-br from-indigo-900/40 to-slate-900",
      accent: "text-indigo-400"
    },
    {
      title: "PostgreSQL + n8n Backend",
      description: "Scalable backend architecture utilizing n8n as the primary logic orchestrator, connected to a robust PostgreSQL database for enterprise data handling.",
      tags: ["Architecture", "Database", "n8n", "Scalability"],
      image: "bg-gradient-to-br from-blue-900/40 to-slate-900",
      accent: "text-blue-400"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-indigo-400 font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            Featured Work
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Systems I've Built.</h2>
        </div>
        <button className="px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors flex items-center gap-2 text-sm font-medium">
          View All Projects <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex flex-col rounded-3xl bg-[#0A0F1C] border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500"
          >
            {/* Project Image/Visual Placeholder */}
            <div className={`h-48 w-full ${project.image} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <button className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                  <Github size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

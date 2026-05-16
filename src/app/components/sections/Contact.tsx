import { motion } from "motion/react";
import { Mail, MessageSquare, Calendar, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white mb-8 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
          <MessageSquare size={28} />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Have an automation idea? <br/> Let's build it.</h2>
        <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl">
          Whether you need a custom n8n workflow, an AI agent, or a full-stack Next.js application, I'm ready to turn your concept into a reliable system.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="mailto:contact@example.com" 
            className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group"
          >
            <Mail size={18} />
            Email Me
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button className="px-8 py-4 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-2 font-semibold">
            <Calendar size={18} />
            Book a Call
          </button>
        </div>

        <div className="mt-16 flex items-center gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Twitter / X</a>
          <div className="w-1 h-1 rounded-full bg-slate-700" />
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <div className="w-1 h-1 rounded-full bg-slate-700" />
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </motion.div>
    </section>
  );
}

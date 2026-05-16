import { motion } from "motion/react";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Ahmad completely transformed how we handle incoming leads. His n8n workflow connected our CRM and email seamlessly. Saved us hours every day.",
      author: "Sarah J.",
      role: "Operations Manager",
      company: "TechFlow"
    },
    {
      quote: "The Next.js dashboard he built for our AI agents is incredibly fast and intuitive. He understands both complex backend logic and sleek frontend design.",
      author: "David M.",
      role: "Founder",
      company: "AI Startups Inc"
    },
    {
      quote: "Brilliant execution on the YouTube automation pipeline. Everything from script generation to video rendering works flawlessly on autopilot.",
      author: "Ali R.",
      role: "Content Creator",
      company: "MediaHouse"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Client Feedback.</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">What people say about my automation and development work.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-[#0A0F1C] border border-white/5 hover:border-white/10 transition-all relative group"
          >
            <Quote size={24} className="text-indigo-500/20 mb-6 group-hover:text-indigo-500/40 transition-colors" />
            <p className="text-slate-300 text-sm leading-relaxed mb-8">"{t.quote}"</p>
            
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-indigo-400 font-bold text-sm">
                {t.author.charAt(0)}
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">{t.author}</h4>
                <p className="text-slate-500 text-xs">{t.role}, {t.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

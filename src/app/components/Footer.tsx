import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] py-12 mt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-bold text-lg tracking-tight text-white flex items-center gap-2">
            Ahmad<span className="text-slate-400">Raza</span>
          </span>
          <p className="text-slate-500 text-sm">AI Automation Developer & Next.js Expert</p>
        </div>

        <div className="flex gap-4">
          <SocialLink href="#" icon={<Github size={18} />} />
          <SocialLink href="#" icon={<Linkedin size={18} />} />
          <SocialLink href="#" icon={<Twitter size={18} />} />
          <SocialLink href="mailto:contact@example.com" icon={<Mail size={18} />} />
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
    >
      {icon}
    </a>
  );
}

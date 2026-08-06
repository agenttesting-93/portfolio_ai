import Link from "next/link";

import { footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-parrot-400/15 bg-card/60 py-8 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-foreground">Ahmad Raza — AI Automation Developer</p>
          <p className="mt-2 text-sm text-muted-foreground">BSCS student building practical AI systems, workflows, and premium frontend experiences.</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition-colors duration-200 hover:text-parrot-400">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
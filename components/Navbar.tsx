"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navLinks, whatsappHref } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");

  // Blur/solidify the bar once the user scrolls past the hero fold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-parrot-400/15 bg-background/80 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href="#home" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-parrot-400/25 bg-white/5 text-sm font-semibold text-foreground shadow-glow transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:border-parrot-400/50">
            AR
          </span>
          <span className="text-sm font-semibold tracking-[0.24em] text-foreground sm:text-base">Ahmad Raza</span>
        </Link>

        <div className="flex items-center gap-3 md:order-3">
          <ThemeToggle />

          <Button asChild variant="glow" size="sm" className="shadow-glow">
            <Link href={whatsappHref} target="_blank" rel="noreferrer">
              Hire Me
            </Link>
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex md:flex-1 md:justify-center">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative transition-colors duration-200 hover:text-foreground ${
                  isActive ? "text-foreground" : ""
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-parrot-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full overflow-hidden md:hidden"
            >
              <nav className="mt-2 flex flex-col gap-2 rounded-3xl border border-parrot-400/15 bg-background/90 p-4 text-sm text-muted-foreground backdrop-blur-2xl">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-3 py-3 transition-colors duration-200 hover:bg-parrot-400/10 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

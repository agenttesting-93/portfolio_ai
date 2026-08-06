"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-parrot-400/25 bg-white/5 text-parrot-300 transition-colors duration-300 hover:border-parrot-400/50 hover:bg-parrot-400/10"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute"
          >
            <Moon className="h-5 w-5" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ y: -20, opacity: 0, rotate: 90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: -90 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute"
          >
            <Sun className="h-5 w-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

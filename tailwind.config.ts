import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem"
    },
    fontFamily: {
      sans: ["var(--font-space-grotesk)", "sans-serif"],
      mono: ["var(--font-jetbrains-mono)", "monospace"]
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        parrot: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#7cfc00",
          500: "#4abb17",
          600: "#22c55e",
          700: "#16a34a",
          800: "#15803d",
          900: "#14532d",
          950: "#052e16"
        }
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(to right, rgba(124, 252, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(124, 252, 0, 0.1) 1px, transparent 1px)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124, 252, 0, 0.2), 0 20px 80px rgba(2, 20, 6, 0.45)",
        soft: "0 15px 50px rgba(2, 20, 6, 0.35)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.8" }
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" }
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124, 252, 0, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(124, 252, 0, 0.8)" }
        },
        textShimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        fadeIn: "fadeIn 0.6s ease-out",
        fadeInUp: "fadeInUp 0.8s ease-out",
        fadeInDown: "fadeInDown 0.8s ease-out",
        scaleIn: "scaleIn 0.5s ease-out",
        slideInLeft: "slideInLeft 0.8s ease-out",
        slideInRight: "slideInRight 0.8s ease-out",
        shimmer: "shimmer 3s linear infinite",
        gradientShift: "gradientShift 8s ease infinite",
        bounce: "bounce 2s ease-in-out infinite",
        spin: "spin 1s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite",
        textShimmer: "textShimmer 3s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
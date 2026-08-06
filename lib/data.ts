import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bot,
  Code2,
  Database,
  MailCheck,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Workflow,
  Youtube
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type Skill = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  description: string;
  badges: string[];
  icon: LucideIcon;
};

export type ProcessStep = {
  title: string;
  detail: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

export const heroStats = [
  { label: "Automation focus", value: "AI + n8n" },
  { label: "Build style", value: "Product-first" },
  { label: "Current base", value: "Pakistan" }
];

export const aboutHighlights = [
  "BSCS student at Virtual University of Pakistan",
  "Builds practical AI systems using n8n, APIs, databases, and modern web apps",
  "Focuses on reliable workflows that turn ideas into shipped products"
];

export const skills: Skill[] = [
  { name: "n8n Automation", description: "Workflow orchestration and multi-step automations.", icon: Workflow },
  { name: "AI Agents", description: "Reasoning, tool use, and action-driven assistants.", icon: Bot },
  { name: "Next.js", description: "Production-ready App Router interfaces.", icon: Code2 },
  { name: "React", description: "Composable UI systems and interactive dashboards.", icon: Sparkles },
  { name: "Node.js", description: "Custom logic, integrations, and backend glue.", icon: Activity },
  { name: "PostgreSQL", description: "Structured data, state, and automation logs.", icon: Database },
  { name: "Webhooks", description: "Fast event-driven connections between tools.", icon: MailCheck },
  { name: "API Integration", description: "SaaS and internal system connectivity.", icon: MessageSquare },
  { name: "Prompt Engineering", description: "Sharp prompts that improve reliability.", icon: Sparkles },
  { name: "Cybersecurity Workflows", description: "Phishing checks and risk-aware automations.", icon: ShieldCheck },
  { name: "SaaS MVPs", description: "Rapid prototypes that feel launch-ready.", icon: Code2 },
  { name: "YouTube Automation", description: "Content pipelines from research to publish.", icon: Youtube }
];

export const projects: Project[] = [
  {
    title: "AI Phishing Detection Agent",
    description:
      "Automated cybersecurity workflow that inspects incoming emails, extracts suspicious links, scores risk with AI, and alerts the user before damage is done.",
    badges: ["n8n", "AI Agent", "Cybersecurity", "Webhooks"],
    icon: ShieldCheck
  },
  {
    title: "Healthcare AI Consultation Workflow",
    description:
      "A structured intake system for patient symptoms that triages context, stores clean records, and prepares concise summaries for doctors.",
    badges: ["Next.js", "OpenAI", "PostgreSQL", "Healthcare"],
    icon: Bot
  },
  {
    title: "YouTube Shorts Automation Pipeline",
    description:
      "End-to-end content pipeline that researches trends, drafts scripts, generates voiceovers, and prepares short-form output automatically.",
    badges: ["YouTube API", "n8n", "Node.js", "Automation"],
    icon: Youtube
  },
  {
    title: "WhatsApp Task / Prayer Reminder Agent",
    description:
      "A personal assistant workflow that manages task reminders, records entries in PostgreSQL, and sends timely WhatsApp updates.",
    badges: ["WhatsApp API", "Cron", "PostgreSQL", "n8n"],
    icon: MessageSquare
  },
  {
    title: "PostgreSQL + n8n Backend Automation",
    description:
      "A backend automation layer that uses n8n as orchestration logic around a scalable PostgreSQL core for structured business data.",
    badges: ["Architecture", "Database", "Workflow", "Scalability"],
    icon: Database
  },
  {
    title: "Fiverr Portfolio Website System",
    description:
      "A sleek portfolio system designed to convert visitors into leads through fast UI, polished presentation, and a clear service story.",
    badges: ["Next.js", "Tailwind CSS", "React", "Conversion"],
    icon: Code2
  }
];

export const processSteps: ProcessStep[] = [
  { title: "Idea", detail: "Translate a rough business problem into a clean product hypothesis." },
  { title: "Prompt Engineering", detail: "Shape the AI behavior so outputs are useful, constrained, and predictable." },
  { title: "n8n Workflow", detail: "Map the logic into a reliable automation pipeline with triggers and actions." },
  { title: "API Integration", detail: "Connect email, messaging, LLM, and SaaS services through secure endpoints." },
  { title: "Database", detail: "Persist the important state in PostgreSQL for structure, logs, and traceability." },
  { title: "Frontend", detail: "Surface the system in a polished Next.js interface for operators and clients." },
  { title: "Testing", detail: "Validate edge cases, flow reliability, and production readiness." },
  { title: "Deployment", detail: "Ship to a stable environment with clean handoff and monitoring in place." }
];

export const services: Service[] = [
  { title: "Custom n8n Workflow Automation", description: "Build business logic that removes repetitive manual work and keeps systems in sync.", icon: Workflow },
  { title: "AI Agent Development", description: "Create tool-using AI agents that reason, retrieve data, and act with purpose.", icon: Bot },
  { title: "SaaS MVP Prototypes", description: "Turn startup ideas into launchable product prototypes with clean engineering.", icon: Sparkles },
  { title: "API & Webhook Integration", description: "Connect modern apps, messaging systems, and databases without fragile glue code.", icon: MessageSquare },
  { title: "Dashboard / Admin Panel UI", description: "Design fast operator interfaces for monitoring automations and data workflows.", icon: Code2 },
  { title: "YouTube Automation Systems", description: "Create automated content pipelines that research, generate, and prepare publishable assets.", icon: Youtube }
];

// Central WhatsApp link — used by every "Contact Me" / "Hire Me" CTA.
export const whatsappHref =
  "https://wa.me/923171699783?text=Hi%20Ahmad%2C%20I%27d%20like%20to%20discuss%20a%20project.";

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmad-raza-864375363/" },
  { label: "GitHub", href: "https://github.com/raza-ahmad-09" },
  { label: "WhatsApp", href: whatsappHref }
];

export const footerLinks = navLinks;
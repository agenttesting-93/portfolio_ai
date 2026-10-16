"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowDownToLine, ArrowRight, ArrowUpRight, Check, ChevronDown, Github, Linkedin, Menu, X } from "lucide-react";
const MAILTO = "mailto:razaahmadzafar.dev@gmail.com?subject=Project%20Inquiry";
const PORTRAIT = "/assets/ahmad-portrait.webp";
const ease = [0.22, 1, 0.36, 1] as const;
type Project = {
    id: string;
    title: string;
    type: string;
    description: string;
    detail: string;
    tags: string[];
    visual: string;
    image?: string;
    href?: string;
};
const work: Project[] = [
    { id: "01", title: "Zeno Trade Pro", type: "FRONTEND DEVELOPMENT", description: "A clearer view of complex operations.", detail: "Worked on a web-based ERP solution designed for mills as a Frontend Developer at Synergic Corporate Solution, August 2025 – March 2026.", tags: ["ERP interface", "Frontend", "Business software"], visual: "erp" },
    { id: "02", title: "AI Phishing Detection", type: "AI AGENT · AUTOMATION", description: "An intelligent checkpoint for your inbox.", detail: "An n8n workflow that inspects incoming emails, extracts suspicious links, uses AI to assess risk, and routes notifications to the user.", tags: ["n8n", "AI agents", "Webhooks"], visual: "agent" },
    { id: "03", title: "YouTube Content Pipeline", type: "WORKFLOW ENGINEERING", description: "From research to a repeatable content flow.", detail: "A content automation pipeline connecting trend research, script drafting, voiceovers, and preparation of short-form content.", tags: ["n8n", "Node.js", "API integration"], visual: "pipeline" },
    { id: "04", title: "Convaryx", type: "AI AGENTS · BUSINESS AUTOMATION", description: "Business messaging, powered by WhatsApp AI agents.", detail: "A platform for configuring WhatsApp AI agents for lead qualification, customer support, appointment scheduling, and automated messaging workflows.", tags: ["Next.js", "PostgreSQL", "Prisma", "n8n", "Vercel", "Oracle Cloud", "Meta API"], visual: "convaryx", image: "/assets/convaryx-home.png", href: "https://convaryx.razaahmad.tech/" }
];
function ProjectVisual({ kind }: {
    kind: string;
}) {
    if (kind === "erp")
        return <div className="erp-preview" aria-label="Illustrative ERP interface, not a product screenshot">
    <div className="mock-sidebar"><span className="mock-brand">z<span>.</span></span>{["Overview", "Production", "Inventory", "Reports"].map((label, i) => <span key={label} className={i === 0 ? "selected" : ""}><i />{label}</span>)}<span className="mock-sidebar-bottom">ZENO / WORKSPACE</span></div>
    <div className="mock-main"><div className="mock-top"><span>Workspace overview</span><span className="mock-avatar">AR</span></div><div className="mock-greeting">Everything, in one place.<span>Your mill operations at a glance.</span></div><div className="mock-stats">{["Production", "Inventory", "Orders"].map((s, i) => <div key={s}><span>{s}</span><b>{["24.8k", "1,284", "186"][i]}</b><small>Overview ↗</small></div>)}</div><div className="mock-chart"><div>Production overview <span>This week ↗</span></div><div className="chart-bars">{[35, 58, 46, 72, 65, 88, 78, 92, 68, 84, 95, 80].map((h, i) => <i key={i} style={{ height: `${h}%` }}/>)}</div></div></div>
  </div>;
    if (kind === "agent")
        return <div className="agent-preview" aria-label="Illustration of the phishing detection workflow"><div className="preview-window"><span /><span /><span /><p>email_security.workflow</p></div><div className="agent-path"><div className="flow-node">@<span>Email intake</span></div><i /><div className="flow-node flow-core">✳<span>AI analysis</span></div><i /><div className="flow-node"><Check size={23}/><span>Notify & log</span></div></div><div className="agent-log"><span><i /> WORKFLOW PREVIEW</span><p><b>01</b> Extract links & context</p><p><b>02</b> Evaluate potential threats</p><p><b>03</b> Route a clear notification <ArrowUpRight size={14}/></p></div></div>;
    return <div className="pipeline-preview" aria-label="Illustration of the content production workflow"><div className="pipeline-top"><span className="pipeline-play">▶</span><span>CONTENT ENGINE<small>One idea. A connected workflow.</small></span></div><div className="pipeline-steps">{["Research", "Script", "Voice", "Output"].map((label, i) => <div key={label}><span>0{i + 1}</span><b>{label}</b>{i < 3 && <ArrowRight size={17}/>}</div>)}</div><div className="pipeline-wave">{Array.from({ length: 38 }, (_, i) => <i key={i} style={{ height: `${Math.round(12 + Math.abs(Math.sin(i * 1.8)) * 44)}px` }}/>)}</div><span className="pipeline-caption">REPETITION, AUTOMATED.</span></div>;
}
export function PortfolioExperience() {
    const reduced = useReducedMotion();
    const [loading, setLoading] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openProject, setOpenProject] = useState<string | null>(null);
    const [portraitFailed, setPortraitFailed] = useState(false);
    const [compact, setCompact] = useState(false);
    const scene = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: scene, offset: ["start start", "end end"] });
    const introOpacity = useSpring(useTransform(scrollYProgress, [0, 0.4], [1, 0]), { stiffness: 180, damping: 30 });
    const introY = useTransform(scrollYProgress, [0, 0.5], [0, -90]);
    const portraitX = useTransform(scrollYProgress, [0, 0.85], ["0%", "-105%"]);
    const portraitScale = useTransform(scrollYProgress, [0, 0.85], [1, 0.67]);
    const portraitY = useTransform(scrollYProgress, [0, 0.85], [0, 20]);
    const workOpacity = useSpring(useTransform(scrollYProgress, [0.35, 0.7], [0, 1]), { stiffness: 180, damping: 30 });
    const workY = useTransform(scrollYProgress, [0.35, 0.85], [60, 0]);
    const introVisibility = useTransform(scrollYProgress, value => value >= 0.4 ? "hidden" as const : "visible" as const);
    const workVisibility = useTransform(scrollYProgress, value => value <= 0.35 ? "hidden" as const : "visible" as const);
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const rotateY = useSpring(useTransform(pointerX, [-1, 1], [-9, 9]), { stiffness: 75, damping: 22 });
    const rotateX = useSpring(useTransform(pointerY, [-1, 1], [5, -5]), { stiffness: 75, damping: 22 });
    const imageX = useSpring(useTransform(pointerX, [-1, 1], [-10, 10]), { stiffness: 70, damping: 24 });
    useEffect(() => {
        const query = window.matchMedia("(max-width: 760px)");
        const update = () => setCompact(query.matches);
        update();
        query.addEventListener("change", update);
        return () => query.removeEventListener("change", update);
    }, []);
    useEffect(() => {
        let active = true;
        const started = performance.now();
        const image = new window.Image();
        const finish = () => window.setTimeout(() => { if (active)
            setLoading(false); }, Math.max(0, 1450 - (performance.now() - started)));
        image.onload = finish;
        image.onerror = () => { if (active)
            setPortraitFailed(true); finish(); };
        image.src = PORTRAIT;
        const timeout = window.setTimeout(() => { if (active)
            setLoading(false); }, 2800);
        return () => { active = false; window.clearTimeout(timeout); };
    }, []);
    useEffect(() => {
        if (!loading)
            return;
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = original; };
    }, [loading]);
    useEffect(() => {
        if (reduced || !window.matchMedia("(hover: hover) and (pointer: fine)").matches)
            return;
        const move = (event: PointerEvent) => { pointerX.set(event.clientX / window.innerWidth * 2 - 1); pointerY.set(event.clientY / window.innerHeight * 2 - 1); };
        const reset = () => { pointerX.set(0); pointerY.set(0); };
        window.addEventListener("pointermove", move);
        document.addEventListener("pointerleave", reset);
        window.addEventListener("blur", reset);
        return () => { window.removeEventListener("pointermove", move); document.removeEventListener("pointerleave", reset); window.removeEventListener("blur", reset); };
    }, [pointerX, pointerY, reduced]);
    useEffect(() => {
        const close = (event: KeyboardEvent) => { if (event.key === "Escape")
            setMenuOpen(false); };
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    }, []);
    return <div className="portfolio-shell">
    <a href="#main" className="skip-link">Skip to content</a>
    <AnimatePresence>{loading && <motion.div className="intro-loader" role="status" aria-label="Loading Ahmad Raza's portfolio" exit={{ y: reduced ? 0 : "-100%", opacity: reduced ? 0 : 1 }} transition={{ duration: reduced ? 0.15 : 0.75, ease }}><span className="loader-eyebrow">FRONTEND × AI AUTOMATION</span><motion.div initial={{ opacity: 0, y: reduced ? 0 : 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }} className="loader-name">Ahmad Raza<span>.</span></motion.div><div className="loader-line"><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, ease }}/></div><span className="loader-bottom">A LITTLE INTRO. THEN THE WORK.</span></motion.div>}</AnimatePresence>
    <header inert={loading || undefined} className="site-header"><a href="#home" className="wordmark" aria-label="Ahmad Raza home"><span className="brand-mark">ar<span>.</span></span><span>Ahmad Raza<span className="wordmark-sub">DEVELOPER & AUTOMATION ENGINEER</span></span></a><nav className="desktop-nav" aria-label="Main navigation"><a href="#work">Selected work <span>{String(work.length).padStart(2, "0")}</span></a><a href="#expertise">Expertise</a><a href={MAILTO} className="nav-contact">Let’s talk <ArrowUpRight size={16}/></a></nav><button className="mobile-menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>{menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation"><a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a><a href="#expertise" onClick={() => setMenuOpen(false)}>Expertise</a><a href={MAILTO} onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={18}/></a></nav>}</header>
    <main inert={loading || undefined} id="main">
      <section id="home" ref={scene} className={`hero-scene ${reduced ? "reduced-scene" : ""}`}>
        <div className="hero-stage"><div className="hero-grid" aria-hidden="true"/><div className="hero-red-glow" aria-hidden="true"/>
          <motion.div className="hero-copy" style={reduced || compact ? { opacity: 1, y: 0, visibility: "visible" } : { opacity: introOpacity, y: introY, visibility: introVisibility }}>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={!loading ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.7 }} className="hero-eyebrow"><span className="status-dot"/> IDEAS INTO INTERFACES. TASKS INTO SYSTEMS.</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={!loading ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.85, ease }}>Ahmad<br />Raza<span className="name-period">.</span></motion.h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={!loading ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.45, duration: 0.8, ease }}><h2 className="hero-role">Frontend &<br /><span>AI Automation Engineer.</span></h2><p className="hero-description">I build thoughtful web experiences and intelligent<br className="desktop-break"/> workflows that make the everyday work better.</p><div className="hero-actions"><a className="button-primary" href="/files/Ahmad-Raza-CV.pdf" download="Ahmad-Raza-CV.pdf">Download CV <ArrowDownToLine size={18}/></a><a href={MAILTO} className="button-text">Contact me <ArrowUpRight size={20}/></a></div><div className="hero-meta"><span>MURIDKE, PAKISTAN</span><i /><span>FRONTEND · AGENTS · AUTOMATION</span></div></motion.div>
          </motion.div>
          <motion.div className="portrait-anchor" style={reduced || compact ? { x: 0, y: 0, scale: 1 } : { x: portraitX, y: portraitY, scale: portraitScale }}><div className="portrait-orbit" aria-hidden="true"><span className="orbit-cross cross-one">+</span><span className="orbit-cross cross-two">+</span></div><span className="portrait-side-label" aria-hidden="true">HUMAN CREATIVITY. INTELLIGENT SYSTEMS.</span><motion.div className="portrait-card" style={reduced || compact ? undefined : { rotateX, rotateY, x: imageX, transformPerspective: 1200 }}><img src={portraitFailed ? "/assets/ahmad-reference.jpg" : PORTRAIT} alt="Ahmad Raza, frontend and AI automation engineer" className={portraitFailed ? "portrait-image portrait-fallback" : "portrait-image"} fetchPriority="high" onError={() => setPortraitFailed(true)}/><div className="portrait-shade"/></motion.div><div className="portrait-caption"><span className="caption-cross">✳</span><span>Made of curiosity.<br /><b>Driven to build.</b></span><span className="caption-index">AR / 01</span></div></motion.div>
          <motion.div className="work-teaser" style={reduced || compact ? undefined : { opacity: workOpacity, y: workY, visibility: workVisibility }}><span className="section-kicker"><span>01 / THE WORK</span><i /></span><h2>Enough intro.<br />Let’s see<br /><em>what I build.</em></h2><p>From interfaces that simplify operations to agents that connect the dots.</p><a href="#work" className="button-text">Explore selected projects <ArrowDown size={19}/></a></motion.div>
          <motion.div className="hero-bottom" style={reduced || compact ? { opacity: 1 } : { opacity: introOpacity }}><a href="#work"><span className="scroll-icon"><ArrowDown size={15}/></span> SCROLL TO EXPLORE</a><span>CODE WITH INTENT. AUTOMATE WITH PURPOSE.</span><span className="hero-page-index">01 — 03</span></motion.div>
        </div>
      </section>
      <div className="technology-band" aria-label="Technologies"><span>THE TOOLKIT</span><div>{["React", "Next.js", "TypeScript", "n8n", "Python", "PostgreSQL"].map(t => <span key={t}>{t}<i>✳</i></span>)}</div></div>
      <section id="work" className="work-section"><div className="section-heading"><div><span className="section-kicker">01 / SELECTED WORK</span><h2>Built with purpose<span>.</span></h2></div><p>Web experiences. Connected workflows.<br />A few things I’ve worked on.</p></div><div className="project-list">{work.map(project => <motion.article key={project.id} className={`project-row project-${project.visual}`} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease }}><div className="project-image"><>{project.image && project.href ? <a href={project.href} className="project-image-link" target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} live website`}><img src={project.image} alt="Convaryx homepage showing its WhatsApp AI agents platform" className="project-screenshot" loading="lazy" width={550} height={650}/></a> : <ProjectVisual kind={project.visual}/>}<span className="visual-label">{project.image ? "LIVE WEBSITE" : project.visual === "erp" ? "INTERFACE CONCEPT" : "WORKFLOW VISUALIZATION"}</span></></div><div className="project-copy"><div className="project-kicker"><span>{project.type}</span><span>/{project.id}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.href && <a className="project-live-link" href={project.href} target="_blank" rel="noopener noreferrer">Visit live website <ArrowUpRight size={17}/></a>}<button className="project-details" aria-expanded={openProject === project.id} aria-controls={`project-${project.id}`} onClick={() => setOpenProject(openProject === project.id ? null : project.id)}>{openProject === project.id ? "Close overview" : "Project overview"}<ChevronDown size={19} className={openProject === project.id ? "rotated" : ""}/></button><AnimatePresence>{openProject === project.id && <motion.div id={`project-${project.id}`} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="project-expanded"><p>{project.detail}</p><a href={MAILTO}>Discuss a similar project <ArrowUpRight size={14}/></a></motion.div>}</AnimatePresence></div></motion.article>)}</div></section>
      <section id="expertise" className="expertise-section"><span className="section-kicker">02 / THE APPROACH</span><div className="expertise-layout"><h2>Good interfaces.<br /><span>Smarter systems.</span></h2><div><p>I’m Ahmad, a developer based in Pakistan. I connect frontend engineering with practical AI automation—taking a project from the first idea to a working system.</p><div className="expertise-tags">{["Frontend development", "AI agents & tool calling", "n8n workflows", "APIs & webhooks", "Python & TypeScript", "Docker & PostgreSQL"].map(tag => <span key={tag}>{tag}</span>)}</div></div></div></section>
      <footer id="contact" className="site-footer"><div className="footer-top"><div><span className="section-kicker">03 / WHAT’S NEXT?</span><h2>Have something<br />in mind<span>?</span></h2></div><a className="footer-contact" href={MAILTO} aria-label="Email Ahmad about a project"><ArrowUpRight size={48}/></a></div><a href={MAILTO} className="footer-email">razaahmadzafar.dev@gmail.com <ArrowUpRight size={18}/></a><div className="footer-bottom"><span>© {new Date().getFullYear()} AHMAD RAZA</span><div><a href="https://github.com/Raza-Ahmad-09" target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={12}/></a><a href="https://www.linkedin.com/in/ahmad-raza-864375363/" target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn <ArrowUpRight size={12}/></a><a href="/files/Ahmad-Raza-CV.pdf" download><ArrowDownToLine size={15}/> Resume</a></div><a href="#home">BACK TO TOP ↑</a></div></footer>
    </main>
  </div>;
}

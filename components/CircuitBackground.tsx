"use client";

import { useEffect, useRef } from "react";

import { useTheme } from "@/components/theme/ThemeProvider";

type Point = { x: number; y: number };

type Trace = {
  nodes: Point[];      // polyline the pulse travels along
  length: number;      // total path length in px
  speed: number;       // px per frame at base scroll
  offset: number;      // current head position along the path
  width: number;
};

// Build an L-shaped (Manhattan-routed) path between two grid cells.
function buildTrace(gridX: number, gridY: number, cell: number): Trace {
  const startX = gridX * cell;
  const startY = gridY * cell;
  const horizFirst = (gridX + gridY) % 2 === 0;
  const legLen = (1 + Math.floor((gridX * 7 + gridY * 13) % 3)) * cell;

  const nodes: Point[] = [{ x: startX, y: startY }];
  if (horizFirst) {
    nodes.push({ x: startX + legLen, y: startY });
    nodes.push({ x: startX + legLen, y: startY + legLen });
  } else {
    nodes.push({ x: startX, y: startY + legLen });
    nodes.push({ x: startX + legLen, y: startY + legLen });
  }

  let length = 0;
  for (let i = 1; i < nodes.length; i++) {
    length += Math.hypot(nodes[i].x - nodes[i - 1].x, nodes[i].y - nodes[i - 1].y);
  }

  const seed = (gridX * 31 + gridY * 17) % 100;
  return {
    nodes,
    length,
    speed: 0.4 + (seed % 10) / 14,
    offset: (seed / 100) * length,
    width: seed % 5 === 0 ? 1.6 : 1
  };
}

// Position of a point `dist` px along the trace polyline.
function pointAt(trace: Trace, dist: number): Point {
  let remaining = dist % trace.length;
  for (let i = 1; i < trace.nodes.length; i++) {
    const a = trace.nodes[i - 1];
    const b = trace.nodes[i];
    const seg = Math.hypot(b.x - a.x, b.y - a.y);
    if (remaining <= seg) {
      const t = seg === 0 ? 0 : remaining / seg;
      return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
    }
    remaining -= seg;
  }
  return trace.nodes[trace.nodes.length - 1];
}

export function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const cell = 48;
    let traces: Trace[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;

    const setup = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(width / cell);
      const rows = Math.ceil(height / cell);
      traces = [];
      for (let gx = 0; gx <= cols; gx++) {
        for (let gy = 0; gy <= rows; gy++) {
          // Sparse: only a fraction of cells spawn a trace.
          if ((gx * 7 + gy * 11) % 5 === 0) {
            traces.push(buildTrace(gx, gy, cell));
          }
        }
      }
    };

    // Track scroll velocity — the pulses accelerate as the user scrolls.
    let lastScrollY = window.scrollY;
    let scrollBoost = 0;
    let scrollProgress = 0;
    const onScroll = () => {
      const dy = Math.abs(window.scrollY - lastScrollY);
      lastScrollY = window.scrollY;
      scrollBoost = Math.min(scrollBoost + dy * 0.05, 6);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = max > 0 ? window.scrollY / max : 0;
    };

    const palette = () => {
      const dark = themeRef.current === "dark";
      return {
        grid: dark ? "rgba(124, 252, 0, 0.05)" : "rgba(34, 139, 34, 0.06)",
        node: dark ? "rgba(124, 252, 0, 0.18)" : "rgba(34, 139, 34, 0.22)",
        pulseCore: dark ? "rgba(163, 255, 89, 0.95)" : "rgba(30, 130, 20, 0.9)",
        pulseGlow: dark ? "rgba(124, 252, 0, 0.55)" : "rgba(74, 187, 23, 0.4)"
      };
    };

    let raf = 0;

    const drawGrid = (colors: ReturnType<typeof palette>) => {
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= width; x += cell) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += cell) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    };

    const render = () => {
      const colors = palette();
      ctx.clearRect(0, 0, width, height);

      drawGrid(colors);

      // Base speed rises slightly as you scroll deeper into the page.
      const globalSpeed = 1 + scrollProgress * 1.5 + scrollBoost;

      for (const trace of traces) {
        // Draw the static trace line faintly.
        ctx.strokeStyle = colors.grid;
        ctx.lineWidth = trace.width;
        ctx.beginPath();
        ctx.moveTo(trace.nodes[0].x, trace.nodes[0].y);
        for (let i = 1; i < trace.nodes.length; i++) {
          ctx.lineTo(trace.nodes[i].x, trace.nodes[i].y);
        }
        ctx.stroke();

        // Node dots.
        ctx.fillStyle = colors.node;
        const start = trace.nodes[0];
        ctx.beginPath();
        ctx.arc(start.x, start.y, 1.6, 0, Math.PI * 2);
        ctx.fill();

        // Advance and draw the traveling pulse.
        if (!prefersReduced) {
          trace.offset = (trace.offset + trace.speed * globalSpeed) % trace.length;
        }
        const head = pointAt(trace, trace.offset);

        const glow = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 9);
        glow.addColorStop(0, colors.pulseCore);
        glow.addColorStop(0.4, colors.pulseGlow);
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(head.x, head.y, 9, 0, Math.PI * 2);
        ctx.fill();

        // Bright core.
        ctx.fillStyle = colors.pulseCore;
        ctx.beginPath();
        ctx.arc(head.x, head.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // Decay the scroll boost each frame so motion settles when idle.
      scrollBoost *= 0.92;
      raf = window.requestAnimationFrame(render);
    };

    setup();
    render();

    window.addEventListener("resize", setup);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", setup);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-70"
    />
  );
}

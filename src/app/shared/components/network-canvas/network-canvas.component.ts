import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-aurora-canvas',
  standalone: true,
  template: `<canvas #canvas class="aurora-canvas" aria-hidden="true"></canvas>`,
  styles: [`
    .aurora-canvas {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
    }
  `]
})
export class AuroraCanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private platformId = inject(PLATFORM_ID);
  private animId = 0;
  private mouseX = 0;
  private mouseY = 0;
  private time = 0;
  private particles: Particle[] = [];
  private ctx!: CanvasRenderingContext2D;
  private canvas!: HTMLCanvasElement;
  private isDark = true;
  private resizeObserver?: ResizeObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.canvas = this.canvasRef.nativeElement;
    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;
    this.ctx = ctx;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    this.resize();
    this.initParticles();

    window.addEventListener('mousemove', this.onMouse);

    this.resizeObserver = new ResizeObserver(() => {
      this.resize();
      this.initParticles();
    });
    this.resizeObserver.observe(document.body);

    // Watch for theme changes
    const obs = new MutationObserver(() => {
      this.isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    this.isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    this.animate();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animId);
    window.removeEventListener('mousemove', this.onMouse);
    this.resizeObserver?.disconnect();
  }

  private onMouse = (e: MouseEvent) => {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  };

  private resize(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private initParticles(): void {
    const count = Math.min(60, Math.floor((this.canvas.width * this.canvas.height) / 18000));
    this.particles = Array.from({ length: count }, () => new Particle(this.canvas.width, this.canvas.height));
  }

  private animate = () => {
    this.animId = requestAnimationFrame(this.animate);
    this.time += 0.004;
    this.draw();
  };

  private draw(): void {
    const { ctx, canvas, time, mouseX, mouseY, isDark } = this;
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // ── Aurora blobs ──────────────────────────────────────────────────────
    if (isDark) {
      this.drawBlob(ctx, w * 0.2 + Math.sin(time * 0.5) * w * 0.08, h * 0.25 + Math.cos(time * 0.4) * h * 0.05, 480, '#5b7cff', 0.055);
      this.drawBlob(ctx, w * 0.75 + Math.cos(time * 0.45) * w * 0.06, h * 0.3 + Math.sin(time * 0.55) * h * 0.07, 420, '#9b6bff', 0.05);
      this.drawBlob(ctx, w * 0.5 + Math.sin(time * 0.35) * w * 0.1, h * 0.65 + Math.cos(time * 0.38) * h * 0.06, 380, '#22d3ee', 0.04);
      this.drawBlob(ctx, w * 0.85 + Math.sin(time * 0.42) * w * 0.04, h * 0.75 + Math.cos(time * 0.5) * h * 0.04, 320, '#34e8b0', 0.03);
    } else {
      this.drawBlob(ctx, w * 0.2 + Math.sin(time * 0.5) * w * 0.08, h * 0.2 + Math.cos(time * 0.4) * h * 0.05, 400, '#3d5ef0', 0.04);
      this.drawBlob(ctx, w * 0.75 + Math.cos(time * 0.45) * w * 0.06, h * 0.3 + Math.sin(time * 0.55) * h * 0.07, 350, '#7a4de0', 0.035);
      this.drawBlob(ctx, w * 0.5, h * 0.6 + Math.cos(time * 0.38) * h * 0.06, 300, '#0891b2', 0.03);
    }

    // ── Mouse spotlight ───────────────────────────────────────────────────
    if (mouseX || mouseY) {
      const spotlight = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 280);
      spotlight.addColorStop(0, isDark ? 'rgba(91,124,255,0.06)' : 'rgba(61,94,240,0.05)');
      spotlight.addColorStop(1, 'transparent');
      ctx.fillStyle = spotlight;
      ctx.fillRect(0, 0, w, h);
    }

    // ── Particles ─────────────────────────────────────────────────────────
    for (const p of this.particles) {
      p.update(w, h, mouseX, mouseY);
      p.draw(ctx, isDark);
    }

    // ── Connections ───────────────────────────────────────────────────────
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const a = this.particles[i];
        const b = this.particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          const alpha = (1 - dist / 160) * (isDark ? 0.12 : 0.08);
          ctx.strokeStyle = isDark
            ? `rgba(91,124,255,${alpha})`
            : `rgba(61,94,240,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
  }

  private drawBlob(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, color: string, alpha: number): void {
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    grad.addColorStop(0, color + Math.round(alpha * 255).toString(16).padStart(2, '0'));
    grad.addColorStop(0.4, color + Math.round(alpha * 0.5 * 255).toString(16).padStart(2, '0'));
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
  }
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseX: number;
  baseY: number;

  constructor(w: number, h: number) {
    this.x = this.baseX = Math.random() * w;
    this.y = this.baseY = Math.random() * h;
    const speed = 0.15 + Math.random() * 0.25;
    const angle = Math.random() * Math.PI * 2;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.radius = 1 + Math.random() * 1.5;
  }

  update(w: number, h: number, mx: number, my: number): void {
    // Mouse repulsion (gentle)
    const dx = this.x - mx;
    const dy = this.y - my;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 100 && dist > 0) {
      const force = (100 - dist) / 100 * 0.4;
      this.vx += (dx / dist) * force;
      this.vy += (dy / dist) * force;
    }

    // Damping
    this.vx *= 0.98;
    this.vy *= 0.98;

    // Minimum speed
    const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (spd < 0.08) {
      this.vx += (Math.random() - 0.5) * 0.05;
      this.vy += (Math.random() - 0.5) * 0.05;
    }

    this.x += this.vx;
    this.y += this.vy;

    // Wrap
    if (this.x < 0) this.x = w;
    if (this.x > w) this.x = 0;
    if (this.y < 0) this.y = h;
    if (this.y > h) this.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D, isDark: boolean): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = isDark ? 'rgba(91,124,255,0.4)' : 'rgba(61,94,240,0.3)';
    ctx.fill();
  }
}

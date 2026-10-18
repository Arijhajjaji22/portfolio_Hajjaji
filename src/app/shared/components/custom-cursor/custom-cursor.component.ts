import { Component, HostListener, signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  template: `
    @if (isDesktop()) {
      <div
        class="cursor-dot"
        [style.transform]="'translate3d(' + dotX() + 'px, ' + dotY() + 'px, 0)'"
        [class.active]="isHovering()"
        aria-hidden="true">
      </div>

      <div
        class="cursor-ring"
        [style.transform]="'translate3d(' + ringX() + 'px, ' + ringY() + 'px, 0) scale(' + (isHovering() ? 1.5 : 1) + ')'"
        [class.active]="isHovering()"
        aria-hidden="true">
      </div>
    }
  `,
  styles: [`
    :host {
      pointer-events: none;
    }

    .cursor-dot {
      position: fixed;
      top: -3px;
      left: -3px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: linear-gradient(135deg, #5b7cff, #9b6bff);
      pointer-events: none;
      z-index: 100000;
      will-change: transform;
    }

    .cursor-ring {
      position: fixed;
      top: -18px;
      left: -18px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1.5px solid transparent;
      background:
        linear-gradient(var(--bg, #070910), var(--bg, #070910)) padding-box,
        linear-gradient(135deg, #5b7cff, #9b6bff) border-box;
      pointer-events: none;
      z-index: 99999;
      opacity: 0.7;
      transition: opacity 0.3s ease,
                  box-shadow 0.3s ease;
      will-change: transform;

      &.active {
        opacity: 1;
        box-shadow: 0 0 20px rgba(91, 124, 255, 0.25),
                    0 0 40px rgba(155, 107, 255, 0.12);
      }
    }
  `]
})
export class CustomCursorComponent implements OnInit, OnDestroy {
  readonly dotX = signal<number>(-100);
  readonly dotY = signal<number>(-100);
  readonly ringX = signal<number>(-100);
  readonly ringY = signal<number>(-100);
  readonly isHovering = signal<boolean>(false);
  readonly isDesktop = signal<boolean>(false);

  private targetX = -100;
  private targetY = -100;
  private currentRingX = -100;
  private currentRingY = -100;
  private animFrameId?: number;

  ngOnInit(): void {
    if (typeof window === 'undefined') return;

    // Detect touch / coarse pointer — skip on mobile
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (isCoarse) return;

    this.isDesktop.set(true);

    // Add cursor:none class to body
    document.body.classList.add('custom-cursor-active');
    document.body.style.cursor = 'none';

    const render = () => {
      // Lerp 0.15 for smooth ring follow
      this.currentRingX += (this.targetX - this.currentRingX) * 0.15;
      this.currentRingY += (this.targetY - this.currentRingY) * 0.15;
      this.ringX.set(Math.round(this.currentRingX * 10) / 10);
      this.ringY.set(Math.round(this.currentRingY * 10) / 10);

      this.animFrameId = requestAnimationFrame(render);
    };
    this.animFrameId = requestAnimationFrame(render);
  }

  ngOnDestroy(): void {
    if (this.animFrameId && typeof window !== 'undefined') {
      cancelAnimationFrame(this.animFrameId);
    }
    if (typeof document !== 'undefined') {
      document.body.classList.remove('custom-cursor-active');
      document.body.style.cursor = '';
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (!this.isDesktop()) return;
    this.targetX = e.clientX;
    this.targetY = e.clientY;
    this.dotX.set(e.clientX);
    this.dotY.set(e.clientY);

    const target = e.target as HTMLElement | null;
    if (target && target.closest('a, button, [role="button"], input, textarea, .interactive')) {
      this.isHovering.set(true);
    } else {
      this.isHovering.set(false);
    }
  }
}

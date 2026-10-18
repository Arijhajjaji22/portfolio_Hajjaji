import { Component, signal, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-loader',
  standalone: true,
  template: `
    @if (isVisible()) {
      <div class="loader-overlay" [class.fade-out]="isFading()">
        <div class="loader-content">
          <!-- Monogram "AH" SVG with stroke draw then gradient fill -->
          <svg class="loader-svg" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#5b7cff" />
                <stop offset="100%" stop-color="#9b6bff" />
              </linearGradient>
            </defs>
            <!-- A -->
            <path class="draw-path"
              d="M30 100 L60 20 L90 100"
              stroke="url(#loaderGrad)" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round" />
            <path class="draw-path cross"
              d="M42 72 H78"
              stroke="url(#loaderGrad)" stroke-width="2.5"
              stroke-linecap="round" />
            <!-- H -->
            <path class="draw-path"
              d="M115 20 V100"
              stroke="url(#loaderGrad)" stroke-width="2.5"
              stroke-linecap="round" />
            <path class="draw-path cross"
              d="M115 60 H165"
              stroke="url(#loaderGrad)" stroke-width="2.5"
              stroke-linecap="round" />
            <path class="draw-path"
              d="M165 20 V100"
              stroke="url(#loaderGrad)" stroke-width="2.5"
              stroke-linecap="round" />
          </svg>

          <!-- Gradient fill text that appears after stroke draw -->
          <span class="loader-monogram">AH</span>

          <!-- Loading bar -->
          <div class="loader-bar-track">
            <div class="loader-bar-fill"></div>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .loader-overlay {
      position: fixed;
      inset: 0;
      background-color: var(--bg);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      pointer-events: all;

      &.fade-out {
        opacity: 0;
        transform: translateY(-100%);
        pointer-events: none;
      }
    }

    .loader-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.2rem;
    }

    .loader-svg {
      width: 140px;
      height: 84px;
      overflow: visible;
      filter: drop-shadow(0 0 18px rgba(91, 124, 255, 0.35));
    }

    .draw-path {
      stroke-dasharray: 220;
      stroke-dashoffset: 220;
      animation: drawStroke 0.9s cubic-bezier(0.65, 0, 0.35, 1) forwards;

      &.cross {
        stroke-dasharray: 80;
        stroke-dashoffset: 80;
        animation-delay: 0.3s;
      }
    }

    .loader-monogram {
      font-family: var(--font-head);
      font-size: 0;
      font-weight: 700;
      letter-spacing: 0.08em;
      background: var(--grad-bv);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      opacity: 0;
      animation: fadeMonogram 0.5s ease forwards;
      animation-delay: 0.85s;
      position: absolute;
    }

    .loader-bar-track {
      width: 120px;
      height: 2px;
      background: rgba(255, 255, 255, 0.06);
      border-radius: 2px;
      overflow: hidden;
    }

    .loader-bar-fill {
      height: 100%;
      width: 0%;
      background: var(--grad-bv);
      border-radius: 2px;
      animation: fillBar 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      animation-delay: 0.15s;
    }

    @keyframes drawStroke {
      to {
        stroke-dashoffset: 0;
      }
    }

    @keyframes fadeMonogram {
      to {
        font-size: 1.5rem;
        opacity: 1;
      }
    }

    @keyframes fillBar {
      to {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .loader-overlay {
        transition: opacity 0.01ms !important;
        transform: none !important;
      }
      .draw-path, .loader-monogram, .loader-bar-fill {
        animation-duration: 0.01ms !important;
        animation-delay: 0ms !important;
      }
    }
  `]
})
export class PageLoaderComponent implements OnInit {
  readonly isVisible = signal<boolean>(true);
  readonly isFading = signal<boolean>(false);

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const fadeDelay = reduced ? 200 : 1800;

      setTimeout(() => {
        this.isFading.set(true);
        setTimeout(() => {
          this.isVisible.set(false);
        }, reduced ? 10 : 500);
      }, fadeDelay);
    }
  }
}

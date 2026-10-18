import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Lenis from 'lenis';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PageLoaderComponent } from './shared/components/page-loader/page-loader.component';
import { CustomCursorComponent } from './shared/components/custom-cursor/custom-cursor.component';
import { AuroraCanvasComponent } from './shared/components/network-canvas/network-canvas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    PageLoaderComponent,
    CustomCursorComponent,
    AuroraCanvasComponent
  ],
  template: `
    <!-- 1. Intro Page Loader -->
    <app-page-loader />

    <!-- 2. Trailing Dot & Ring Custom Cursor -->
    <app-custom-cursor />

    <!-- 3. Fixed Smooth Aurora Background Canvas -->
    <app-aurora-canvas />

    <!-- 4. Floating Pill Glass Navbar -->
    <app-navbar />

    <!-- 5. Main Route Viewport -->
    <main id="main-content">
      <router-outlet />
    </main>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      position: relative;
      background-color: var(--bg);
    }

    #main-content {
      position: relative;
      z-index: 1;
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  private lenis?: Lenis;
  private animId?: number;

  ngOnInit(): void {
    if (typeof window === 'undefined') return;

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isReduced) {
      this.initLenis();
    }
  }

  ngOnDestroy(): void {
    if (this.lenis) {
      this.lenis.destroy();
    }
    if (this.animId && typeof window !== 'undefined') {
      cancelAnimationFrame(this.animId);
    }
  }

  private initLenis(): void {
    this.lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    const raf = (time: number) => {
      this.lenis?.raf(time);
      this.animId = requestAnimationFrame(raf);
    };
    this.animId = requestAnimationFrame(raf);
  }
}

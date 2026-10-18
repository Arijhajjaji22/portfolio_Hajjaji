import { Injectable, signal, computed, effect } from '@angular/core';

export type AppTheme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'arij_portfolio_theme';
  
  // Angular 19 Reactive Signal for Theme
  readonly currentTheme = signal<AppTheme>(this.getInitialTheme());
  readonly isDark = computed(() => this.currentTheme() === 'dark');

  constructor() {
    // Automatically apply theme changes to <html> attribute
    effect(() => {
      const theme = this.currentTheme();
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(this.THEME_KEY, theme);
      }
    });
  }

  toggleTheme(event?: MouseEvent): void {
    const nextTheme: AppTheme = this.currentTheme() === 'light' ? 'dark' : 'light';

    // Support circular reveal View Transitions API if supported
    if (typeof document !== 'undefined' && 'startViewTransition' in document && event) {
      const x = event.clientX;
      const y = event.clientY;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = (document as any).startViewTransition(() => {
        this.currentTheme.set(nextTheme);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 450,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            pseudoElement: '::view-transition-new(root)'
          }
        );
      });
    } else {
      this.currentTheme.set(nextTheme);
    }
  }

  setTheme(theme: AppTheme): void {
    this.currentTheme.set(theme);
  }

  private getInitialTheme(): AppTheme {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(this.THEME_KEY) as AppTheme | null;
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    }
    return 'dark';
  }
}

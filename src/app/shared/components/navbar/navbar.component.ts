import { Component, inject, signal, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  readonly themeService = inject(ThemeService);
  readonly isMobileMenuOpen = signal<boolean>(false);
  readonly activeSection = signal<string>('hero');
  readonly scrollProgress = signal<number>(0);

  private observer?: IntersectionObserver;

  readonly navLinks: { label: string; section: string }[] = [
    { label: 'About', section: 'about' },
    { label: 'Skills', section: 'skills' },
    { label: 'Projects', section: 'projects' },
    { label: 'Experience', section: 'experience' },
    { label: 'Education', section: 'education' },
    { label: 'Contact', section: 'contact' }
  ];

  ngOnInit(): void {
    if (typeof window === 'undefined') return;

    this.updateScrollProgress();

    // IntersectionObserver to detect active section
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    // Observe after a short delay to ensure DOM is ready
    setTimeout(() => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) this.observer?.observe(el);
      });
    }, 100);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrollProgress();
  }

  private updateScrollProgress(): void {
    if (typeof window === 'undefined') return;
    const doc = document.documentElement;
    const winScroll = window.scrollY || doc.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    if (height > 0) {
      this.scrollProgress.set(Math.min(100, Math.max(0, (winScroll / height) * 100)));
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}

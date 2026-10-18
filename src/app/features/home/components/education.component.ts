import { Component, signal, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  note: string;
  logo: string;
  initials: string;
  active?: boolean;
}

interface Certification {
  title: string;
  issuer: string;
  year: string;
  link?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  template: `
    <section id="education" class="education-section">
      <div class="container">

        <div class="section-head">
          <span class="section-label">FOUNDATIONS</span>
          <h2 class="section-title font-head">
            Education &amp; <span class="grad-text">certifications</span>
          </h2>
          <p class="section-desc font-body">
            Rigorous engineering training combined with continuous professional development in Cloud &amp; AI.
          </p>
        </div>

        <div class="edu-grid">

          <!-- Left Column: Academic Degrees -->
          <div class="degrees-col">
            <h3 class="col-title font-mono">01 // ACADEMIC DEGREES</h3>

            <div class="timeline-track">
              <div class="tl-line"></div>

              @for (edu of educations; track edu.degree; let i = $index) {
                <div class="tl-item edu-card-wrap" #cardEl>
                  <div class="tl-dot"></div>

                  <div class="edu-card glass">

                    <!-- Logo tile -->
                    <div class="logo-tile">
                      @if (!logoErrors().has(i)) {
                        <img
                          [src]="edu.logo"
                          [alt]="edu.initials + ' logo'"
                          loading="lazy"
                          class="logo-img"
                          (error)="onLogoError(i)"
                        />
                      } @else {
                        <span class="logo-initials grad-text">{{ edu.initials }}</span>
                      }
                    </div>

                    <!-- Text content -->
                    <div class="edu-body">

                      <!-- Row 1: date + status chip -->
                      <div class="edu-meta-row">
                        <span class="edu-period font-mono">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          {{ edu.period }}
                        </span>
                        @if (edu.active) {
                          <span class="status-chip">In Progress</span>
                        }
                      </div>

                      <!-- Row 2: degree -->
                      <h4 class="edu-degree font-head">{{ edu.degree }}</h4>

                      <!-- Row 3: school + location -->
                      <div class="edu-school-row">
                        <span class="edu-school font-body">{{ edu.institution }}</span>
                        <span class="edu-loc font-mono">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                          {{ edu.location }}
                        </span>
                      </div>

                      <!-- Row 4: note -->
                      <p class="edu-note font-body">{{ edu.note }}</p>

                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Right Column: Certification Badges -->
          <div class="certs-col">
            <h3 class="col-title font-mono">02 // VERIFIED CREDENTIALS</h3>

            <div class="certs-grid">
              @for (cert of certifications; track cert.title) {
                @if (cert.link) {
                  <a [href]="cert.link" target="_blank" rel="noopener noreferrer" class="cert-card glass cert-link">
                    <div class="cert-icon-wrap">
                      <span class="cert-medal">🏅</span>
                    </div>
                    <div class="cert-info">
                      <h4 class="cert-title font-head">{{ cert.title }}</h4>
                      <div class="cert-meta font-mono">
                        <span class="cert-issuer">{{ cert.issuer }}</span>
                        <span class="sep">·</span>
                        <span class="cert-year">{{ cert.year }}</span>
                      </div>
                    </div>
                    <span class="cert-ext-icon">↗</span>
                  </a>
                } @else {
                  <div class="cert-card glass">
                    <div class="cert-icon-wrap">
                      <span class="cert-medal">🏅</span>
                    </div>
                    <div class="cert-info">
                      <h4 class="cert-title font-head">{{ cert.title }}</h4>
                      <div class="cert-meta font-mono">
                        <span class="cert-issuer">{{ cert.issuer }}</span>
                        <span class="sep">·</span>
                        <span class="cert-year">{{ cert.year }}</span>
                      </div>
                    </div>
                  </div>
                }
              }
            </div>
          </div>

        </div>

      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    /* ─── Scroll-fade animation ───────────────────────────── */
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .edu-card-wrap {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.55s ease, transform 0.55s ease;

      &.visible {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ─── Section shell ───────────────────────────────────── */
    .education-section {
      padding: clamp(4rem, 8vw, 7rem) 0;
      position: relative;
    }

    .section-head {
      margin-bottom: 3rem;
    }

    .section-title {
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 700;
      letter-spacing: -0.03em;
      margin-bottom: 0.5rem;
    }

    .section-desc {
      color: var(--muted);
      font-size: 0.95rem;
      max-width: 600px;
    }

    /* ─── Two-column grid ─────────────────────────────────── */
    .edu-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;

      @media (min-width: 992px) {
        grid-template-columns: 1.1fr 0.9fr;
      }
    }

    .col-title {
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      color: var(--blue);
      margin-bottom: 1.5rem;
    }

    /* ─── Timeline track ──────────────────────────────────── */
    .timeline-track {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding-left: 28px;
    }

    .tl-line {
      position: absolute;
      left: 5px;
      top: 6px;
      bottom: 6px;
      width: 2px;
      background: linear-gradient(180deg, #5b7cff 0%, #9b6bff 55%, #22d3ee 100%);
      box-shadow: 0 0 10px var(--glow-blue);
      border-radius: 2px;
    }

    .tl-item {
      position: relative;
    }

    .tl-dot {
      position: absolute;
      left: -28px;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--blue);
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 0 10px var(--glow-blue), 0 0 20px var(--glow-blue);
      z-index: 2;
    }

    /* ─── Education card ──────────────────────────────────── */
    .edu-card {
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;

      /* Two-column layout on tablet+ */
      @media (min-width: 560px) {
        flex-direction: row;
        align-items: flex-start;
        gap: 20px;
      }

      &:hover {
        transform: translateY(-3px);
        border-color: rgba(91, 124, 255, 0.38);
        box-shadow: 0 12px 36px rgba(0, 0, 0, 0.25);
      }
    }

    /* ─── Logo tile ───────────────────────────────────────── */
    .logo-tile {
      flex-shrink: 0;
      width: 72px;
      height: 72px;
      border-radius: 16px;
      background: #f6f7fb;
      border: 1px solid rgba(255, 255, 255, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      transition: box-shadow 0.28s ease, transform 0.28s ease;
      align-self: flex-start;

      @media (min-width: 560px) {
        width: 88px;
        height: 88px;
        padding: 12px;
      }

      .edu-card:hover & {
        box-shadow: 0 0 0 2px rgba(91, 124, 255, 0.45), 0 8px 24px rgba(91, 124, 255, 0.18);
        transform: translateY(-3px);
      }
    }

    .logo-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .logo-initials {
      font-size: 1.1rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      text-align: center;
      line-height: 1;
    }

    /* ─── Text body ───────────────────────────────────────── */
    .edu-body {
      display: flex;
      flex-direction: column;
      gap: 6px;
      flex: 1;
      min-width: 0;
    }

    .edu-meta-row {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      flex-wrap: wrap;
    }

    .edu-period {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.7rem;
      color: var(--cyan);
      letter-spacing: 0.06em;

      svg { opacity: 0.7; }
    }

    .status-chip {
      font-size: 0.62rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 2px 8px;
      border-radius: 20px;
      background: rgba(91, 124, 255, 0.15);
      border: 1px solid rgba(91, 124, 255, 0.4);
      color: var(--blue);
    }

    .edu-degree {
      font-size: clamp(0.95rem, 2vw, 1.1rem);
      font-weight: 700;
      color: var(--text);
      line-height: 1.3;
      margin: 0;
    }

    .edu-school-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
    }

    .edu-school {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--blue);
    }

    .edu-loc {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 0.68rem;
      color: var(--muted);

      svg { opacity: 0.6; }
    }

    .edu-note {
      font-size: 0.82rem;
      color: var(--muted);
      line-height: 1.55;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* ─── Certifications Grid ─────────────────────────────── */
    .certs-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .cert-card {
      padding: 1.25rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: transform 0.25s ease, border-color 0.25s ease;

      &:hover {
        transform: translateY(-2px);
        border-color: rgba(52, 232, 176, 0.35);
      }
    }

    .cert-link {
      text-decoration: none;
      color: inherit;
      cursor: pointer;

      &:hover {
        border-color: rgba(52, 232, 176, 0.5);
        box-shadow: 0 0 18px rgba(52, 232, 176, 0.12);
      }
    }

    .cert-ext-icon {
      margin-left: auto;
      font-size: 1rem;
      color: var(--cyan);
      opacity: 0.5;
      flex-shrink: 0;
      transition: opacity 0.2s ease, transform 0.2s ease;

      .cert-link:hover & {
        opacity: 1;
        transform: translate(2px, -2px);
      }
    }

    .cert-icon-wrap {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: rgba(52, 232, 176, 0.08);
      border: 1px solid rgba(52, 232, 176, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      flex-shrink: 0;
    }

    .cert-info {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .cert-title {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text);
      line-height: 1.3;
    }

    .cert-meta {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.72rem;
      color: var(--muted);

      .cert-issuer {
        color: var(--mint);
      }
    }
  `]
})
export class EducationComponent implements AfterViewInit {

  readonly logoErrors = signal<Set<number>>(new Set());

  onLogoError(index: number): void {
    this.logoErrors.update(s => new Set([...s, index]));
  }

  @ViewChildren('cardEl') cardElements!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    this.cardElements.forEach((ref, i) => {
      // stagger the transition delay
      ref.nativeElement.style.transitionDelay = `${i * 120}ms`;
      observer.observe(ref.nativeElement);
    });
  }

  readonly educations: Education[] = [
    {
      degree: "Research Master's in Signals, Systems & Data (SSD)",
      institution: "École Nationale d'Ingénieurs de Tunis (ENIT)",
      location: "Tunis, Tunisia",
      period: "2026 – Present",
      note: "Advanced research in intelligent computational systems, data modeling, and mathematical signal processing.",
      logo: "assets/logo-enit.png",
      initials: "ENIT",
      active: true
    },
    {
      degree: "Software Engineering Degree (Cycle Ingénieur)",
      institution: "ESPRIT — École Supérieure Privée d'Ingénierie et de Technologies",
      location: "Tunis, Tunisia",
      period: "2021 – 2024",
      note: "Specialization in enterprise full-stack development, software architecture, and distributed systems.",
      logo: "assets/logo-esprit.png",
      initials: "ESPRIT"
    },
    {
      degree: "Preparatory Cycle MPSI (Maths & Physics)",
      institution: "Université Libre de Tunis (ULT)",
      location: "Tunis, Tunisia",
      period: "2020",
      note: "Intensive mathematical foundations and analytical problem solving.",
      logo: "assets/logo-ult.png",
      initials: "ULT"
    }
  ];

  readonly certifications: Certification[] = [
    {
      title: "DevOps Engineer Professional Training",
      issuer: "Udemy",
      year: "2024"
    },
    {
      title: "Full-Stack Spring & Angular Certification",
      issuer: "CrocoCoder",
      year: "2024",
      link: "https://drive.google.com/file/d/1Z4R1AFbQzGYGuSAlRgqaMeTVLmdxE-fk/view"
    },
    {
      title: "AI Applications for Predictive Maintenance",
      issuer: "ESPRIT",
      year: "2024",
      link: "https://drive.google.com/file/d/1YDb5Vo-LWGmVt-jaIbNRnEnxF_ecwzcc/view"
    },
    {
      title: "AI Applications for Anomaly Detection",
      issuer: "ESPRIT",
      year: "2024",
      link: "https://drive.google.com/file/d/19ROoMFbfwOJuM-21tdXH2cLAxo83Oqea/view"
    }
  ];
}

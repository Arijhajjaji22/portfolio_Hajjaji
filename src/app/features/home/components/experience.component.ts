import { Component } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  techStack: { name: string; iconClass?: string }[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  template: `
    <section id="experience" class="experience-section">
      <div class="container">

        <div class="section-head">
          <span class="section-label">CAREER TIMELINE</span>
          <h2 class="section-title font-head">
            Professional <span class="grad-text">experience</span>
          </h2>
          <p class="section-desc font-body">
            Engineering software solutions in enterprise production and agile product environments.
          </p>
        </div>

        <!-- Glowing Vertical Timeline -->
        <div class="timeline-container">
          <div class="timeline-line"></div>

          @for (exp of experiences; track exp.company; let i = $index) {
            <div class="timeline-row" [class.even]="i % 2 === 1">

              <!-- Central glowing node -->
              <div class="timeline-node">
                <div class="node-dot"></div>
              </div>

              <!-- Experience Card -->
              <div class="experience-card glass">
                <div class="card-meta">
                  <span class="exp-period font-mono">{{ exp.period }}</span>
                  <span class="exp-loc font-mono">{{ exp.location }}</span>
                </div>

                <h3 class="exp-role font-head">{{ exp.role }}</h3>
                <h4 class="exp-company font-head">{{ exp.company }}</h4>

                <p class="exp-desc font-body">{{ exp.description }}</p>

                <div class="exp-stack">
                  @for (t of exp.techStack; track t.name) {
                    <div class="tech-tag font-mono">
                      @if (t.iconClass) {
                        <i [class]="t.iconClass"></i>
                      }
                      <span>{{ t.name }}</span>
                    </div>
                  }
                </div>
              </div>

            </div>
          }
        </div>

      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .experience-section {
      padding: clamp(4rem, 8vw, 7rem) 0;
      position: relative;
    }

    .section-head {
      margin-bottom: 3.5rem;
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

    /* Timeline container */
    .timeline-container {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .timeline-line {
      position: absolute;
      left: 1.5rem;
      top: 1rem;
      bottom: 1rem;
      width: 2px;
      background: linear-gradient(180deg, #5b7cff 0%, #9b6bff 50%, #22d3ee 100%);
      box-shadow: 0 0 12px var(--glow-blue);

      @media (min-width: 768px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .timeline-row {
      position: relative;
      display: flex;
      flex-direction: column;
      padding-left: 3.5rem;

      @media (min-width: 768px) {
        padding-left: 0;
        width: 50%;
        align-self: flex-start;
        padding-right: 3rem;

        &.even {
          align-self: flex-end;
          padding-right: 0;
          padding-left: 3rem;

          .timeline-node {
            /* even: left edge of row = center line → center dot on it */
            left: 0;
            right: auto;
            transform: translateX(-50%);
          }
        }
      }
    }

    /* Central Node */
    .timeline-node {
      position: absolute;
      left: 1.5rem;
      top: 1.75rem;
      transform: translateX(-50%);
      z-index: 2;

      @media (min-width: 768px) {
        /* odd: right edge of row = center line → center dot on it */
        left: auto;
        right: 0;
        transform: translateX(50%);
      }

      .node-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--blue);
        border: 2px solid rgba(255, 255, 255, 0.25);
        box-shadow: 0 0 10px var(--glow-blue), 0 0 20px var(--glow-blue);
      }
    }

    /* Card */
    .experience-card {
      padding: 1.85rem;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

      &:hover {
        transform: translateY(-3px);
        border-color: rgba(91, 124, 255, 0.4);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
      }
    }

    .card-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.5rem;

      .exp-period {
        font-size: 0.72rem;
        color: var(--cyan);
        letter-spacing: 0.05em;
      }

      .exp-loc {
        font-size: 0.7rem;
        color: var(--muted);
      }
    }

    .exp-role {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--text);
      line-height: 1.2;
    }

    .exp-company {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--blue);
      margin-top: -0.25rem;
    }

    .exp-desc {
      font-size: 0.92rem;
      line-height: 1.65;
      color: var(--muted);
    }

    .exp-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.5rem;
      padding-top: 0.85rem;
      border-top: 1px solid var(--border);
    }

    .tech-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.25rem 0.65rem;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.07);
      font-size: 0.72rem;
      color: var(--text);

      i {
        font-size: 0.9rem;
      }
    }
  `]
})
export class ExperienceComponent {
  readonly experiences: Experience[] = [
    {
      role: 'Full Stack Engineer (.NET & Angular)',
      company: 'Hosinox Company',
      location: 'Tunis, Tunisia',
      period: 'Jan 2026 – Jun 2026',
      description: 'Built and improved an internal ERP used to manage daily operations / wrote secure .NET 8 APIs and Angular pages / improved code structure and added tests / used Docker and GitHub Actions to deploy on Azure.',
      techStack: [
        { name: '.NET 8', iconClass: 'devicon-dotnetcore-plain colored' },
        { name: 'C#', iconClass: 'devicon-csharp-plain colored' },
        { name: 'EF Core' },
        { name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain colored' },
        { name: 'SignalR' },
        { name: 'Redis', iconClass: 'devicon-redis-plain colored' },
        { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
        { name: 'GitHub Actions', iconClass: 'devicon-githubactions-plain colored' },
        { name: 'Azure', iconClass: 'devicon-azure-plain colored' }
      ]
    },
    {
      role: 'Final-year Intern (.NET Developer)',
      company: 'Innov-Alliance-Tech',
      location: 'Tunis, Tunisia',
      period: 'Feb 2024 – Sep 2024',
      description: 'Built a recruitment platform to manage applications and hiring steps / live updates with Blazor Server and SignalR / helped set up Jenkins, Docker, unit tests, and Grafana + Prometheus monitoring.',
      techStack: [
        { name: '.NET 8', iconClass: 'devicon-dotnetcore-plain colored' },
        { name: 'Blazor', iconClass: 'devicon-blazor-plain colored' },
        { name: 'EF Core' },
        { name: 'ASP.NET Identity' },
        { name: 'SignalR' },
        { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
        { name: 'xUnit' },
        { name: 'Jenkins', iconClass: 'devicon-jenkins-plain colored' },
        { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
        { name: 'Grafana', iconClass: 'devicon-grafana-plain colored' },
        { name: 'Prometheus', iconClass: 'devicon-prometheus-original colored' }
      ]
    }
  ];
}

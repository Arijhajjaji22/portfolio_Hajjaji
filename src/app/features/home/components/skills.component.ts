import { Component, signal } from '@angular/core';

export type SkillCategory = 'Backend' | 'Frontend' | 'Data' | 'DevOps' | 'Tools';

interface SkillItem {
  name: string;
  iconClass?: string;
  svgIcon?: string;
  usedIn: string;
  tags: SkillCategory[];
}

interface SkillGroup {
  category: string;
  displayTag: string;
  skills: SkillItem[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  template: `
    <section id="skills" class="skills-section">
      <div class="container">

        <div class="skills-header">
          <span class="section-label">TECHNICAL EXPERTISE</span>
          <h2 class="section-title font-head">
            Tools &amp; technologies I work with <span class="grad-text">daily</span>
          </h2>
          <p class="section-desc font-body">
            Hover over any technology to view the associated systems and projects where I implemented it.
          </p>
        </div>

        <!-- Filter Chips Bar -->
        <div class="filter-bar">
          @for (tab of filterTabs; track tab) {
            <button
              type="button"
              class="filter-pill font-mono"
              [class.active]="activeTab() === tab"
              (click)="setFilter(tab)">
              {{ tab }}
            </button>
          }
        </div>

        <!-- 6 Groups Glass Grid -->
        <div class="skills-grid">
          @for (group of skillGroups; track group.category) {
            <div
              class="skill-group-card glass"
              [class.dimmed]="!isGroupActive(group)">

              <div class="group-header">
                <h3 class="group-title font-head">{{ group.category }}</h3>
                <span class="group-tag font-mono">{{ group.displayTag }}</span>
              </div>

              <div class="skills-wrap">
                @for (skill of group.skills; track skill.name) {
                  <div
                    class="skill-chip"
                    [class.highlighted-chip]="activeTab() !== 'All' && isSkillActive(skill)"
                    [class.dimmed-chip]="activeTab() !== 'All' && !isSkillActive(skill)"
                    [title]="'Used in: ' + skill.usedIn">
                    @if (skill.iconClass) {
                      <i [class]="skill.iconClass"></i>
                    } @else if (skill.svgIcon) {
                      <span class="custom-svg-icon" [innerHTML]="skill.svgIcon"></span>
                    }
                    <span class="skill-name">{{ skill.name }}</span>
                    <div class="skill-tooltip font-mono">
                      Used in: {{ skill.usedIn }}
                    </div>
                  </div>
                }
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

    .skills-section {
      padding: clamp(4rem, 8vw, 7rem) 0;
      position: relative;
    }

    .skills-header {
      margin-bottom: 2rem;
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

    /* Filter Chips */
    .filter-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      margin-bottom: 2.5rem;
    }

    .filter-pill {
      padding: 0.4rem 1rem;
      border-radius: 50px;
      font-size: 0.76rem;
      background: var(--glass-bg);
      border: var(--glass-border);
      color: var(--muted);
      cursor: pointer;
      transition: all 0.25s ease;

      &:hover {
        color: var(--text);
        border-color: var(--blue);
      }

      &.active {
        background: var(--grad-bv);
        color: #fff;
        border-color: transparent;
        box-shadow: 0 4px 16px var(--glow-blue);
      }
    }

    /* Skills 6 Group Grid */
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;

      @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .skill-group-card {
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      transition: opacity 0.3s ease, transform 0.25s ease, border-color 0.25s ease;

      &.dimmed {
        opacity: 0.3;
        transform: scale(0.98);
        pointer-events: none;
      }

      &:hover:not(.dimmed) {
        transform: translateY(-3px);
        border-color: rgba(91, 124, 255, 0.3);
        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);
      }
    }

    .group-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.75rem;
    }

    .group-title {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--text);
    }

    .group-tag {
      font-size: 0.65rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--blue);
    }

    .skills-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
    }

    .skill-chip {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 0.8rem;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.07);
      cursor: pointer;
      transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, opacity 0.25s ease;

      i {
        font-size: 1.15rem;
        transition: transform 0.2s ease;
      }

      .custom-svg-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s ease;
      }

      .skill-name {
        font-size: 0.82rem;
        color: var(--text);
        font-weight: 500;
        transition: color 0.2s ease;
      }

      &.dimmed-chip {
        opacity: 0.32;
        filter: grayscale(40%);

        &:hover {
          opacity: 0.85;
          filter: none;
        }
      }

      &.highlighted-chip {
        background: rgba(91, 124, 255, 0.14);
        border-color: rgba(91, 124, 255, 0.55);
        box-shadow: 0 0 14px rgba(91, 124, 255, 0.25);
        transform: translateY(-1px);

        .skill-name {
          color: #fff;
          font-weight: 600;
        }
      }

      &:hover:not(.dimmed-chip) {
        transform: translateY(-2px);
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(91, 124, 255, 0.4);
        box-shadow: 0 4px 14px rgba(91, 124, 255, 0.2);

        i {
          transform: scale(1.15);
        }

        .skill-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
      }
    }

    /* Tooltip */
    .skill-tooltip {
      position: absolute;
      bottom: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%) translateY(4px);
      background: #0d111b;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 6px;
      padding: 0.35rem 0.65rem;
      font-size: 0.68rem;
      color: #34e8b0;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
      transition: all 0.2s ease;
      z-index: 100;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);

      &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 4px solid transparent;
        border-top-color: #0d111b;
      }
    }
  `]
})
export class SkillsComponent {
  readonly filterTabs = ['All', 'Backend', 'Frontend', 'Data', 'DevOps', 'Tools'] as const;
  readonly activeTab = signal<'All' | SkillCategory>('All');

  readonly skillGroups: SkillGroup[] = [
    {
      category: 'Frameworks & Web',
      displayTag: 'Fullstack / Web',
      skills: [
        { name: 'ASP.NET Core', iconClass: 'devicon-dotnetcore-plain colored', usedIn: 'SchemaShift, AI Factory, SMS', tags: ['Backend'] },
        { name: 'Spring Boot', iconClass: 'devicon-spring-plain colored', usedIn: 'Aura, TaskFlow', tags: ['Backend'] },
        { name: 'Spring AI', iconClass: 'devicon-spring-plain colored', usedIn: 'Aura RAG Engine', tags: ['Backend'] },
        { name: 'Blazor', iconClass: 'devicon-blazor-plain colored', usedIn: 'Innov-Alliance Recruitment', tags: ['Frontend', 'Backend'] },
        { name: 'React', iconClass: 'devicon-react-original colored', usedIn: 'TrustCRM Web3', tags: ['Frontend'] },
        { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored', usedIn: 'VS Code Extension, TrustCRM', tags: ['Backend'] }
      ]
    },
    {
      category: 'Languages',
      displayTag: 'Polyglot',
      skills: [
        { name: 'C#', iconClass: 'devicon-csharp-plain colored', usedIn: '.NET 8, Clean Architecture, EF Core', tags: ['Backend'] },
        { name: 'Java', iconClass: 'devicon-java-plain colored', usedIn: 'Spring Boot 3, Microservices', tags: ['Backend'] },
        { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored', usedIn: 'Angular 19, VS Code Extensions', tags: ['Frontend', 'Backend'] },
        { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored', usedIn: 'Razor Apps, React', tags: ['Frontend'] },
        { name: 'Python', iconClass: 'devicon-python-plain colored', usedIn: 'FastAPI, Schema ML Matching', tags: ['Backend', 'Data'] }
      ]
    },
    {
      category: 'Databases & Storage',
      displayTag: 'Databases',
      skills: [
        { name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain colored', usedIn: 'SchemaShift, School Management', tags: ['Data'] },
        { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored', usedIn: 'Aura Vector RAG, TaskFlow', tags: ['Data'] },
        { name: 'MySQL', iconClass: 'devicon-mysql-plain colored', usedIn: 'School Management, Recruitment', tags: ['Data'] },
        { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored', usedIn: 'TrustCRM Deals & Chat', tags: ['Data'] }
      ]
    },
    {
      category: 'DevOps & Cloud',
      displayTag: 'DevOps / Cloud',
      skills: [
        { name: 'Docker', iconClass: 'devicon-docker-plain colored', usedIn: 'All Microservices & CI/CD Pipelines', tags: ['DevOps'] },
        { name: 'GitHub Actions', iconClass: 'devicon-githubactions-plain colored', usedIn: 'Automated Test & Azure Deploy', tags: ['DevOps'] },
        { name: 'Jenkins', iconClass: 'devicon-jenkins-plain colored', usedIn: 'CI/CD Automated Deployment', tags: ['DevOps'] },
        { name: 'SonarQube', iconClass: 'devicon-sonarqube-plain colored', usedIn: 'Continuous Code Quality Analysis', tags: ['DevOps'] },
        { name: 'Azure', iconClass: 'devicon-azure-plain colored', usedIn: 'App Services, Azure OpenAI', tags: ['DevOps'] }
      ]
    },
    {
      category: 'Testing & Quality',
      displayTag: 'QA / Testing',
      skills: [
        { 
          name: 'xUnit', 
          iconClass: 'devicon-dot-net-plain colored',
          usedIn: '.NET Unit & Integration Tests',
          tags: ['Backend']
        },
        { 
          name: 'NUnit', 
          iconClass: 'devicon-csharp-plain colored',
          usedIn: '.NET Test Suites',
          tags: ['Backend']
        },
        { 
          name: 'JUnit', 
          iconClass: 'devicon-junit-plain colored', 
          usedIn: 'Spring Boot REST & Service Tests',
          tags: ['Backend']
        },
        { 
          name: 'Mockito', 
          svgIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5eead4" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 0 6px rgba(94,234,212,0.6));"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`,
          usedIn: 'Spring Mock Service Isolation',
          tags: ['Backend']
        },
        { 
          name: 'Vitest', 
          iconClass: 'devicon-vite-original colored',
          usedIn: 'Angular Component Unit Tests',
          tags: ['Frontend']
        }
      ]
    },
    {
      category: 'Tools & Ecosystem',
      displayTag: 'Workflow',
      skills: [
        { name: 'Git', iconClass: 'devicon-git-plain colored', usedIn: 'Version Control on all projects', tags: ['Tools', 'DevOps'] },
        { name: 'GitHub', iconClass: 'devicon-github-original colored', usedIn: 'Open-source repositories', tags: ['Tools', 'DevOps'] },
        { 
          name: 'Swagger', 
          iconClass: 'devicon-swagger-plain colored', 
          usedIn: 'OpenAPI REST documentation',
          tags: ['Tools', 'Backend']
        },
        { 
          name: 'Postman', 
          iconClass: 'devicon-postman-plain colored', 
          usedIn: 'API Testing & Collections',
          tags: ['Tools', 'Backend']
        },
        { 
          name: 'Jira', 
          iconClass: 'devicon-jira-plain colored', 
          usedIn: 'Agile & Sprint tracking',
          tags: ['Tools']
        }
      ]
    }
  ];

  setFilter(tab: 'All' | SkillCategory): void {
    this.activeTab.set(tab);
  }

  isGroupActive(group: SkillGroup): boolean {
    if (this.activeTab() === 'All') return true;
    return group.skills.some(skill => skill.tags.includes(this.activeTab() as SkillCategory));
  }

  isSkillActive(skill: SkillItem): boolean {
    if (this.activeTab() === 'All') return true;
    return skill.tags.includes(this.activeTab() as SkillCategory);
  }
}

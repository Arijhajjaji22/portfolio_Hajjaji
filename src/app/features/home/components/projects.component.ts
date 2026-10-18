import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS_LIST, Project } from '../../../core/data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects-section">
      <div class="container">

        <div class="projects-heading">
          <span class="section-label">Projects</span>
          <h2 class="section-title font-head">
            Projects I've <span class="grad-text">built</span>
          </h2>
          <p class="section-desc font-body">
            Pick a project to see what I built, the tech behind it, and a simple diagram of how it works.
          </p>
        </div>

        <!-- Filter Chips Bar -->
        <div class="filter-chips">
          @for (tag of filterOptions; track tag) {
            <button
              type="button"
              class="chip-btn font-mono"
              [class.active]="activeFilter() === tag"
              (click)="setFilter(tag)">
              {{ tag }}
            </button>
          }
        </div>

        <!-- Master / Detail Two-Panel Layout -->
        <div class="master-detail-layout">

          <!-- LEFT PANEL: Vertical Project List with Mouse Navigation Controls -->
          <div class="master-column">

            <div class="master-nav-bar glass">
              <div class="nav-counter font-mono">
                <span class="active-idx font-mono">{{ currentIndex() + 1 }}</span>
                <span class="sep">/</span>
                <span class="total-len font-mono">{{ filteredProjects().length }}</span>
                <span class="label font-mono">PROJECTS</span>
              </div>
              <div class="nav-arrows">
                <button
                  type="button"
                  class="nav-arrow-btn"
                  (click)="prevProject()"
                  [disabled]="currentIndex() <= 0"
                  aria-label="Previous project"
                  title="Previous project (Mouse click)">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 15l-6-6-6 6"/></svg>
                </button>
                <button
                  type="button"
                  class="nav-arrow-btn"
                  (click)="nextProject()"
                  [disabled]="currentIndex() >= filteredProjects().length - 1"
                  aria-label="Next project"
                  title="Next project (Mouse click)">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>
            </div>

            <div class="master-panel" role="tablist" aria-label="Project selection">
              @for (p of filteredProjects(); track p.id) {
                <div
                  [id]="'project-item-' + p.id"
                  class="project-item glass"
                  [class.active]="selectedProject().id === p.id"
                  (click)="selectProject(p)"
                  role="tab"
                  [attr.aria-selected]="selectedProject().id === p.id"
                  tabindex="0">

                  <div class="item-meta">
                    <span class="item-num font-mono">{{ p.number }}</span>
                    <span class="status-indicator" [class.in-progress]="p.status === 'In progress'">
                      <span class="status-dot"></span>
                      <span class="status-label font-mono">{{ p.status }}</span>
                    </span>
                  </div>

                  <h3 class="item-name font-head">{{ p.name }}</h3>
                  <p class="item-tagline font-body">{{ p.tagline }}</p>

                  <div class="item-footer">
                    <span class="item-cat font-mono">{{ p.category }}</span>
                    <div class="item-icons">
                      @for (item of p.stack.slice(0, 3); track item.name) {
                        @if (item.iconClass) {
                          <i [class]="item.iconClass" [title]="item.name"></i>
                        }
                      }
                    </div>
                  </div>

                </div>
              }
            </div>

          </div>

          <!-- RIGHT PANEL: Glass Architecture Showcase -->
          <div class="detail-panel glass" role="tabpanel">
            @if (selectedProject(); as p) {
              <div class="detail-inner">

                <!-- Header row: Title + Category + Status + Action Buttons -->
                <div class="detail-header">
                  <div class="title-meta">
                    <div class="badge-row">
                      <span class="detail-cat font-mono">{{ p.category }}</span>
                      <span class="detail-status font-mono" [class.in-progress]="p.status === 'In progress'">
                        {{ p.status }}
                      </span>
                    </div>
                    <h3 class="detail-title font-head">{{ p.name }}</h3>
                    <p class="detail-one-sentence font-body">{{ p.description }}</p>
                  </div>

                  <div class="detail-actions">
                    <a
                      [href]="p.githubUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn-detail-primary">
                      <span>GitHub</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                        <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      </svg>
                    </a>

                    @if (p.liveDemoUrl) {
                      <a
                        [href]="p.liveDemoUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-detail-ghost">
                        <span class="pulse-live-sm"></span>
                        <span>Live demo</span>
                      </a>
                    }
                  </div>
                </div>

                <!-- Section C: What I Built -->
                <div class="detail-section">
                  <h4 class="section-subhead font-mono">01 // WHAT I BUILT</h4>
                  <ul class="built-list">
                    @for (bullet of p.whatIBuilt; track bullet) {
                      <li>
                        <span class="check-icon">✓</span>
                        <span class="bullet-text font-body">{{ bullet }}</span>
                      </li>
                    }
                  </ul>
                </div>

                <!-- Section D: Tech Stack -->
                <div class="detail-section">
                  <h4 class="section-subhead font-mono">02 // TECH STACK</h4>
                  <div class="tech-pills">
                    @for (s of p.stack; track s.name) {
                      <div class="tech-pill">
                        @if (s.iconClass) {
                          <i [class]="s.iconClass"></i>
                        }
                        <span class="pill-name">{{ s.name }}</span>
                      </div>
                    }
                  </div>
                </div>

                <!-- Section E: How It Works (SVG Diagram) -->
                <div class="detail-section">
                  <h4 class="section-subhead font-mono">03 // HOW IT WORKS (ARCHITECTURE)</h4>
                  <div class="blueprint-viewport">
                    <div class="blueprint-window-bar">
                      <span class="dot red"></span>
                      <span class="dot yellow"></span>
                      <span class="dot green"></span>
                      <span class="blueprint-caption font-mono">blueprint // {{ p.id }}.system.svg</span>
                    </div>
                    <div class="blueprint-render" [innerHTML]="p.diagramSvg"></div>
                  </div>
                </div>

                <!-- Section F: What I Learned -->
                <div class="detail-section learned-box">
                  <h4 class="section-subhead font-mono">04 // WHAT I LEARNED</h4>
                  <p class="learned-text font-body">
                    "{{ p.learned }}"
                  </p>
                </div>

                <!-- Footer Navigation: Prev / Next with 1 mouse click -->
                <div class="detail-nav-footer">
                  <button
                    type="button"
                    class="detail-nav-btn prev-btn font-mono"
                    (click)="prevProject()"
                    [disabled]="currentIndex() <= 0"
                    title="Previous project">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    <span>Previous project</span>
                  </button>

                  <span class="detail-nav-info font-mono">
                    {{ currentIndex() + 1 }} / {{ filteredProjects().length }}
                  </span>

                  <button
                    type="button"
                    class="detail-nav-btn next-btn font-mono"
                    (click)="nextProject()"
                    [disabled]="currentIndex() >= filteredProjects().length - 1"
                    title="Next project">
                    <span>Next project</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>

              </div>
            }
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

    .projects-section {
      padding: clamp(4rem, 8vw, 7rem) 0;
      position: relative;
    }

    .projects-heading {
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
      max-width: 650px;
    }

    /* Filter chips */
    .filter-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      margin-bottom: 2.5rem;
    }

    .chip-btn {
      padding: 0.4rem 1rem;
      border-radius: 50px;
      font-size: 0.78rem;
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

    /* Master-Detail Layout */
    .master-detail-layout {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.75rem;

      @media (min-width: 1024px) {
        grid-template-columns: 340px 1fr;
        align-items: start;
      }
    }

    /* Left Panel: Vertical Project Cards & Navigation */
    .master-column {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      min-width: 0;
    }

    .master-nav-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.55rem 0.9rem;
      border-radius: 12px;
      user-select: none;
      -webkit-user-select: none;

      .nav-counter {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.72rem;

        .active-idx {
          color: var(--cyan);
          font-weight: 700;
        }

        .sep {
          color: var(--muted);
          opacity: 0.6;
        }

        .total-len {
          color: var(--text);
        }

        .label {
          color: var(--muted);
          letter-spacing: 0.08em;
          margin-left: 0.25rem;
          font-size: 0.65rem;
        }
      }

      .nav-arrows {
        display: flex;
        align-items: center;
        gap: 0.4rem;
      }

      .nav-arrow-btn {
        width: 28px;
        height: 28px;
        border-radius: 6px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: var(--text);
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          background: rgba(91, 124, 255, 0.2);
          border-color: var(--blue);
          color: #fff;
          transform: translateY(-1px);
        }

        &:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      }
    }

    .master-panel {
      display: flex;
      gap: 1rem;
      overflow-x: auto;
      padding-bottom: 0.5rem;
      scroll-behavior: smooth;
      overscroll-behavior: contain;
      scrollbar-width: thin;
      scrollbar-color: rgba(91, 124, 255, 0.45) rgba(255, 255, 255, 0.02);

      @media (min-width: 1024px) {
        flex-direction: column;
        overflow-x: visible;
        max-height: 760px;
        overflow-y: auto;
        padding-right: 0.45rem;
      }

      &::-webkit-scrollbar {
        width: 7px;
        height: 7px;
      }

      &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.02);
        border-radius: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background: rgba(91, 124, 255, 0.4);
        border-radius: 8px;
        border: 1px solid transparent;
        background-clip: content-box;

        &:hover {
          background: rgba(91, 124, 255, 0.75);
          background-clip: content-box;
        }
      }
    }

    .project-item {
      flex: 0 0 280px;
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

      @media (min-width: 1024px) {
        flex: none;
      }

      &:hover {
        transform: translateX(4px);
        border-color: rgba(91, 124, 255, 0.45);
        background: rgba(255, 255, 255, 0.05);
      }

      &.active {
        border-color: var(--blue);
        background: rgba(91, 124, 255, 0.09);
        box-shadow: 0 0 24px var(--glow-blue), inset 0 0 12px rgba(91, 124, 255, 0.12);
      }
    }

    .item-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .item-num {
        font-size: 0.72rem;
        color: var(--blue);
      }
    }

    .status-indicator {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;

      .status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--muted);
      }

      .status-label {
        font-size: 0.65rem;
        color: var(--muted);
      }

      &.in-progress {
        .status-dot {
          background: var(--cyan);
          box-shadow: 0 0 8px var(--cyan);
        }
        .status-label {
          color: var(--cyan);
        }
      }
    }

    .item-name {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--text);
      line-height: 1.2;
    }

    .item-tagline {
      font-size: 0.8rem;
      color: var(--muted);
      line-height: 1.45;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .item-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: auto;
      padding-top: 0.5rem;
      border-top: 1px solid var(--border);

      .item-cat {
        font-size: 0.68rem;
        color: var(--muted2);
      }

      .item-icons {
        display: flex;
        gap: 0.45rem;

        i {
          font-size: 0.95rem;
        }
      }
    }

    /* Right Panel: Detail Showcase */
    .detail-panel {
      padding: clamp(1.5rem, 3.5vw, 2.5rem);
      position: sticky;
      top: 5rem;
    }

    .detail-inner {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      animation: fadeIn 0.3s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .detail-header {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      @media (min-width: 640px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
      }
    }

    .title-meta {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .badge-row {
      display: flex;
      align-items: center;
      gap: 0.65rem;
    }

    .detail-cat {
      font-size: 0.72rem;
      color: var(--blue);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .detail-status {
      font-size: 0.68rem;
      padding: 0.2rem 0.6rem;
      border-radius: 50px;
      background: var(--panel);
      border: var(--glass-border);
      color: var(--muted);

      &.in-progress {
        border-color: rgba(34, 211, 238, 0.4);
        color: var(--cyan);
        background: rgba(34, 211, 238, 0.08);
      }
    }

    .detail-title {
      font-size: clamp(1.8rem, 3vw, 2.4rem);
      font-weight: 700;
      color: var(--text);
      letter-spacing: -0.03em;
    }

    .detail-one-sentence {
      font-size: 1.02rem;
      color: var(--text);
      line-height: 1.6;
      max-width: 620px;
    }

    .detail-actions {
      display: flex;
      gap: 0.75rem;
      flex-shrink: 0;
    }

    .btn-detail-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.6rem 1.25rem;
      border-radius: 50px;
      background: var(--grad-bv);
      color: #fff;
      font-weight: 600;
      font-size: 0.82rem;
      text-decoration: none;
      box-shadow: 0 4px 16px var(--glow-blue);
      transition: transform 0.2s ease;

      &:hover {
        transform: translateY(-2px);
      }
    }

    .btn-detail-ghost {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.6rem 1.15rem;
      border-radius: 50px;
      background: var(--glass-bg);
      border: 1px solid rgba(52, 232, 176, 0.4);
      color: var(--mint);
      font-weight: 600;
      font-size: 0.82rem;
      text-decoration: none;
      transition: background-color 0.2s ease, transform 0.2s ease;

      &:hover {
        background: rgba(52, 232, 176, 0.1);
        transform: translateY(-2px);
      }
    }

    .pulse-live-sm {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--mint);
      box-shadow: 0 0 8px var(--mint);
      animation: pulse 2s infinite;
    }

    /* Subheads */
    .section-subhead {
      font-size: 0.72rem;
      color: var(--muted);
      letter-spacing: 0.08em;
      margin-bottom: 0.85rem;
    }

    /* What I built */
    .built-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;

      li {
        display: flex;
        align-items: flex-start;
        gap: 0.65rem;

        .check-icon {
          color: var(--mint);
          font-weight: 700;
          font-size: 0.95rem;
          margin-top: 1px;
        }

        .bullet-text {
          font-size: 0.92rem;
          color: var(--muted);
          line-height: 1.55;
        }
      }
    }

    /* Tech Stack Pills */
    .tech-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
    }

    .tech-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.35rem 0.8rem;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.09);
      font-size: 0.82rem;
      color: var(--text);

      i {
        font-size: 1.1rem;
      }
    }

    /* Blueprint Viewport */
    .blueprint-viewport {
      border: 1px solid rgba(91, 124, 255, 0.25);
      border-radius: 14px;
      background: rgba(7, 9, 16, 0.6);
      overflow: hidden;
    }

    .blueprint-window-bar {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.6rem 0.85rem;
      background: rgba(255, 255, 255, 0.03);
      border-bottom: 1px solid var(--border);

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
      .dot.red { background: #ff5f56; }
      .dot.yellow { background: #ffbd2e; }
      .dot.green { background: #27c93f; }

      .blueprint-caption {
        font-size: 0.68rem;
        color: var(--muted);
        margin-left: 0.5rem;
      }
    }

    .blueprint-render {
      padding: 1.25rem;
      display: flex;
      justify-content: center;
    }

    /* Learned Box */
    .learned-box {
      background: rgba(255, 255, 255, 0.02);
      border-left: 3px solid var(--cyan);
      border-radius: 0 12px 12px 0;
      padding: 1rem 1.25rem;

      .learned-text {
        font-size: 0.94rem;
        font-style: italic;
        color: var(--text);
        line-height: 1.6;
      }
    }

    /* Detail Nav Footer */
    .detail-nav-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1.5rem;
      margin-top: 1rem;
      border-top: 1px solid var(--border);

      .detail-nav-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        background: var(--glass-bg);
        border: var(--glass-border);
        color: var(--text);
        font-size: 0.78rem;
        cursor: pointer;
        transition: all 0.2s ease;
        user-select: none;

        &:hover:not(:disabled) {
          background: rgba(91, 124, 255, 0.15);
          border-color: var(--blue);
          color: #fff;
          transform: translateY(-1px);
        }

        &:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        &.next-btn:not(:disabled) {
          border-color: rgba(91, 124, 255, 0.4);
          background: rgba(91, 124, 255, 0.08);
        }
      }

      .detail-nav-info {
        font-size: 0.72rem;
        color: var(--muted);
      }
    }
  `]
})
export class ProjectsComponent {
  readonly filterOptions = ['All', '.NET', 'Angular', 'Spring Boot', 'AI', 'DevOps', 'Blockchain'] as const;
  readonly activeFilter = signal<string>('All');

  readonly projects = PROJECTS_LIST;
  readonly selectedProject = signal<Project>(PROJECTS_LIST[0]);

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') return this.projects;
    return this.projects.filter(p => p.filterTags.includes(filter));
  });

  setFilter(tag: string): void {
    this.activeFilter.set(tag);
    const list = this.filteredProjects();
    if (list.length > 0 && !list.some(p => p.id === this.selectedProject().id)) {
      this.selectedProject.set(list[0]);
    }
  }

  readonly currentIndex = computed(() => {
    const current = this.selectedProject();
    return this.filteredProjects().findIndex(p => p.id === current.id);
  });

  selectProject(p: Project): void {
    this.selectedProject.set(p);
    this.scrollProjectIntoView(p.id);
  }

  prevProject(): void {
    const idx = this.currentIndex();
    const list = this.filteredProjects();
    if (idx > 0) {
      this.selectProject(list[idx - 1]);
    }
  }

  nextProject(): void {
    const idx = this.currentIndex();
    const list = this.filteredProjects();
    if (idx < list.length - 1) {
      this.selectProject(list[idx + 1]);
    }
  }

  private scrollProjectIntoView(id: string): void {
    if (typeof document !== 'undefined') {
      setTimeout(() => {
        const el = document.getElementById('project-item-' + id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        }
      }, 50);
    }
  }
}

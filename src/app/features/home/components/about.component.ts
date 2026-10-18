import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section id="about" class="about-section">
      <div class="container">

        <span class="section-label">ABOUT ME</span>
        <h2 class="section-title font-head">
          Engineering reliable systems with <span class="grad-text">modern precision</span>
        </h2>

        <!-- Bento Grid Layout -->
        <div class="bento-grid">

          <!-- Tile 1: Short Intro Bio (spans 2 cols) -->
          <div class="bento-tile tile-bio glass">
            <div class="tile-header">
              <span class="tile-tag font-mono">01 // PROFILE</span>
            </div>
            <h3 class="tile-title font-head">Arij Hajjaji</h3>
            <p class="tile-desc font-body">
              I am a Software Engineer based in Tunis, actively pursuing a Research Master's Degree in Signals, Systems &amp; Data at ENIT. My core specialty spans the full development cycle: architecting Clean Architecture backend APIs with .NET 8 and Spring Boot, building reactive frontends with Angular 19 signals, and orchestrating containerized cloud environments with Docker.
            </p>
            <div class="tile-subtext">
              <span class="dot-accent"></span>
              <span>Passionate about Artificial Intelligence, Machine Learning, and Deep Learning, with a strong desire to explore innovative AI technologies and their applications in solving real-world problems.</span>
            </div>
          </div>

          <!-- Tile 2: What I Do (1 col) -->
          <div class="bento-tile tile-what glass">
            <div class="tile-header">
              <span class="tile-tag font-mono">02 // DOMAINS</span>
            </div>
            <h4 class="tile-title font-head">What I Build</h4>
            <ul class="domain-list">
              <li>
                <span class="domain-bullet">▸</span>
                <div>
                  <strong>Backend APIs</strong>
                  <p>.NET 8, C#, Clean Architecture, EF Core</p>
                </div>
              </li>
              <li>
                <span class="domain-bullet">▸</span>
                <div>
                  <strong>Frontend Apps</strong>
                  <p>Angular 19, Reactive Signals, TypeScript</p>
                </div>
              </li>
              <li>
                <span class="domain-bullet">▸</span>
                <div>
                  <strong>AI Systems</strong>
                  <p>Semantic Kernel, Multi-agent, RAG, Spring AI</p>
                </div>
              </li>
              <li>
                <span class="domain-bullet">▸</span>
                <div>
                  <strong>DevOps &amp; Cloud</strong>
                  <p>Docker, CI/CD Jenkins, SonarQube, Azure</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Tile 3: Education & Research (1 col) -->
          <div class="bento-tile tile-edu glass">
            <div class="tile-header">
              <span class="tile-tag font-mono">03 // ACADEMIC</span>
            </div>
            <h4 class="tile-title font-head">Education</h4>
            <div class="edu-items">
              <div class="edu-entry">
                <span class="edu-year font-mono">2026 – NOW</span>
                <strong class="edu-degree">Research Master's (SSD)</strong>
                <span class="edu-school">ENIT — École Nationale d'Ingénieurs de Tunis</span>
              </div>
              <div class="edu-entry">
                <span class="edu-year font-mono">2021 – 2024</span>
                <strong class="edu-degree">Engineering Degree in Computer Science</strong>
                <span class="edu-school">ESPRIT Tunis</span>
              </div>
              <div class="edu-entry">
                <span class="edu-year font-mono">2020</span>
                <strong class="edu-degree">Preparatory Cycle MPSI (Maths &amp; Physics)</strong>
                <span class="edu-school">Université Libre de Tunis (ULT)</span>
                <p class="edu-desc font-body">Intensive mathematical foundations and analytical problem solving.</p>
              </div>
            </div>
          </div>

          <!-- Tile 4: Languages (1 col) -->
          <div class="bento-tile tile-lang glass">
            <div class="tile-header">
              <span class="tile-tag font-mono">04 // LANGUAGES</span>
            </div>
            <h4 class="tile-title font-head">Spoken Languages</h4>
            <div class="lang-meters">
              <div class="lang-meter">
                <div class="lang-meta">
                  <span class="lang-name">Arabic</span>
                  <span class="lang-lvl font-mono">Native</span>
                </div>
                <div class="meter-bar"><div class="meter-fill w-100"></div></div>
              </div>
              <div class="lang-meter">
                <div class="lang-meta">
                  <span class="lang-name">French</span>
                  <span class="lang-lvl font-mono">Fluent (B2)</span>
                </div>
                <div class="meter-bar"><div class="meter-fill w-85"></div></div>
              </div>
              <div class="lang-meter">
                <div class="lang-meta">
                  <span class="lang-name">English</span>
                  <span class="lang-lvl font-mono">Professional (B2)</span>
                </div>
                <div class="meter-bar"><div class="meter-fill w-80"></div></div>
              </div>
            </div>
          </div>

          <!-- Tile 5: Currently Exploring (1 col) -->
          <div class="bento-tile tile-now glass">
            <div class="tile-header">
              <span class="tile-tag font-mono">05 // CURRENT STATUS</span>
              <span class="pulse-live"></span>
            </div>
            <h4 class="tile-title font-head">Currently Exploring</h4>
            <p class="now-text font-body">
              Pursuing a Research Master's in Signals, Systems and Data (SSD) at the National Engineering School of Tunis (ENIT). Interested in Artificial Intelligence, Machine Learning, and Deep Learning, with a focus on exploring emerging technologies and their applications in software engineering and data-driven solutions.
            </p>
          </div>

          <!-- Tile 6: Currently Using (spinning tech icons) (spans 1 or 2 cols) -->
          <div class="bento-tile tile-tech glass">
            <div class="tile-header">
              <span class="tile-tag font-mono">06 // ACTIVE STACK</span>
            </div>
            <h4 class="tile-title font-head">Currently Using Daily</h4>
            <div class="tech-icon-carousel">
              <div class="tech-badge">
                <i class="devicon-dotnetcore-plain colored"></i>
                <span class="font-mono">.NET 8</span>
              </div>
              <div class="tech-badge">
                <i class="devicon-spring-plain colored"></i>
                <span class="font-mono">Spring Boot</span>
              </div>
              <div class="tech-badge">
                <i class="devicon-csharp-plain colored"></i>
                <span class="font-mono">C#</span>
              </div>
              <div class="tech-badge">
                <i class="devicon-azure-plain colored"></i>
                <span class="font-mono">Azure</span>
              </div>
              <div class="tech-badge">
                <span class="ai-sparkle">✦</span>
                <span class="font-mono">AI</span>
              </div>
              <div class="tech-badge">
                <i class="devicon-docker-plain colored"></i>
                <span class="font-mono">Docker</span>
              </div>
              <div class="tech-badge">
                <i class="devicon-microsoftsqlserver-plain colored"></i>
                <span class="font-mono">SQL Server</span>
              </div>
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

    .about-section {
      padding: clamp(4rem, 8vw, 7rem) 0;
      position: relative;
    }

    .section-title {
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 700;
      letter-spacing: -0.03em;
      margin-bottom: 2.5rem;
      max-width: 750px;
    }

    /* Bento Grid */
    .bento-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .bento-tile {
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

      &:hover {
        transform: translateY(-3px);
        border-color: rgba(255, 255, 255, 0.18);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
      }
    }

    .tile-bio {
      @media (min-width: 768px) {
        grid-column: span 2;
      }
    }

    .tile-tech {
      @media (min-width: 768px) {
        grid-column: span 2;
      }
      @media (min-width: 1024px) {
        grid-column: span 1;
      }
    }

    .tile-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .tile-tag {
      font-size: 0.68rem;
      letter-spacing: 0.1em;
      color: var(--blue);
    }

    .tile-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text);
      letter-spacing: -0.02em;
    }

    .tile-desc {
      font-size: 0.94rem;
      line-height: 1.7;
      color: var(--muted);
    }

    .tile-subtext {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      color: var(--text);
      margin-top: auto;
      padding-top: 0.75rem;
      border-top: 1px solid var(--border);

      .dot-accent {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--mint);
        box-shadow: 0 0 8px var(--mint);
      }
    }

    /* Domain List */
    .domain-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;

      li {
        display: flex;
        align-items: flex-start;
        gap: 0.65rem;

        .domain-bullet {
          color: var(--blue);
          font-weight: bold;
          margin-top: 2px;
        }

        strong {
          display: block;
          font-size: 0.88rem;
          color: var(--text);
        }

        p {
          font-size: 0.75rem;
          color: var(--muted);
          margin-top: 1px;
        }
      }
    }

    /* Education items */
    .edu-items {
      display: flex;
      flex-direction: column;
      gap: 0.95rem;
    }

    .edu-entry {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;

      .edu-year {
        font-size: 0.68rem;
        color: var(--cyan);
        letter-spacing: 0.05em;
      }

      .edu-degree {
        font-size: 0.86rem;
        color: var(--text);
      }

      .edu-school {
        font-size: 0.74rem;
        color: var(--muted);
      }

      .edu-desc {
        font-size: 0.72rem;
        color: var(--muted);
        line-height: 1.45;
        margin-top: 0.15rem;
        opacity: 0.85;
      }
    }

    /* Spoken Languages */
    .lang-meters {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }

    .lang-meter {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;

      .lang-meta {
        display: flex;
        justify-content: space-between;
        font-size: 0.82rem;

        .lang-name {
          color: var(--text);
          font-weight: 500;
        }

        .lang-lvl {
          font-size: 0.72rem;
          color: var(--muted);
        }
      }

      .meter-bar {
        height: 4px;
        background: rgba(255, 255, 255, 0.06);
        border-radius: 4px;
        overflow: hidden;

        .meter-fill {
          height: 100%;
          background: var(--grad-bv);
          border-radius: 4px;
        }
        .w-100 { width: 100%; }
        .w-90 { width: 90%; }
        .w-85 { width: 85%; }
        .w-80 { width: 80%; }
      }
    }

    /* Now exploring */
    .pulse-live {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--mint);
      box-shadow: 0 0 8px var(--mint);
      animation: pulse 2s infinite;
    }

    .now-text {
      font-size: 0.86rem;
      line-height: 1.65;
      color: var(--muted);
    }

    /* Tech Carousel */
    .tech-icon-carousel {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 0.25rem;
    }

    .tech-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.4rem 0.75rem;
      border-radius: 50px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 0.75rem;
      color: var(--text);
      transition: transform 0.2s ease, border-color 0.2s ease;

      i {
        font-size: 1.1rem;
      }

      .ai-sparkle {
        color: var(--cyan);
        font-size: 0.95rem;
      }

      &:hover {
        transform: translateY(-2px);
        border-color: var(--blue);
      }
    }
  `]
})
export class AboutComponent {}

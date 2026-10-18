import { Component, signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <section id="hero" class="hero-section">
      <div class="container hero-content">

        <!-- Top Badges -->
        <div class="hero-badges">
          <div class="status-pill">
            <span class="pulse-dot" aria-hidden="true"></span>
            <span class="status-text font-mono">OPEN TO OPPORTUNITIES IN TUNISIA &amp; ABROAD</span>
          </div>

          <div class="academic-badge font-mono">
            <span class="sparkle-icon">✦</span>
            <span>Research Master's in Signals, Systems &amp; Data (SSD) | ENIT</span>
          </div>
        </div>

        <!-- Main Hero Grid (Text left, Sleek Code Editor right) -->
        <div class="hero-grid">
          <div class="hero-text-col">
            <!-- Huge Name with Gradient Shine -->
            <h1 class="hero-name font-head">
              <span class="name-first">ARIJ</span>
              <span class="name-last grad-text">HAJJAJI</span>
            </h1>

            <!-- Subtitle -->
            <h2 class="hero-subtitle font-head">
              Software Engineer <span class="sep">|</span> <span class="highlight">.NET &amp; Angular</span>
            </h2>

            <!-- Exact Bio Paragraph -->
            <p class="hero-bio font-body">
              I'm a Software Engineer specializing in .NET and Angular, focused on designing and developing reliable, scalable software solutions. With a strong interest in Artificial Intelligence, Machine Learning, and emerging technologies, I enjoy exploring new ideas and solving technical challenges. Open to new opportunities where I can contribute my skills and grow professionally.
            </p>

            <!-- CTA Buttons -->
            <div class="hero-actions">
              <a href="#projects" class="btn-gradient">
                <span>View my projects</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <a href="/assets/Arij_Hajjaji_CV.pdf" target="_blank" rel="noopener" download="Arij_Hajjaji_CV.pdf" class="btn-glass">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                <span>Download CV</span>
              </a>

              <a href="#contact" class="btn-glass">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>Contact me</span>
              </a>
            </div>
          </div>

          <!-- Right side: Interactive Animated Code Editor (IDE) -->
          <div class="hero-visual-col">
            <div class="code-editor-card glass">
              
              <!-- Editor Header / Window Controls -->
              <div class="editor-header">
                <div class="window-controls">
                  <span class="control-dot close"></span>
                  <span class="control-dot minimize"></span>
                  <span class="control-dot expand"></span>
                </div>

                <div class="editor-tabs">
                  <div class="tab active font-mono">
                    <span class="file-icon ts-icon">TS</span>
                    <span class="tab-name">arij.profile.ts</span>
                  </div>
                  <div class="tab font-mono muted-tab">
                    <span class="file-icon cs-icon">C#</span>
                    <span class="tab-name">Program.cs</span>
                  </div>
                </div>

                <!-- Run / Executing Button -->
                <button type="button" class="run-button font-mono" (click)="toggleRun()">
                  <span class="run-icon">▶</span>
                  <span>{{ isRunning() ? 'Running...' : 'Run' }}</span>
                </button>
              </div>

              <!-- Code Content with Line Numbers & Syntax Highlighting -->
              <div class="editor-body font-mono">
                <div class="line-numbers" aria-hidden="true">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                  <span>11</span>
                  <span>12</span>
                  <span>13</span>
                  <span>14</span>
                  <span>15</span>
                  <span>16</span>
                </div>

                <div class="code-area">
                  <div class="code-line">
                    <span class="keyword">export const</span> <span class="variable">engineer</span>: <span class="type">SoftwareEngineer</span> = &#123;
                  </div>
                  <div class="code-line indent-1">
                    <span class="property">name</span>: <span class="string">"Arij Hajjaji"</span>,
                  </div>
                  <div class="code-line indent-1">
                    <span class="property">role</span>: <span class="string">"Software Engineer"</span>,
                  </div>
                  <div class="code-line indent-1">
                    <span class="property">primaryStack</span>: [<span class="string">".NET 8"</span>, <span class="string">"Angular 19"</span>, <span class="string">"C#"</span>],
                  </div>
                  <div class="code-line indent-1">
                    <span class="property">parcours</span>: &#123;
                  </div>
                  <div class="code-line indent-2">
                    <span class="property">master</span>: <span class="string">"ENIT (SSD)"</span>, <span class="comment">// 2026 – Present</span>
                  </div>
                  <div class="code-line indent-2">
                    <span class="property">degree</span>: <span class="string">"ESPRIT Ingénieur"</span>, <span class="comment">// 2021 – 2024</span>
                  </div>
                  <div class="code-line indent-2">
                    <span class="property">prep</span>: <span class="string">"ULT (MPSI)"</span>
                  </div>
                  <div class="code-line indent-1">
                    &#125;,
                  </div>
                  <div class="code-line indent-1">
                    <span class="property">focusAreas</span>: [
                  </div>
                  <div class="code-line indent-2">
                    <span class="string">"Clean Architecture"</span>,
                  </div>
                  <div class="code-line indent-2">
                    <span class="string">"Intelligence Artificielle"</span>,
                  </div>
                  <div class="code-line indent-2">
                    <span class="string">"Microservices &amp; Docker"</span>
                  </div>
                  <div class="code-line indent-1">
                    ],
                  </div>
                  <div class="code-line indent-1">
                    <span class="property">status</span>: <span class="string-mint">"Open to Opportunities"</span>
                  </div>
                  <div class="code-line">
                    &#125;;<span class="cursor-blink" aria-hidden="true">|</span>
                  </div>
                </div>
              </div>

              <!-- Terminal / Execution Output Drawer -->
              <div class="editor-terminal font-mono">
                <div class="terminal-bar">
                  <span class="status-indicator-dot"></span>
                  <span class="terminal-label">TERMINAL // output</span>
                  <span class="node-ver">Node v20.11 · TypeScript 5.4</span>
                </div>
                <div class="terminal-text">
                  <span class="prompt-arrow">&gt;</span>
                  <span class="out-success">✓ Profile verified:</span>
                  <span class="out-msg">Full-stack .NET &amp; Angular engineer ready for deployment.</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Recruiter Quick Facts Bar -->
        <div class="recruiter-bar glass">
          <div class="fact-item">
            <div class="fact-icon-wrap icon-blue">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <div class="fact-text">
              <span class="fact-label">Role</span>
              <strong class="fact-val">Software Engineer</strong>
            </div>
          </div>

          <div class="fact-item">
            <div class="fact-icon-wrap icon-amber">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <div class="fact-text">
              <span class="fact-label">Main stack</span>
              <strong class="fact-val">.NET 8 + Angular</strong>
            </div>
          </div>

          <div class="fact-item">
            <div class="fact-icon-wrap icon-red">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="fact-text">
              <span class="fact-label">Location</span>
              <strong class="fact-val">Tunis, Tunisia</strong>
            </div>
          </div>

          <div class="fact-item">
            <div class="fact-icon-wrap icon-violet">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div class="fact-text">
              <span class="fact-label">Education</span>
              <strong class="fact-val">ENIT &amp; ESPRIT</strong>
            </div>
          </div>

          <div class="fact-item">
            <div class="fact-icon-wrap icon-cyan">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div class="fact-text">
              <span class="fact-label">Languages</span>
              <strong class="fact-val">AR · FR · EN (B2)</strong>
            </div>
          </div>

          <div class="fact-item highlight-fact">
            <div class="fact-icon-wrap icon-mint">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
            </div>
            <div class="fact-text">
              <span class="fact-label">Availability</span>
              <strong class="fact-val text-mint">Tunisia &amp; abroad</strong>
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

    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: calc(var(--nav-h) + 1.5rem);
      padding-bottom: 3rem;
      position: relative;
    }

    .hero-content {
      display: flex;
      flex-direction: column;
      gap: 2.25rem;
    }

    /* Badges */
    .hero-badges {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.85rem;
    }

    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.35rem 0.9rem;
      border-radius: 50px;
      background: var(--glass-bg);
      border: 1px solid rgba(52, 232, 176, 0.3);
      backdrop-filter: blur(12px);
      box-shadow: 0 0 16px rgba(52, 232, 176, 0.12);

      .pulse-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--mint);
        box-shadow: 0 0 10px var(--mint);
        animation: pulse 2s infinite;
      }

      .status-text {
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        color: var(--mint);
      }
    }

    .academic-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.35rem 0.9rem;
      border-radius: 50px;
      background: var(--glass-bg);
      border: var(--glass-border);
      backdrop-filter: blur(12px);
      font-size: 0.72rem;
      color: var(--muted);
      letter-spacing: 0.03em;

      .sparkle-icon {
        color: var(--cyan);
      }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.85); }
    }

    /* Grid */
    .hero-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.5rem;
      align-items: center;

      @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
      }
    }

    .hero-text-col {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .hero-name {
      font-size: clamp(3rem, 6.5vw, 5.2rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 0.95;
      display: flex;
      flex-direction: column;

      .name-first {
        color: var(--text);
      }

      .name-last {
        display: inline-block;
        background: linear-gradient(135deg, #5b7cff 0%, #9b6bff 50%, #22d3ee 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-size: 200% auto;
        animation: shineSweep 6s ease-in-out infinite alternate;
      }
    }

    @keyframes shineSweep {
      0% { background-position: 0% 50%; }
      100% { background-position: 100% 50%; }
    }

    .hero-subtitle {
      font-size: clamp(1.2rem, 2.2vw, 1.6rem);
      font-weight: 600;
      color: var(--text);
      letter-spacing: -0.02em;

      .sep {
        color: var(--muted2);
        margin: 0 0.35rem;
      }

      .highlight {
        color: var(--blue);
      }
    }

    .hero-bio {
      font-size: clamp(0.92rem, 1.2vw, 1.02rem);
      line-height: 1.7;
      color: var(--muted);
      max-width: 580px;
    }

    /* Actions */
    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.85rem;
      padding-top: 0.35rem;
    }

    .btn-gradient {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border-radius: 50px;
      background: var(--grad-bv);
      color: #fff;
      font-weight: 600;
      font-size: 0.88rem;
      text-decoration: none;
      box-shadow: 0 4px 20px var(--glow-blue);
      transition: transform 0.25s ease, box-shadow 0.25s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 28px var(--glow-blue);
      }
    }

    .btn-glass {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.35rem;
      border-radius: 50px;
      background: var(--glass-bg);
      border: var(--glass-border);
      backdrop-filter: blur(12px);
      color: var(--text);
      font-weight: 500;
      font-size: 0.88rem;
      text-decoration: none;
      transition: border-color 0.2s ease, transform 0.2s ease, background-color 0.2s ease;

      &:hover {
        border-color: var(--blue);
        background-color: var(--panel-hover);
        transform: translateY(-2px);
      }
    }

    /* Code Editor Card */
    .hero-visual-col {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .code-editor-card {
      width: 100%;
      max-width: 480px;
      border-radius: 18px;
      background: rgba(10, 13, 22, 0.75);
      border: 1px solid rgba(91, 124, 255, 0.25);
      box-shadow: 0 20px 48px rgba(0, 0, 0, 0.4), 0 0 24px rgba(91, 124, 255, 0.08);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: border-color 0.3s ease, transform 0.3s ease;

      &:hover {
        border-color: rgba(91, 124, 255, 0.45);
        transform: translateY(-3px);
      }
    }

    .editor-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.65rem 1rem;
      background: rgba(255, 255, 255, 0.03);
      border-bottom: 1px solid var(--border);
    }

    .window-controls {
      display: flex;
      gap: 0.4rem;

      .control-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
      .close { background: #ff5f56; }
      .minimize { background: #ffbd2e; }
      .expand { background: #27c93f; }
    }

    .editor-tabs {
      display: flex;
      gap: 0.35rem;

      .tab {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        padding: 0.25rem 0.65rem;
        border-radius: 6px;
        font-size: 0.7rem;

        &.active {
          background: rgba(255, 255, 255, 0.07);
          color: var(--text);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        &.muted-tab {
          color: var(--muted2);
        }

        .file-icon {
          font-size: 0.6rem;
          font-weight: 700;
          padding: 0.1rem 0.25rem;
          border-radius: 3px;
        }

        .ts-icon {
          background: #3178c6;
          color: #fff;
        }

        .cs-icon {
          background: #512bd4;
          color: #fff;
        }
      }
    }

    .run-button {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.25rem 0.65rem;
      border-radius: 6px;
      background: rgba(52, 232, 176, 0.12);
      border: 1px solid rgba(52, 232, 176, 0.3);
      color: var(--mint);
      font-size: 0.68rem;
      cursor: pointer;
      transition: all 0.2s ease;

      .run-icon {
        font-size: 0.6rem;
      }

      &:hover {
        background: rgba(52, 232, 176, 0.22);
        box-shadow: 0 0 10px rgba(52, 232, 176, 0.25);
      }
    }

    /* Editor Body */
    .editor-body {
      display: flex;
      padding: 1rem 0.75rem;
      font-size: 0.78rem;
      line-height: 1.55;
      background: rgba(7, 9, 16, 0.85);
      overflow-x: auto;
    }

    .line-numbers {
      display: flex;
      flex-direction: column;
      padding-right: 0.85rem;
      border-right: 1px solid rgba(255, 255, 255, 0.06);
      color: var(--muted2);
      user-select: none;
      text-align: right;
      font-size: 0.72rem;
    }

    .code-area {
      padding-left: 0.85rem;
      display: flex;
      flex-direction: column;
      white-space: pre;
    }

    .code-line {
      display: block;
    }

    .indent-1 { padding-left: 1.25rem; }
    .indent-2 { padding-left: 2.25rem; }

    /* Syntax Highlighting */
    .keyword { color: #ff7b72; font-weight: 600; }
    .variable { color: #79c0ff; }
    .type { color: #ffa657; }
    .property { color: #d2a8ff; }
    .string { color: #a5d6ff; }
    .string-mint { color: #34e8b0; font-weight: 600; }
    .comment { color: #6e7681; font-style: italic; }

    .cursor-blink {
      display: inline-block;
      color: var(--cyan);
      font-weight: bold;
      animation: blink 1s step-end infinite;
      margin-left: 2px;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    /* Terminal Drawer */
    .editor-terminal {
      background: rgba(12, 15, 26, 0.95);
      border-top: 1px solid var(--border);
      padding: 0.65rem 1rem;
      font-size: 0.7rem;
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    .terminal-bar {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      color: var(--muted);
      font-size: 0.65rem;

      .status-indicator-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--mint);
        box-shadow: 0 0 6px var(--mint);
      }

      .node-ver {
        margin-left: auto;
        color: var(--muted2);
      }
    }

    .terminal-text {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      color: var(--text);

      .prompt-arrow {
        color: var(--blue);
        font-weight: bold;
      }

      .out-success {
        color: var(--mint);
        font-weight: 600;
      }

      .out-msg {
        color: var(--muted);
      }
    }

    /* Recruiter Quick Facts Bar */
    .recruiter-bar {
      width: 100%;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
      padding: 1.1rem 1.4rem;
      margin-top: 0.5rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(12, 15, 26, 0.65);
      border-radius: 18px;

      @media (min-width: 640px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(6, 1fr);
        gap: 0.6rem;
        padding: 0.9rem 1.25rem;
      }
    }

    .fact-item {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      padding: 0.35rem 0.45rem;
      border-radius: 10px;
      min-width: 0;
      transition: background-color 0.2s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.03);
      }

      .fact-icon-wrap {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: transform 0.2s ease;

        &.icon-blue { background: rgba(91, 124, 255, 0.12); color: #5b7cff; }
        &.icon-amber { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }
        &.icon-red { background: rgba(239, 68, 68, 0.12); color: #ef4444; }
        &.icon-violet { background: rgba(155, 107, 255, 0.12); color: #9b6bff; }
        &.icon-cyan { background: rgba(34, 211, 238, 0.12); color: #22d3ee; }
        &.icon-mint { background: rgba(52, 232, 176, 0.12); color: #34e8b0; }
      }

      &:hover .fact-icon-wrap {
        transform: scale(1.06);
      }

      .fact-text {
        display: flex;
        flex-direction: column;
        line-height: 1.25;

        .fact-label {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .fact-val {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text);
          white-space: nowrap;
        }
      }
    }

    .text-mint {
      color: var(--mint) !important;
    }
  `]
})
export class HeroComponent {
  readonly isRunning = signal<boolean>(false);

  toggleRun(): void {
    this.isRunning.set(true);
    setTimeout(() => {
      this.isRunning.set(false);
    }, 1200);
  }
}

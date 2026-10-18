import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <section id="contact" class="contact-section">
      <div class="container">

        <div class="contact-card glass">
          <span class="section-label">GET IN TOUCH</span>

          <h2 class="contact-heading font-head">
            Let's work <span class="grad-text">together.</span>
          </h2>

          <p class="contact-subhead font-body">
            I am currently open to engineering opportunities in Tunisia and abroad. Whether you have a project to build, a role to discuss, or an engineering challenge to solve, my inbox is open.
          </p>

          <!-- Email with Copy Feedback -->
          <div class="email-action-box">
            <a href="mailto:arijhajjaji2@gmail.com" class="email-address font-head">
              arijhajjaji2&#64;gmail.com
            </a>

            <button
              type="button"
              class="copy-btn font-mono"
              (click)="copyEmail()"
              [attr.aria-label]="copied() ? 'Email copied to clipboard' : 'Copy email address'">
              @if (copied()) {
                <span class="copied-indicator">
                  <span class="check-mark">✓</span> Copied!
                </span>
              } @else {
                <span class="copy-label">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  Copy
                </span>
              }
            </button>
          </div>

          <!-- Glass Social & Direct Buttons -->
          <div class="contact-links">
            <a
              href="https://www.linkedin.com/in/arij-hajjaji"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link-pill font-mono">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Arijhajjaji22"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link-pill font-mono">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="tel:+21651592864"
              class="contact-link-pill font-mono">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+216 51 592 864</span>
            </a>

            <a
              href="/assets/Arij_Hajjaji_CV.pdf"
              target="_blank"
              rel="noopener"
              download="Arij_Hajjaji_CV.pdf"
              class="contact-link-pill font-mono highlight-pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              <span>Download CV</span>
            </a>
          </div>

        </div>

        <!-- Footer signature -->
        <footer class="portfolio-footer font-mono">
          <span>&copy; 2026 Arij Hajjaji. Engineered with Angular 19 signals &amp; Dark Aurora Glass.</span>
        </footer>

      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .contact-section {
      padding: clamp(4rem, 8vw, 8rem) 0 2rem;
      position: relative;
    }

    .contact-card {
      padding: clamp(2rem, 5vw, 4rem);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      max-width: 900px;
      margin: 0 auto;
      border: 1px solid rgba(91, 124, 255, 0.25);
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);
    }

    .contact-heading {
      font-size: clamp(2.2rem, 5vw, 3.8rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.1;
    }

    .contact-subhead {
      font-size: clamp(0.95rem, 1.5vw, 1.1rem);
      color: var(--muted);
      max-width: 620px;
      line-height: 1.65;
    }

    /* Email Box */
    .email-action-box {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 0.85rem;
      padding: 0.75rem 1.25rem;
      border-radius: 50px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 0.5rem;
    }

    .email-address {
      font-size: clamp(1rem, 2vw, 1.35rem);
      font-weight: 600;
      color: var(--text);
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: var(--blue);
      }
    }

    .copy-btn {
      padding: 0.35rem 0.85rem;
      border-radius: 50px;
      background: var(--panel);
      border: 1px solid var(--border);
      color: var(--muted);
      font-size: 0.75rem;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        color: var(--text);
        border-color: var(--blue);
      }

      .copy-label {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
      }

      .copied-indicator {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        color: var(--mint);

        .check-mark {
          font-weight: bold;
        }
      }
    }

    /* Contact Links */
    .contact-links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .contact-link-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.55rem 1.25rem;
      border-radius: 50px;
      background: var(--glass-bg);
      border: var(--glass-border);
      backdrop-filter: blur(12px);
      color: var(--text);
      font-size: 0.82rem;
      text-decoration: none;
      transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

      &:hover {
        transform: translateY(-2px);
        border-color: var(--blue);
        background-color: var(--panel-hover);
      }

      &.highlight-pill {
        border-color: rgba(52, 232, 176, 0.4);
        color: var(--mint);

        &:hover {
          border-color: var(--mint);
          box-shadow: 0 4px 14px var(--glow-mint);
        }
      }
    }

    /* Footer */
    .portfolio-footer {
      text-align: center;
      margin-top: 4rem;
      font-size: 0.72rem;
      color: var(--muted2);
      letter-spacing: 0.04em;
    }
  `]
})
export class ContactComponent {
  readonly copied = signal<boolean>(false);

  copyEmail(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('arijhajjaji2@gmail.com').then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2200);
      });
    }
  }
}

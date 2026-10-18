import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found-container container-editorial">
      <div class="code-box font-mono">
        <span class="prompt">$ GET /lost-destination</span>
        <span class="error">HTTP 404: RESOURCE_UNDEFINED</span>
      </div>

      <h1 class="heading">You've ventured beyond the routing table.</h1>
      <p class="desc">
        The requested endpoint does not correlate to any case study or route in Arij's architecture.
      </p>

      <div class="actions">
        <a routerLink="/" class="btn-editorial-primary">
          <span>← Reconnect to Main Index</span>
        </a>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      min-height: 70vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 4rem 1.5rem;
    }
    .code-box {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      background-color: var(--bg-surface);
      border: 1px solid var(--border-strong);
      padding: 1rem 1.5rem;
      border-radius: var(--radius-md);
      font-size: 0.85rem;
      margin-bottom: 2rem;
      .prompt { color: var(--text-muted); }
      .error { color: var(--accent-signal); font-weight: 600; }
    }
    .heading {
      font-family: var(--font-display);
      font-size: clamp(2rem, 4vw, 3.2rem);
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }
    .desc {
      font-size: 1.1rem;
      color: var(--text-secondary);
      max-width: 520px;
      line-height: 1.6;
      margin-bottom: 2.5rem;
    }
  `]
})
export class NotFoundComponent {}

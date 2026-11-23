import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header">
      <div class="page-shell masthead">
        <a class="wordmark" routerLink="/">
          <span class="wordmark-mark" aria-hidden="true"></span>
          Campus Traces
        </a>
        <nav class="site-nav" aria-label="Main navigation">
          <a
            routerLink="/"
            routerLinkActive="is-active"
            [routerLinkActiveOptions]="{ exact: true }"
            ariaCurrentWhenActive="page"
          >Home</a>
          <a routerLink="/archive" routerLinkActive="is-active" ariaCurrentWhenActive="location">
            Archive
          </a>
        </nav>
      </div>
    </header>
    <main class="page-shell" id="main-content" tabindex="-1">
      <router-outlet />
    </main>
  `,
})
export class App {}

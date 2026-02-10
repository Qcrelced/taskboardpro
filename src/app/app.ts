import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  styles: [`
    nav a.active {
      color: #ff6600;
    }
  `],
  template: `
    <nav style="padding:.5rem; border-bottom:1px solid #ddd;">
      <a routerLink="/" 
         routerLinkActive="active" 
         [routerLinkActiveOptions]="{ exact: true }">
        Accueil
      </a> |
      <a routerLink="/about" routerLinkActive="active">
        À propos
      </a>
    </nav>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}

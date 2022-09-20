import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-nav',
  template: `
    <nav mat-tab-nav-bar [tabPanel]="tabPanel">
      <a mat-tab-link routerLink="/user-list" routerLinkActive="active-link">User list exercise</a>
      <a mat-tab-link routerLink="/another" routerLinkActive="active-link">Another exercise</a>
    </nav>
    <mat-tab-nav-panel #tabPanel>
      <div class="container mt-5">
        <router-outlet></router-outlet>
      </div>
    </mat-tab-nav-panel>
  `,
})
export class TabNavComponent {}

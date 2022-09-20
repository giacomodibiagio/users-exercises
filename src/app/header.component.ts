import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template:`
    <mat-toolbar color="primary">
      <span>Users exercises</span>
    </mat-toolbar>
  `,
})
export class HeaderComponent {

  constructor() { }
}

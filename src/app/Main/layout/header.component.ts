import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../../_services/user-auth.service';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <button (click)="menuToggled.emit(true)" mat-icon-button>
        <mat-icon>menu</mat-icon>
      </button>
      <span class="title" routerLink="/">Dashboard</span>
      <span class="spacer"></span>
      <app-razor-pay></app-razor-pay>
      <span class="welcome-text">Hello {{ setUserName() }}</span>
      <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon>person_pin</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="logout()">
          <span>Logout</span>
        </button>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: [
    `
      .spacer {
        flex: 1 1 auto;
      }

      .title {
        cursor: pointer;
      }

      .welcome-text {
        font-size: smaller;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<boolean>();

  constructor(private userAuthService: UserAuthService, private router: Router) { }
  
  public setUserName() {
    return this.userAuthService.getUserName();
  }
  
  logout(): void {
    console.log('Logged out');
    this.userAuthService.clear();
    this.router.navigate(['/login']);
  }
}

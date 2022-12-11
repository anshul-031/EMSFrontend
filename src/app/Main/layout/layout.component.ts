import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-layout',
  template: `
    <div>
      <app-header (menuToggled)="toggle()"></app-header>

      <mat-drawer-container>
        <mat-drawer mode="side" [opened]="opened">
          <app-menu-item [menu]="menu"></app-menu-item>
        </mat-drawer>

        <mat-drawer-content [class.margin-left]="opened">
          <router-outlet></router-outlet>
        </mat-drawer-content>
      </mat-drawer-container>
    </div>
  `,
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      link: '/dashboard',
      color: '#ff7f0e',
    },
    {
      title: 'Add job offer',
      icon: 'supervised_user_circle',
      color: '#ff7f0e',
      link: '/dashboard/add-job-offer',
      // subMenu: [
      //   {
      //     title: 'Sales',
      //     icon: 'money',
      //     link: '/sales',
      //     color: '#ff7f0e',
      //   },
      //   {
      //     title: 'Customers',
      //     icon: 'people',
      //     color: '#ff7f0e',
      //     link: '/customers',
      //   },
      // ],
    },
  ];
}

import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DashboardPopupComponent } from '../../dialog-modal/dashboard-popup/dashboard-popup.component';
import { UserService } from '../../_services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(public dialog: MatDialog,
    public userService: UserService) {}

  openDialog() {
    const dialogRef = this.dialog.open(DashboardPopupComponent);
  }

}



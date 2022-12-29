import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef } from "@angular/material/dialog";
import { DashboardPopupComponent } from '../../dialog-modal/dashboard-popup/dashboard-popup.component';
import { UserService } from '../../_services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public dialog: MatDialog,
    public userService: UserService) {}

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(DashboardPopupComponent);
  }

}



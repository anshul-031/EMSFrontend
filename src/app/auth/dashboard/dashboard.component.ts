import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog,MatDialogRef } from "@angular/material/dialog";
import { DashboardPopupComponent } from 'src/app/dialog-modal/dashboard-popup/dashboard-popup.component';
import { UserAuthService } from '../../_services/user-auth.service';
import { UserService } from '../../_services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public dialog: MatDialog, private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService) {}

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(DashboardPopupComponent);
  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/']);
  }

}



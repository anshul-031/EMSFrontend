import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../_services/user-auth.service';
import { MatDialog,MatDialogRef } from "@angular/material/dialog";
import { DashboardPopupComponent } from '../../dialog-modal/dashboard-popup/dashboard-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public dialog: MatDialog,private userAuthService: UserAuthService,
    private router: Router,) { }

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

  navigateByRole(role: string) {
    localStorage.setItem("role", JSON.stringify(role))
    this.router.navigateByUrl("/register")
  }

}

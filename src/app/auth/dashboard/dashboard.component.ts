import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog,MatDialogRef } from "@angular/material/dialog";
import { DashboardPopupComponent } from 'src/app/dialog-modal/dashboard-popup/dashboard-popup.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    // const data=localStorage.getItem(JSON.parse(JSON.stringify('res')));
    // console.log(data);
    // if (data == undefined) {
    //   this.router.navigateByUrl('/login');
    // }
  }
  openDialog() {
    const dialogRef = this.dialog.open(DashboardPopupComponent);
  }
}

// @Component({
//   selector: 'app-dashboard-popup',
//   templateUrl: 'dashboard-popup.component.html',
// })
// export class DialogContentExampleDialog {}


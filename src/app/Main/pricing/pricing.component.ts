import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DashboardPopupComponent } from '../../dialog-modal/dashboard-popup/dashboard-popup.component';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(public dialog: MatDialog,) {

  }

  ngOnInit(): void {
  }

  openDialog() {
     this.dialog.open(DashboardPopupComponent);
  }

}

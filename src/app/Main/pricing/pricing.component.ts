import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Meta, Title } from '@angular/platform-browser';
import { DashboardPopupComponent } from '../../dialog-modal/dashboard-popup/dashboard-popup.component';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {

  constructor(public dialog: MatDialog,private metaService: Meta,
		private titleService: Title,) {
      this.addTag();
  }

  openDialog() {
     this.dialog.open(DashboardPopupComponent);
  }

  addTag() {
		this.titleService.setTitle("Pricing | YourEmployeeCheck")
		this.metaService.updateTag({ name: 'description', content: "Pricing | YourEmployeeCheck is an initiative to ease out some of the challenges faced by Employers while hiring a new candidate. It's an online database where Employers can post their employment offers & inform other employers which candidate has been hired by which employer." });
		this.metaService.addTag({ name: 'robots', content: 'index,follow' });
		this.metaService.updateTag({ property: 'og:title', content: 'Pricing | YourEmployeeCheck' });
		this.metaService.updateTag({ property: 'og:url', content: 'https://youremployeecheck.com/developer' });
	}

}

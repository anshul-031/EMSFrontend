import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'app-developer',
	templateUrl: './developer.component.html',
	styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

	constructor(private metaService: Meta,
		private titleService: Title,) {
		this.addTag();
	}

	addTag() {
		this.titleService.setTitle("Developer | YourEmployeeCheck")
		this.metaService.updateTag({ name: 'description', content: "Developer | YourEmployeeCheck is an initiative to ease out some of the challenges faced by Employers while hiring a new candidate. It's an online database where Employers can post their employment offers & inform other employers which candidate has been hired by which employer." });
		this.metaService.addTag({ name: 'robots', content: 'index,follow' });
		this.metaService.updateTag({ property: 'og:title', content: 'Developer | YourEmployeeCheck' });
		this.metaService.updateTag({ property: 'og:url', content: 'https://youremployeecheck.com/developer' });
	}

}

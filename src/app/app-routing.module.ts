import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { ForgetComponent } from './auth/forget/forget.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { DeveloperComponent } from './Main/developer/developer.component';
import { PricingComponent } from './Main/pricing/pricing.component';
import { AuthGuard } from './_auth/auth.guard.service';
import { LayoutComponent } from './Main/layout/layout.component'
import { AddJobOfferComponent } from './Main/add-job-offer/add-job-offer.component';
import { SearchJobDashboardComponent } from './Main/search-job-dashboard/search-job-dashboard.component';

const routes: Routes = [
	{
		path: "register", component: RegisterComponent, data: {
			seo: {
				title: 'Register | YourEmployeeCheck',
				metaTags: [
					{ name: 'description', content: "Register | YourEmployeeCheck is an initiative to ease out some of the challenges faced by Employers while hiring a new candidate. It's an online database where Employers can post their employment offers & inform other employers which candidate has been hired by which employer." },
					{ property: 'og:title', content: 'Register | YourEmployeeCheck' },
					{ proprety: 'og:description', content: "Register | YourEmployeeCheck is an initiative to ease out some of the challenges faced by Employers while hiring a new candidate. It's an online database where Employers can post their employment offers & inform other employers which candidate has been hired by which employer." },
					{ property: 'og:url', content: 'https://youremployeecheck.com/register' },
				]
			}
		}
	},
	{
		path: "login", component: LoginComponent, data: {
			seo: {
				title: 'Login | YourEmployeeCheck',
				metaTags: [
					{ name: 'description', content: "Login | YourEmployeeCheck is an initiative to ease out some of the challenges faced by Employers while hiring a new candidate. It's an online database where Employers can post their employment offers & inform other employers which candidate has been hired by which employer." },
					{ property: 'og:title', content: 'Login | YourEmployeeCheck' },
					{ proprety: 'og:description', content: "Login | YourEmployeeCheck is an initiative to ease out some of the challenges faced by Employers while hiring a new candidate. It's an online database where Employers can post their employment offers & inform other employers which candidate has been hired by which employer." },
					{ property: 'og:url', content: 'https://youremployeecheck.com/login' },
				]
			}
		}
	},
	{ path: "", component: DashboardComponent },
	{ path: "forget", component: ForgetComponent },
	{ path: "reset/:id", component: ResetComponent },
	{
		path: "pricing", component: PricingComponent, data: {
			seo: {
				title: 'Pricing | YourEmployeeCheck',
				metaTags: [
					{ name: 'description', content: "Pricing | YourEmployeeCheck is an initiative to ease out some of the challenges faced by Employers while hiring a new candidate. It's an online database where Employers can post their employment offers & inform other employers which candidate has been hired by which employer." },
					{ property: 'og:title', content: 'Pricing | YourEmployeeCheck' },
					{ proprety: 'og:description', content: "Pricing | YourEmployeeCheck is an initiative to ease out some of the challenges faced by Employers while hiring a new candidate. It's an online database where Employers can post their employment offers & inform other employers which candidate has been hired by which employer." },
					{ property: 'og:url', content: 'https://youremployeecheck.com/pricing' },
				]
			}
		}
	},
	{
		path: "developer", component: DeveloperComponent, data: {
			seo: {
				title: 'Developer | YourEmployeeCheck',
				metaTags: [
					{ name: 'description', content: "Developer | YourEmployeeCheck is an initiative to ease out some of the challenges faced by Employers while hiring a new candidate. It's an online database where Employers can post their employment offers & inform other employers which candidate has been hired by which employer." },
					{ property: 'og:title', content: 'Developer | YourEmployeeCheck' },
					{ proprety: 'og:description', content: "Developer | YourEmployeeCheck is an initiative to ease out some of the challenges faced by Employers while hiring a new candidate. It's an online database where Employers can post their employment offers & inform other employers which candidate has been hired by which employer." },
					{ property: 'og:url', content: 'https://youremployeecheck.com/developer' },
				]
			}
		}
	},
	{ path: 'forbidden', component: ForbiddenComponent },
	{
		path: 'dashboard',
		component: LayoutComponent,
		children: [
			{
				path: '',
				component: SearchJobDashboardComponent,
				canActivate: [AuthGuard], data: { roles: ['EMPLOYER', 'EMPLOYER_UNPAID', "EMPLOYEE_UNPAID", "EMPLOYEE"] },
			},
			{
				path: 'reserve-candidate',
				component: AddJobOfferComponent,
				canActivate: [AuthGuard], data: { roles: ['EMPLOYER', 'EMPLOYER_UNPAID', 'EMPLOYEE_UNPAID'] },
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

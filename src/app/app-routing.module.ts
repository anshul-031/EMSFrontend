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
	{ path: "register", component: RegisterComponent },
	{ path: "login", component: LoginComponent },
	{ path: "", component: DashboardComponent },
	{ path: "forget", component: ForgetComponent },
	{ path: "reset/:id", component: ResetComponent },
	{ path: "pricing", component: PricingComponent },
	{ path: "developer", component: DeveloperComponent, canActivate:[AuthGuard], data:{roles:['ADMIN']} },
	{ path: 'forbidden', component: ForbiddenComponent },
	{
		path: 'dashboard',
		component: LayoutComponent,
		children: [
		  {
			path: '',
			component: SearchJobDashboardComponent,
			canActivate:[AuthGuard], data:{roles:['EMPLOYER', 'EMPLOYER_UNPAID']},
		  },
		  {
			path: 'add-job-offer',
			component: AddJobOfferComponent,
			canActivate:[AuthGuard], data:{roles:['EMPLOYER']},
		  }
		]
	  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { ForgetComponent } from './auth/forget/forget.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetComponent } from './auth/reset/reset.component';
import { DeveloperComponent } from './Main/developer/developer.component';
import { PricingComponent } from './Main/pricing/pricing.component';

const routes: Routes = [
	{ path: "register", component: RegisterComponent },
	{ path: "login", component: LoginComponent },
	{ path: "", component: DashboardComponent },
	{ path: "forget", component: ForgetComponent },
	{ path: "reset/:id", component: ResetComponent },
	{ path: "pricing", component: PricingComponent },
	{ path: "developer", component: DeveloperComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

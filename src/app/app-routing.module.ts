import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { ForgetComponent } from './auth/forget/forget.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { DeveloperComponent } from './Main/developer/developer.component';
import { MainDashboardComponent } from './Main/main-dashboard/main-dashboard.component';
import { PricingComponent } from './Main/pricing/pricing.component';
import { AuthGuard } from './_auth/auth.guard.service';

const routes: Routes = [
	{ path: "register", component: RegisterComponent },
	{ path: "login", component: LoginComponent },
	{ path: "", component: DashboardComponent },
	{ path: "dashboard", component: MainDashboardComponent, canActivate:[AuthGuard], data:{roles:['EMPLOYER']} },
	{ path: "forget", component: ForgetComponent },
	{ path: "reset/:id", component: ResetComponent },
	{ path: "pricing", component: PricingComponent },
	{ path: "developer", component: DeveloperComponent, canActivate:[AuthGuard], data:{roles:['ADMIN']} },
	{ path: 'forbidden', component: ForbiddenComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

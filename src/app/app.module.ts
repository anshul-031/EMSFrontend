import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ForgetComponent } from './auth/forget/forget.component';
import { ResetComponent } from './auth/reset/reset.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardPopupComponent } from './dialog-modal/dashboard-popup/dashboard-popup.component';
import { PricingComponent } from './Main/pricing/pricing.component';
import { DeveloperComponent } from './Main/developer/developer.component';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { AuthGuard } from './_auth/auth.guard.service';
import { UserService } from './_services/user.service';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LayoutComponent } from './Main/layout/layout.component';
import { HeaderComponent } from './Main/layout/header.component';
import { MenuItemComponent } from './Main/layout/menu-item/menu-item.component';
import { PageHeaderComponent } from './Main/layout/page-header.component';
import { AddJobOfferComponent } from './Main/add-job-offer/add-job-offer.component';
import { SearchJobDashboardComponent } from './Main/search-job-dashboard/search-job-dashboard.component';
import { MaterialModule } from './material.module';
import { JobOfferService } from './_services/job-offer.service';
import { PaymentService } from './_services/payment.service';
import { RazorPayComponent } from './payments/razor-pay/razor-pay.component';
import { NavigationComponent } from './auth/navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ForgetComponent,
    ResetComponent,
    DashboardPopupComponent,
    PricingComponent,
    DeveloperComponent,
    ForbiddenComponent,
    LayoutComponent,
    HeaderComponent,
    MenuItemComponent,
    PageHeaderComponent,
    AddJobOfferComponent,
    SearchJobDashboardComponent,
    RazorPayComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService,
    JobOfferService,
    PaymentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

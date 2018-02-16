import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthServiceImpl } from './auth.service';
import { LogService } from './log.service';
import { CoreServices } from './util/core.service';
import { AuthInterceptor } from './http-interceptor';
import { AuthGuard } from './auth-guard.service';
import { AuthGuard1 } from './auth-guard-1.service';

const routes: Routes = [
  { path : "", redirectTo: 'home', pathMatch: 'full'},
  { path : 'home', loadChildren : 'app/home/home.module#HomeModule', canActivate: [AuthGuard, AuthGuard1] },
  { path : 'login', loadChildren : 'app/login/login.module#LoginModule' , canActivate: [AuthGuard]},
  { path : 'contact-us', loadChildren: 'app/contact-us/contact-us.module#ContactUsModule' , canActivate: [AuthGuard]},
  { path : 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' , canActivate: [AuthGuard]},
  { path : 'registration', loadChildren: 'app/registration/registration.module#RegistrationModule' , canActivate: [AuthGuard]},
  { path : 'resource-not-found', component: PageNotFoundComponent},
  { path : '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthServiceImpl,
    LogService,
    CoreServices,
    AuthGuard, AuthGuard1],
  bootstrap: [AppComponent]
})
export class AppModule { }

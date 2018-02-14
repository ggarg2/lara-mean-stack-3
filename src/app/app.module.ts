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

const routes: Routes = [
  { path : "", redirectTo: 'home', pathMatch: 'full'},
  { path : 'home', loadChildren : 'app/home/home.module#HomeModule'},
  { path : 'login', loadChildren : 'app/login/login.module#LoginModule'},
  { path : 'contact-us', loadChildren: 'app/contact-us/contact-us.module#ContactUsModule'},
  { path : 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
  { path : 'registration', loadChildren: 'app/registration/registration.module#RegistrationModule'},
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
    CoreServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

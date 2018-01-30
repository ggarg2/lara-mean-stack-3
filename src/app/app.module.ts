import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path : "", redirectTo: 'home', pathMatch: 'full'},
  { path : 'home', loadChildren : 'app/home/home.module#HomeModule'},
  { path : 'login', loadChildren : 'app/login/login.module#LoginModule'},
  { path : 'contact-us', loadChildren: 'app/contact-us/contact-us.module#ContactUsModule'},
  { path : 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
  { path : 'registration', loadChildren: 'app/registration/registration.module#RegistrationModule'},
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
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

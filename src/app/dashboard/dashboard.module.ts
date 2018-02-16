import { AuthGuard } from '../auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardService } from './dashboard.service';

const routes: Routes = [
  { 
    path : '', 
    component : DashboardComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full'},
      { path : 'menu', loadChildren: 'app/dashboard/menu/menu.module#MenuModule', canActivateChild: [AuthGuard]},
      { path : 'scheduling', loadChildren: 'app/dashboard/scheduling/scheduling.module#SchedulingModule'}    
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule { }

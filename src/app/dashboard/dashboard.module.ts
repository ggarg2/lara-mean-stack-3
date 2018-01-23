import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { 
    path : '', 
    component : DashboardComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full'},
      { path : 'menu', loadChildren: 'app/dashboard/menu/menu.module#MenuModule'},
      { path : 'scheduling', loadChildren: 'app/dashboard/scheduling/scheduling.module#SchedulingModule'}    
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }

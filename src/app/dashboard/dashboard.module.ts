import { SchedulingComponent } from './scheduling/scheduling.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { SchedulingModule } from './scheduling/scheduling.module';
import { MenuModule } from './menu/menu.module';

const routes: Routes = [
  { 
    path : 'dashboard', 
    component : DashboardComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full'}
      { path : 'menu', component: MenuComponent},
      { path : 'scheduling', component: SchedulingComponent}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    SchedulingModule,
    MenuModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }

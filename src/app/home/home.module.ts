import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home-1', component: HomeComponent},
  { path: 'home-2', component: HomeComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

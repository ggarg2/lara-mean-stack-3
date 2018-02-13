import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { Routes, RouterModule } from '@angular/router';
import { UtilModule } from '../../util/util.module';

const routes: Routes = [
  { path: '', component: MenuComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilModule
  ],
  declarations: [MenuComponent]
})
export class MenuModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { Routes, RouterModule } from '@angular/router';
import { UtilModule } from '../../util/util.module';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: MenuComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    UtilModule
  ],
  declarations: [MenuComponent]
})
export class MenuModule {

    constructor(){
      console.log("Menu Module called !!")
    }

 }

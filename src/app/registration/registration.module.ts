import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';



const routes: Routes = [{
  path: '', component: RegistrationComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule
  ],
  declarations: [RegistrationComponent]
})
export class RegistrationModule { }

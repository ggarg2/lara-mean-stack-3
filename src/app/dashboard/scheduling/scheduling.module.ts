import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingComponent } from './scheduling.component';
import { Routes,RouterModule } from '@angular/router';
import { MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

const routes: Routes = [
  { path: '', component: SchedulingComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  declarations: [SchedulingComponent]
})
export class SchedulingModule { }

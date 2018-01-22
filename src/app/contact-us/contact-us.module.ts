import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactUsComponent],
  exports: [ContactUsComponent]
})
export class ContactUsModule { }

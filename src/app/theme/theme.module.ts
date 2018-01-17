import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from './card/card.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule
  ],
  declarations: [],
  exports: [CardModule]
})
export class ThemeModule { }

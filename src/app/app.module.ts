import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseModule } from './course.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubjectComponent } from './subject/subject.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ThemeModule } from './theme/theme.module';
@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    CourseModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    ThemeModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

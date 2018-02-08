import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ImagePlaceholderComponent } from './image-placeholder/image-placeholder.component';
import { HeaderService } from './header.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthServiceImpl } from '../auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  declarations: [HeaderComponent, FooterComponent, MenuItemComponent, ImagePlaceholderComponent],
  exports: [HeaderComponent, FooterComponent],
  providers : [HeaderService, AuthServiceImpl]
})
export class CoreModule { }

import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  menus: any[];

  logoUrl: string;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    console.log(" ngOnInit() called!")
    this.menus = this.headerService.getMenus();
    this.logoUrl = this.headerService.getLogoUrl();

  }

  testFunction(){
    console.log("testFunction() called")
  }


  ngOnDestroy(): void {
    console.log("ngOnDestroy() called")
  }

}

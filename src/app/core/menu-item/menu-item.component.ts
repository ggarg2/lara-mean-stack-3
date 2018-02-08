import { AuthServiceImpl } from '../../auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { LogService } from '../../log.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  //providers: [ AuthServiceImpl ]
})
export class MenuItemComponent implements OnInit {

  @Input() displayItems: any[];

  isAuth: boolean = false;

  constructor(private authservice: AuthServiceImpl,
  private logService:  LogService
  ) {

    this.authservice.onLoginEvent.subscribe(
      (data: boolean)=>{
        this.isAuth = data;
      },
      error=> {
        console.log("Error")
      }
    )
  }

  ngOnInit() {
    this.isAuthenticated()
  }

  isAuthenticated(){
    this.logService.log("Is Authenticated Called !")
    this.logService.log("isAuthenticated " + this.authservice.isAuthenticated())
    this.isAuth = this.authservice.isAuthenticated();
    //return this.authservice.isAuthenticated();
  }

}

import { AuthServiceImpl } from '../../auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() displayItems: any[];

  isAuth: boolean = false;

  constructor(private authservice : AuthServiceImpl) {

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
    console.log("Is Authenticated Called !")
    this.isAuth = this.authservice.isAuthenticated();
    console.log(this.displayItems)
    for(let item of this.displayItems){

      console.log("displayname ", item.displayname)
      console.log("isAuthRequired ", item.isAuthRequired)


    }
    //return this.authservice.isAuthenticated();
  }

}

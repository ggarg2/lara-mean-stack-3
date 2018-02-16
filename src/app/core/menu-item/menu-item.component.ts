import { AuthServiceImpl } from '../../auth.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LogService } from '../../log.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  //providers: [ AuthServiceImpl ]
})
export class MenuItemComponent implements OnInit {

  @Input() displayItems: any[];

  @Output() onTestEvent: EventEmitter<any> = new EventEmitter();
  @Output() onVoted = new EventEmitter<boolean>();

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

  createEvents(){
    console.log("Inside create events")
    this.onTestEvent.emit({name: 'Mean'})
    this.onVoted.emit(true)

  }

}

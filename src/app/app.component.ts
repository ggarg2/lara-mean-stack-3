import { AuthServiceImpl } from './auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as Firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private authService: AuthServiceImpl){
    let config = {
      apiKey: "AIzaSyAGFyILYXR04xlf1QbrqmtelUi4a2S8u3E",
      authDomain: "my-proj12.firebaseapp.com"
    };
    Firebase.initializeApp(config);    
  }

  ngOnInit(): void {
    this.authService.reloadTokenAndUserDetail()
  }

}
import { Observable, Observer } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { AuthServiceImpl } from '../auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';
import * as Firebase from 'firebase';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();
  
  constructor(private authService : AuthServiceImpl, private router: Router){
    
  } 

  ngOnInit() {
    this.authService.logout()
  }

  loginWithUsernameAndPassword(email, password){
    this.authService.userSignIn(email, password).subscribe(
      data=>{
        console.log(data)
        this.storeUserInfoSubscriber(data);
        console.log("loginWithUsernameAndPassword ends")
        this.router.navigate(['home'])
      },
      error=>{
        console.log(error.msg)
      }
    )
  }

  storeInfoObservable(user: Firebase.User) : Observable<any>{
    return Observable.create( (observer: Observer<any>) =>{
      setTimeout( () =>{
        observer.next(user)
      }, 5000) 
      
    })
  }

  storeUserInfoSubscriber(user: Firebase.User){
    console.log("storeUserInfoSubscriber starts")
    this.storeInfoObservable(user).subscribe(
      data =>{
        console.log("storeUserInfoSubscriber data")
        this.authService.inserUserInfo(data)
        this.authService.onLoginEvent.emit(true)
        console.log("storeUserInfoSubscriber ends")
      },
      error =>{
        console.log("While subscribing user info")
      }
    )
  }

  resetForm(myForm: NgForm){
    console.log("Reset Form")
    myForm.reset();
  }

}

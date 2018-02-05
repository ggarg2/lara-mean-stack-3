import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService, AuthServiceImpl } from '../auth.service';
import { UserModel } from '../models/user.model';
import * as Firebase from 'firebase';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

  user: UserModel = new UserModel();

  address1: string;
  address2: string;
  modelChanged: Subject<{key, value}> = new Subject<{key, value}>();

  data1 :{ address1, address2 } = { address1 : '', address2: ''};


  // constructor(private authService : AuthServiceImpl, private router: Router){
  // } 

  constructor(private authService : AuthServiceImpl, private router: Router){
    this.modelChanged
    .debounceTime(1000)     // wait 300ms after the last event before emitting last event
    .distinctUntilChanged() // only emit if value is different from previous value
    .subscribe(data => {
      console.log("This.address ", this.address1)
      console.log("address ", data.key)
        console.log("old ",this.data1)
        this.data1[data.key] = data.value;
        console.log("new ",this.data1)   
      });
  } 

  changed(value: string, key) {
    console.log("Hello Changed")
    this.modelChanged.next({key: key, value: value});
  }

  validateCredentials(email, password){
    this.validate(email, password)
    .then((response)=>{
      console.log(response)
      this.signUpWithEmailAndPassword(email, password)
    })
    .catch((error)=>{console.error(error)})
  }

  private validate(email, password) : Promise<any>{
    console.log("Inside validate ()")    
    return new Promise<any>(
      (resolve, reject) =>{
        console.log("Inside call back")
        if(email == "abc@abc.com"){
          console.error("Email id is already availale in DB")
          reject("Email id is already availale in DB")
        }else{
          console.log("User can perform login operation")
          resolve("User can perform login operation")
        }

      }
    )

  }

  signUpWithEmailAndPassword(email, password){
    console.log("email is ",email)
    console.log("password is ",password)
    this.authService.userSignup(email, password).subscribe(
      (response: Firebase.User) =>{
        console.log(response)
        let currentUser : Firebase.User = Firebase.auth().currentUser;
        console.log("urrent user is ", currentUser.email)
        console.log("urrent user is ", currentUser.displayName)
        alert("User is registered successfully")

        //Navigate to login page
        this.router.navigate(['login'])

  
        currentUser.getIdToken(true).then( (token: string) => {
            console.log("TOken is ", token )
        }, (error : any) =>{
            console.log(error)
        } )
  
        console.log("we got google firebase auth response")
      },

      error =>{
        console.log(error.message)
        alert(error.message)
      }

    )
  }

  // signUpWithEmailAndPassword(email, password){
  //   console.log("email is ",email)
  //   console.log("password is ",password)
  //   this.authService.userSignup(email, password).then(function(response: Firebase.User){
  //     console.log(response)
  //     let currentUser : Firebase.User = Firebase.auth().currentUser;
  //     console.log("urrent user is ", currentUser.email)
  //     console.log("urrent user is ", currentUser.displayName)
  //     alert("User is registered successfully")

  //     currentUser.getIdToken(true).then( (token: string) => {
  //         console.log("TOken is ", token )
  //     }, (error : any) =>{
  //         console.log(error)
  //     } )

  //     console.log("we got google firebase auth response")


  // }).catch(function(error){
  //     console.log(error.message)
  //     alert(error.message)
  // })
  // }
    
  signInWithGoogle(){
      
  }

  resetForm(myForm: NgForm){
    console.log("Reset Form")
    myForm.reset();
  }
}

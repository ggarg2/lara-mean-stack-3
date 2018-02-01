import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService, AuthServiceImpl } from '../auth.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

  user: UserModel = new UserModel();

  constructor(private authService : AuthServiceImpl){
    
  } 

  private validateCredentials(email, password){
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
    this.authService.userSignup(email, password)
  }
    
  signInWithGoogle(){
      
  }
}

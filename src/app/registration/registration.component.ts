import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

  user: UserModel = new UserModel();

  constructor(private authService : AuthService){
    
  }

  signUpWithEmailAndPassword(email, password){
    console.log("email is ",email)
    console.log("password is ",password)
    this.authService.signUpWithEmailAndPassword(email, password)
  }
    
  signInWithGoogle(){
      
  }
}

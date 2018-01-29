import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @ViewChild("myForm") myForm : NgForm;

  cityName: string = 'Delhi';

  constructor() { }

  ngOnInit() {
  }

  // submitForm(form : NgForm){
  //   console.log(form);
  // }

  submitForm(){
    console.log(this.myForm)
  }

}

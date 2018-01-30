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

  address : string = "Test Address";

  constructor() { }

  ngOnInit() {

    //This code will give error

    // this.myForm.setValue({
    //   'cityName': 'Bangalore',
    //   'address': 'Test Address 1',
    //   'userData' : {
    //     'username':  'Test Username',
    //     'emailId':  'Test EmailId'
    //   }
    // })
  }

  setForm(){
    this.myForm.setValue({
      'cityName': 'Bangalore',
      'address': 'Test Address 1',
      'userData' : {
        'username':  'Test Username',
        'emailId':  'Test EmailId'
      }
    })
  }

  patchForm(){
    this.myForm.form.patchValue({
      'address': 'Test Address 2'
    })
  }

  resetForm(){
    this.myForm.reset();
  }

  // submitForm(form : NgForm){
  //   console.log(form);
  // }

  submitForm(){
    if(this.myForm.invalid){
      alert("Form is invalid")
    }

    console.log(this.myForm)
  }

}

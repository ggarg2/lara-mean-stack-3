import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {

  schedulingForm: FormGroup;

  reservedNumbers: any[] = ["12345", "9876", "987654321", "1234567890"]

  // user:  any = {
  //   id: 1234,
  //   userName: 'ggarg2',
  //   emailId: 'a@a.com'
  // }

  user:  any = {

  }

  constructor() {

  }

  ngOnInit() {
    if(this.user && this.user.id){
      this.createSchedulingForm(this.user)
    }else{
      this.createSchedulingForm({})
    }

  }

  createSchedulingForm(user){
    this.schedulingForm = new FormGroup({
      'id': new FormControl(user.id),
      'userdata': new FormGroup({
        'username': new FormControl(user.userName,  Validators.required),
        'email' : new FormControl(user.emailId, [ Validators.required, Validators.email ]),
      }),
      'hobbies': new FormArray([]),
      'phoneNumber' : new FormControl(user.phoneNumber, [ Validators.required, this.validatePhoneNumber.bind(this) ])
    })
  }

  submitForm(){
    console.log(this.schedulingForm)
  }

  addHobbies(){
    console.log("add hobbies called")
    let inputFormControl = new FormControl("Test Hobbies", Validators.required);
    (<FormArray>this.schedulingForm.get('hobbies')).push(inputFormControl)
  }

  validatePhoneNumber(control: FormControl) : {[s: string] : boolean}{
    let value = control.value;
    // if(value == 12345){
    //   return { 'phoneNumberAvailability' : true};
    // }

    console.log(this.reservedNumbers)
    console.log(value)
    console.log("this.reservedNumbers.indexOf(value) "+this.reservedNumbers.indexOf(value))

    if(this.reservedNumbers.indexOf(value) > -1){
      return { 'phoneNumberAvailability' : true};
    }

    return null;
  }

}

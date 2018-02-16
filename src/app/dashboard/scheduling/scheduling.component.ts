import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {

  schedulingForm: FormGroup;

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
      'phoneNumber' : new FormControl(user.phoneNumber, [ Validators.required ])
    })
  }

  submitForm(){
    console.log(this.schedulingForm)
  }

}

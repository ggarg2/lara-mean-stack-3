import { Component, ViewEncapsulation } from '@angular/core';
import { CustomerModel } from './customer.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {

  isJavaLearningCenter: boolean = true;

  name: string = undefined;

  customers : CustomerModel[] = [];

  constructor(){
  }

  customer: {} = {
    id: 1234,
    name : "Gaurav"
  }

  toggle(){
    this.isJavaLearningCenter = !this.isJavaLearningCenter;
  }

  isCustomersAvailable(){
    console.log("is customers available called !")
    return true;
  }

}

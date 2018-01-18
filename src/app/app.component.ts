import { Component, ViewEncapsulation } from '@angular/core';
import { CustomerModel } from './customer.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {

  fruits: string[] = ['Apple', 'Litch', 'Watermelon']

  addFruit(fruit){
    this.fruits.push(fruit)
  }

  removeFruit(index){
      console.log(index)
      this.fruits.splice(index, 1)
  }

}

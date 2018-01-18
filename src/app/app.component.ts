import { Component, ViewEncapsulation } from '@angular/core';
import { CustomerModel } from './customer.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {

 name: string = "Hello World"
 address: string = "XYZ"


}

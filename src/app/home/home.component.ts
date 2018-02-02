import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  myFirstSubscription: Subscription;

  ngOnDestroy(): void {
    console.log("Home module noOnDestroy Called!")
    this.myFirstSubscription.unsubscribe();
  }

  constructor() { }

  ngOnInit() {

    let myFirstObservable : Observable<number> = Observable.interval(2000);

    this.myFirstSubscription = myFirstObservable.subscribe(
      (data: number) => {
        console.log("Your normal data is ", data);
      },
      (error)=>{
        console.log("Error is ", error)
      },
      ()=>{
        console.log("Observable is done")
      }

    )

    myFirstObservable.subscribe(
      (data: number) => {
        console.log("Your normal data is ", data);
      },
      (error)=>{
        console.log("Error is ", error)
      },
      ()=>{
        console.log("Observable is done")
      }

    )

    myFirstObservable.subscribe(
      (data: number) => {
        console.log("Your normal data is ", data);
      },
      (error)=>{
        console.log("Error is ", error)
      },
      ()=>{
        console.log("Observable is done")
      }

    )


  }

}

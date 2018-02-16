import { Observer, Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    console.log("Home module noOnDestroy Called!")
  }

  constructor() { }

  ngOnInit() {


    let myFirstObservable : Observable<string> = Observable.create( (observer: Observer<string>) => {

      

      setTimeout( ()=>{
        observer.next("First Next is called")  
      }, 2000)

      setTimeout( ()=>{
        observer.next("Second Next is called")  
      }, 4000)

      setTimeout( ()=>{
        observer.complete()  
      }, 4000)

      setTimeout( ()=>{
        observer.error("First error is called")  
      }, 4000)

      setTimeout( ()=>{
        observer.next("Third Next is called")  
      }, 6000)

      setTimeout( ()=>{
        observer.next("Fourth Next is called")  
      }, 8000)


      setTimeout( ()=>{
        observer.error("Second error is called")  
      }, 12000)

      setTimeout( ()=>{
        observer.complete()  
      }, 5500)
      

    })

    myFirstObservable.subscribe(
      (data: string)=>{
        console.log("Normal Data Handler ", data)
      },

      (error) =>{
        console.log("Error handler is called ", error)
      },

      () => {
        console.log("Process is completed")
      }
    )
    

  }

  parentCalled(value){
    console.log("Inside parent called")
    console.log("value is ", value)
  }

}

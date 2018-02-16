import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Output() onChild1Event: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createEvents(){

    console.log("INside create events")
    this.onChild1Event.emit({name: 'Mean'})

  }

}

import { Component, ViewEncapsulation } from '@angular/core';
import { CustomerModel } from './customer.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {

  course: string = "Java"

  openCourse(course){
    this.course = course;
  }

}


@Component({
  selector: 'java-course',
  template: `
    <h1>This is a Java Course</h1>
  `
})
export class JavaCourse{

}

@Component({
  selector: 'j2ee-course',
  template: `
    <h1>This is a J2EE Course</h1>
  `
})
export class J2EECourse{

}

@Component({
  selector: 'mean-course',
  template: `
    <h1>This is a Mean Course</h1>
  `
})
export class MeanCourse{

}

@Component({
  selector: 'default-course',
  template: `
    <h1>This is a default Course</h1>
  `
})
export class DefaultCourse{

}

import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { FacultyComponent } from './faculty.component';


@NgModule({
    declarations: [CourseComponent, FacultyComponent],
    imports: [],
    exports: [CourseComponent]
})

export class CourseModule{

}

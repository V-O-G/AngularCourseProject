import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CoreModule } from '../core/core.module';
import { CourseHighlightDirective } from './course-list-item/course-highlight.directive';
import { DurationPipe } from './course-list-item/duration.pipe';
import { OrderByDatePipe } from './shared/pipes/order-by-date.pipe';
import { FilterByUserInputPipe } from './shared/pipes/filter-by-user-intup.pipe';
import { CoursesService } from './shared/services/courses.service';
import { AddCourseComponent } from './add-course/add-course.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
  ],
  declarations: [
    CourseListComponent, 
    CourseListItemComponent,
    CourseHighlightDirective,
    DurationPipe,
    OrderByDatePipe,
    FilterByUserInputPipe,
    AddCourseComponent,
  ],
  providers: [
    OrderByDatePipe,
    FilterByUserInputPipe,
    CoursesService,
  ],
  exports: [
    CourseListComponent,
  ]
})
export class CourseListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CoreModule } from '../core/core.module';
import { CourseHighlightDirective } from './course-list-item/course-highlight.directive';
import { DurationPipe } from './course-list-item/duration.pipe';
import { OrderByDatePipe } from './course-list/pipes/order-by-date.pipe';
import { FilterByUserInputPipe } from './course-list/pipes/filter-by-user-intup.pipe';
import { CoursesService } from './courses.service';

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

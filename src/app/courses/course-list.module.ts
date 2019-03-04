import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CoreModule } from '../core/core.module';
import { OrderByDatePipe } from './shared/pipes/order-by-date.pipe';
import { FilterByUserInputPipe } from './shared/pipes/filter-by-user-intup.pipe';
import { CoursesService } from './shared/services/courses.service';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { DurationPipe } from './shared/pipes/duration.pipe';
import { CourseHighlightDirective } from './shared/directives/course-highlight.directive';
import { EntryPageComponent } from './entry-page/entry-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CourseListComponent, 
    CourseListItemComponent,
    CourseHighlightDirective,
    DurationPipe,
    OrderByDatePipe,
    FilterByUserInputPipe,
    AddEditCourseComponent,
    EntryPageComponent,
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

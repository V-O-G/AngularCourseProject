import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { SearchControlComponent } from './search-control/search-control.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CourseListComponent, CourseListItemComponent, SearchControlComponent],
  exports: [
    CourseListComponent,
  ]
})
export class CourseListModule { }

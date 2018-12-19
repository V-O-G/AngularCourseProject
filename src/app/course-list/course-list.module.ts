import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { SearchControlComponent } from '../core/search-control/search-control.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CourseListComponent, 
    CourseListItemComponent, 
    SearchControlComponent
  ],
  exports: [
    CourseListComponent,
  ]
})
export class CourseListModule { }

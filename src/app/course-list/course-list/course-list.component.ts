import { Component, OnInit } from '@angular/core';

import { ICourse } from '../course-list-item.model';
import { FilterByUserInputPipe } from '../pipes/filter-by-user-intup.pipe';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor( 
    private filterByUserInput: FilterByUserInputPipe,
    private coursesService: CoursesService,
  ) { 
  }

  coursesList: ICourse[];

  ngOnInit() {
    this.coursesList = this.coursesService.getCourses();
  }  
  
  onCourseDeleted(courseId: number) {
    this.coursesService.removeCourse(courseId);
    this.coursesList = this.coursesService.getCourses();
  }

  onLoadMore() {
    console.log("load more");
  }

  getUserSearchInput(userSearchInput: string) {
    this.coursesList = this.coursesService.getCourses();
    this.coursesList = this.filterByUserInput.transform(this.coursesList, userSearchInput);
  }

  showAllCourses() {
    this.coursesList = this.coursesService.getCourses();
  }
}

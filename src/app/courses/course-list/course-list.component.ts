import { Component, OnInit, OnChanges } from '@angular/core';

import { ICourse } from '../course-list-item.model';
import { FilterByUserInputPipe } from '../shared/pipes/filter-by-user-intup.pipe';
import { CoursesService } from '../shared/services/courses.service';
import { OrderByDatePipe } from '../shared/pipes/order-by-date.pipe';
import { NewCourseService } from '../../core/shared/services/newCourse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  newCourseActive: boolean = false;

  constructor( 
    private filterByUserInput: FilterByUserInputPipe,
    private orderByDatePipe: OrderByDatePipe,
    private coursesService: CoursesService,
    private newCourseService: NewCourseService,
    private router: Router,
  ) { 
  }

  coursesList: ICourse[];

  ngOnInit() {
    this.coursesList = this.orderByDatePipe.transform(this.coursesService.getCourses());
    this.newCourseService.addNewCourseActive.subscribe(
      (addNewCourseActive: boolean) => {
        this.newCourseActive = addNewCourseActive;
        if(addNewCourseActive) {
          this.router.navigate(['/courses', 'new']);
        }
      }
    );
  }
  
  onCourseDeleted(courseId: number) {
    this.coursesService.removeCourse(courseId);
    this.coursesList = this.orderByDatePipe.transform(this.coursesService.getCourses());
  }

  onLoadMore() {
    console.log("load more");
  }

  getUserSearchInput(userSearchInput: string) {
    this.coursesList = this.coursesService.getCourses();
    this.coursesList = this.filterByUserInput.transform(this.coursesList, userSearchInput);
  }

  showAllCourses(showCourses: boolean) {
    if (showCourses) {
      this.coursesList = this.coursesService.getCourses();
    }
  }
}

import { Component, OnInit, OnChanges } from '@angular/core';

import { ICourse } from '../course-list-item.model';
import { FilterByUserInputPipe } from '../shared/pipes/filter-by-user-intup.pipe';
import { CoursesService } from '../shared/services/courses.service';
import { OrderByDatePipe } from '../shared/pipes/order-by-date.pipe';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  coursesList: ICourse[] = [];
  count: string = '10';
  subscription;

  constructor( 
    private filterByUserInput: FilterByUserInputPipe,
    private orderByDatePipe: OrderByDatePipe,
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
  }

  ngOnInit() {
    this.subscription = this.coursesService.getCourses(this.count)
      .subscribe(
        (courses: ICourse[]) => {
          this.coursesList = this.orderByDatePipe.transform(courses); 
        },
        (error) => console.log(error)
      );
  }
  
  onCourseDeleted(courseId: number) {
    this.coursesService.removeCourse(courseId);
  }

  onLoadMore() {
    this.count = (+this.count + 5).toString();
    this.coursesService.getCourses(this.count)
      .subscribe(
        (courses: ICourse[]) => {
          this.coursesList = this.orderByDatePipe.transform(courses); 
        },
        (error) => console.log(error)
      );
  }

  getUserSearchInput(userSearchInput: string) {
    this.coursesService.getCoursesSearchResult(userSearchInput, this.count)
      .subscribe(
        (courses: ICourse[]) => {
          this.coursesList = this.orderByDatePipe.transform(courses); 
        },
        (error) => console.log(error)
      );
  }

  showAllCourses(showCourses: boolean) {
    if (showCourses) {
      this.coursesService.getCourses(this.count)
      .subscribe(
        (courses: ICourse[]) => {
          this.coursesList = this.orderByDatePipe.transform(courses); 
        },
        (error) => console.log(error)
      );
    }
  }

  onAddCourse() {
    this.router.navigate(['./new'], {relativeTo: this.route});
  }
}

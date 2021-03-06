import { Component, OnInit, OnChanges } from '@angular/core';

import { ICourse } from '../shared/models/course-list-item.model';
import { FilterByUserInputPipe } from '../shared/pipes/filter-by-user-intup.pipe';
import { OrderByDatePipe } from '../shared/pipes/order-by-date.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from '../../reducers';
import * as CoursesActions from '../store/courses.actions';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  coursesList: ICourse[];
  count: string;
  subscription;
  coursesState: Observable<any>;

  constructor( 
    private orderByDatePipe: OrderByDatePipe,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.State>,
  ) { 
  }

  ngOnInit() {
    this.callCourses();
    this.coursesState = this.store.select('courses');
  }

  callCourses() {
    this.store.dispatch(new CoursesActions.GetCourses());
  };

  onLoadMore() {
    this.store.dispatch(new CoursesActions.LoadMore());
    this.callCourses();
  }

  onCourseDeleted(courseId: number) {
    const courseToBeDeleted = confirm("Do you really want to delete this course?");
    if (courseToBeDeleted) {
      this.store.dispatch(new CoursesActions.DeleteCourse(courseId));
    }
  }

  getUserSearchInput(userSearchInput: string) {
    this.store.dispatch(new CoursesActions.GetUserSearch(userSearchInput));
  }

  showAllCourses(showCourses: boolean) {
    if (showCourses) {
      this.callCourses();
    }
  }

  onAddCourse() {
    this.router.navigate(['./new'], {relativeTo: this.route});
  }
}

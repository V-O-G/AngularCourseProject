import { Component, OnInit, OnChanges } from '@angular/core';

import { CourseListItem, ICourse } from '../course-list-item.model';
import { OrderByDatePipe } from './pipes/order-by-date.pipe';
import { filterByUserInputPipe } from './pipes/filter-by-user-intup.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnChanges {
  courses: ICourse[] = [
    {
      id: 1,
      title: 'Video Course 1',
      creationDate: new Date(2020, 0, 1),
      duration: 150,
      description: 'upcoming course',
      topRated: false
    },
    {
      id: 2,
      title: 'Video Course 2',
      creationDate: new Date(2001, 0, 1),
      duration: 150,
      description: 'old course',
      topRated: true
    },  
  ];
  
  coursesOriginal: ICourse[] = this.courses;

  constructor(
    private orderByDate: OrderByDatePipe,
    private filterByUserInput: filterByUserInputPipe,
  ) { 
    console.log('constructor works');
  }

  ngOnInit() {
    console.log('onInit works');
    this.createCourses();
    this.courses = this.orderByDate.transform(this.courses);
  }

  ngOnChanges() {
    console.log('ngOnChanges works');
  }

  createCourses() {
    const courseDescription = 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.';
    for (let i=0; i<5; i++) {
      const courseItem: ICourse = new CourseListItem (
        i,
        `Video Course ${i+3}`,
        Math.random()*100,
        courseDescription
      );

      this.courses.push(courseItem);
    };
  }; 
  
  onCourseDeleted(courseId: number) {
    console.log(courseId);
  }

  onLoadMore() {
    console.log("load more");
  }

  getUserSearchInput(userSearchInput: string) {
    this.courses = this.coursesOriginal;
    this.courses = this.filterByUserInput.transform(this.courses, userSearchInput);
  }

  showAllCourses() {
    this.courses = this.coursesOriginal;
  }
}

import { Component, OnInit, OnChanges } from '@angular/core';

import { CourseListItem, ICourse } from '../course-list-item.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnChanges {
  courses: ICourse[] = [];

  constructor() { 
    console.log('constructor works');
  }

  ngOnInit() {
    console.log('onInit works');
    this.createCourses();
  }

  ngOnChanges() {
    console.log('ngOnChanges works');
  }

  createCourses() {
    const courseDescription = 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.';
    for (let i=0; i<5; i++) {
      const courseItem: ICourse = new CourseListItem (
        i,
        `Video Course ${i+1}`,
        Math.random()*100,
        courseDescription
      );

      this.courses.push(courseItem);
    };
  }; 
  
  onCourseDeleted(data: {courseId: number}) {
    console.log(data.courseId);
  }

  onLoadMore() {
    console.log("load more");
  }
}

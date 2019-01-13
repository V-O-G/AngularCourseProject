import { Component, OnInit, OnChanges } from '@angular/core';

import { CourseListItem, ICourse } from '../course-list-item.model';

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
}

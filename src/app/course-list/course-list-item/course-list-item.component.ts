import { Component, OnInit } from '@angular/core';

import { CourseListItem } from '../course-list-item.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {  

  constructor() { }

  ngOnInit() {
  }

  course: CourseListItem = new CourseListItem (
      123,
      'CourseTitle',
      new Date(),
      30,
      'CourseDescription')
}

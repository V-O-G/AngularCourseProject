import { Component, OnInit } from '@angular/core';

import { CourseListItem } from '../course-list-item.model';
import { UserInfo } from 'src/app/user.model';

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
    30,
    'CourseDescription'
  );

  user: UserInfo = new UserInfo (
    123,
    'John',
    'Doe'
  ); 
}

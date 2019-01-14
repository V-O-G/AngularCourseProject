import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserInfo, IUser } from 'src/app/user.model';
import { ICourse } from '../course-list-item.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {  
  @Input() course: ICourse;
  @Output() courseDeleted = new EventEmitter<number>(); 
  
  constructor() { }

  ngOnInit() {
  }

  user: IUser = new UserInfo (
    123,
    'John',
    'Doe'
  );

  onCourseDelete() {
    this.courseDeleted.emit(this.course.id);
  }
}

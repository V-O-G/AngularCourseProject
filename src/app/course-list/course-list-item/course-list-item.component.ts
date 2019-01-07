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
  
  calculateDuration(courseDuration) {
    const hours = Math.floor(courseDuration / 60);
    const minutes = Math.round(this.course.duration % 60);
    return hours ? `${hours}h ${minutes} min` : `${minutes} min`;
  }

  transformDate(date) {
    const day = date.getDate();
    const months = ['Jan', 'Feb','Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`  
  }

  onCourseDelete() {
    this.courseDeleted.emit(this.course.id);
  }
}

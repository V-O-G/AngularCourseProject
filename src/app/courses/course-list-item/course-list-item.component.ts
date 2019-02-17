import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserInfo, IUser } from 'src/app/core/models/user.model';
import { ICourse } from '../course-list-item.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListItemComponent implements OnInit {  
  @Input() course: ICourse;
  @Output() courseDeleted = new EventEmitter<number>(); 
  
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  user: IUser = new UserInfo (
    123,
    'John',
    'Doe'
  );

  onCourseDelete() {
    const courseToBeDeleted = confirm("Do you really want to delete this course?");
    if(courseToBeDeleted) {
      this.courseDeleted.emit(this.course.id);
    }    
  }

  onCourseEdit() {
    this.router.navigate([this.course.id], {relativeTo: this.route});
  }
}

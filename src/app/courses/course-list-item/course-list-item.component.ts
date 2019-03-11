import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ICourse } from '../shared/models/course-list-item.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseListItemComponent {  
  @Input() course: ICourse;
  @Output() courseDeleted = new EventEmitter<number>(); 
  
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
  ) { }

  onCourseDelete() {
    this.courseDeleted.emit(this.course.id);  
  }

  onCourseEdit() {
    this.router.navigate([this.course.id], {relativeTo: this.route});
  }
}

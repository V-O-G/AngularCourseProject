import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ICourse } from '../course-list-item.model';
import { CoursesService } from '../shared/services/courses.service';


@Component({
  selector: 'add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss']
})
export class AddEditCourseComponent implements OnInit { 
  durationInput: string; 
  courseId: number;
  course: ICourse;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService, 
  ) { }

  ngOnInit() {
    this.courseId = +this.route.snapshot.params['id'];
    this.getCourseInfo();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSave() {
    this.onCancel();
  }

  getCourseInfo() {
    if (this.courseId) {
      this.course = this.coursesService.getCourseById(this.courseId);
      console.log(this.course);
    }
  }
}

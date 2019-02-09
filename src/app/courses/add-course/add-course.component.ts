import { Component, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewCourseService } from '../../core/shared/services/newCourse.service';


@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnChanges { 
  durationInput: string; 
  
  constructor(
    private router: Router,
    private newCourseService: NewCourseService,
    private route: ActivatedRoute, 
  ) { }

  ngOnChanges() {
    console.log(this.durationInput);
  }

  onCancel() {
    this.newCourseService.addNewCourseActive.next(false);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}

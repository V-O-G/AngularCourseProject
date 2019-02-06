import { Component, OnChanges } from '@angular/core';


@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnChanges { 
  durationInput: string; 
  
  constructor() { }

  ngOnChanges() {
    console.log(this.durationInput);
  }
}

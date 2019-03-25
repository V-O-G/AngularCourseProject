import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ICourse } from '../shared/models/course-list-item.model';
import { CoursesService } from '../shared/services/courses.service';
import { FormGroup, FormControl, Validators, FormArray, FormControlName } from '@angular/forms';
import { DatePipe } from '@angular/common';
import numberValidator from '../shared/directives/number-validator-func';

@Component({
  selector: 'add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss']
})
export class AddEditCourseComponent implements OnInit {
  durationInput: string;  
  course: ICourse;
  signupForm: FormGroup;
  loading = true;

  private courseId: number;
  private dateNow = new Date();
  private courseToEdit: ICourse;
  
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

  onSubmit() {
    const newCourse = this.coursesFormToJson();
      this.coursesService.addCourse(newCourse)
      .subscribe(
        (newCourse) => {
           console.log(newCourse);
        },
        (error) => console.log(error)
      );    
    this.onCancel();
  }

  getCourseInfo() {
    if (this.courseId) {
      this.coursesService.getCourseById(this.courseId)
      .subscribe(
        (courseToEdit) => {
          this.courseToEdit = courseToEdit;
          this.createForm();
        },
        (error) => console.log(error)
      );
    } else {
      this.createForm();
    }
  }

  coursesFormToJson() {
    const newCourse = {
      name: this.signupForm.get('courseName').value,
      description: this.signupForm.get('courseDescription').value,
      date: this.signupForm.get('courseDate').value,
      authors: this.signupForm.get('courseAuthors').value,
      length: this.signupForm.get('courseLength').value,
    };
    return JSON.stringify(newCourse);    
  }

  checkIfValid(controlName) {
    const control = this.signupForm.get(controlName);
    return control.valid ? true: control.touched ? false : true;
  }

  private createForm() {
    this.loading = false;
    const datePipe = new DatePipe('en-US');
    const courseDate = datePipe.transform(
      this.courseToEdit 
      ? this.courseToEdit.date 
      : this.dateNow, 'shortDate');
    const authors = this.courseToEdit 
      ? this.courseToEdit.authors.map((author) => {
        return `${author.firstName} ${author.lastName}`
      }).join() 
      : null;
    this.signupForm = new FormGroup({
      'courseName': new FormControl(
        this.courseToEdit ? this.courseToEdit.name : null, 
        [Validators.required]
      ),
      'courseDescription': new FormControl(this.courseToEdit ? this.courseToEdit.description : null, [Validators.required]),
      'courseLength': new FormControl(
        this.courseToEdit ? this.courseToEdit.length : null, 
        [Validators.required]
      ),
      'courseDate': new FormControl(courseDate, [Validators.required]),
      'courseAuthors': new FormControl(authors, [Validators.required]),
    });  
  }
}

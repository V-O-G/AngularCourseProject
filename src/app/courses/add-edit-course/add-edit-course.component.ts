import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ICourse } from '../shared/models/course-list-item.model';
import { CoursesService } from '../shared/services/courses.service';
import { FormGroup, FormControl, Validators, FormArray, FormControlName } from '@angular/forms';
import { DatePipe } from '@angular/common';
import numberValidator from '../shared/validation-functions/number-validator';
import dateValidator from '../shared/validation-functions/date-validator';
import { IAuthorFethed } from '../shared/models/authors.model';
import { Store } from '@ngrx/store';

import * as fromApp from '../../reducers';
import * as CoursesActions from '../store/courses.actions';
import { Observable } from 'rxjs';

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
  coursesState: Observable<any>;
  selectedAuthors: IAuthorFethed[] = [];

  dropdownSettings = {};
  
  ngOnInit() {
    this.courseId = +this.route.snapshot.params['id'];
    this.getCourseInfo();
    this.getAuthors();
    this.coursesState = this.store.select('courses');
    
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
  }

  private courseId: number;
  private dateNow = new Date();
  private courseToEdit: ICourse;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private store: Store<fromApp.State>,
  ) { }

  onCancel() {
    this.store.dispatch(new CoursesActions.OnNewCourseFormSubmitted());
  }

  onSubmit() {
    const newCourse = this.coursesFormToServer();
    this.store.dispatch(new CoursesActions.AddNewCourse(newCourse));    
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

  coursesFormToServer() {
    const courseId = this.courseToEdit ? this.courseToEdit.id : null;
    const isTopRaited = this.courseToEdit ? this.courseToEdit.isTopRated : false;
    return {
      id: courseId,
      name: this.signupForm.get('courseName').value,
      description: this.signupForm.get('courseDescription').value,
      isTopRated: isTopRaited,
      date: this.toDate(this.signupForm.get('courseDate').value),
      authors: this.transformAuthorsArr(this.signupForm.get('courseAuthors').value),
      length: this.signupForm.get('courseLength').value,
    };    
  }

  checkIfValid(controlName) {
    const control = this.signupForm.get(controlName);
    return control.valid ? true: control.touched ? false : true;
  }

  private toDate(date: string) {
    const dateArray = date.split('/');
    return new Date(+dateArray[2], +dateArray[1]-1, +dateArray[0]);
  }

  private createForm() {
    this.loading = false;
    const datePipe = new DatePipe('en-US');
    const courseDate = datePipe.transform(
      this.courseToEdit 
      ? this.courseToEdit.date 
      : this.dateNow, 'dd/MM/yyyy');
    this.selectedAuthors = this.courseToEdit 
      ? this.courseToEdit.authors.map((author) => {
        return {
          id: author.id.toString(),
          name: `${author.firstName} ${author.lastName}`
        }})
      : null;
    this.signupForm = new FormGroup({
      'courseName': new FormControl(
        this.courseToEdit ? this.courseToEdit.name : null, 
        [Validators.required]
      ),
      'courseDescription': new FormControl(this.courseToEdit ? this.courseToEdit.description : null, [Validators.required]),
      'courseLength': new FormControl(
        this.courseToEdit ? this.courseToEdit.length : null, 
        [Validators.required, numberValidator]
      ),
      'courseDate': new FormControl(courseDate, [Validators.required, dateValidator]),
      'courseAuthors': new FormControl(this.selectedAuthors, [Validators.required]),
    }); 
  }

  private transformAuthorsArr(authors) {
    return authors.map(author => { 
      const nameParts = author.name.split(' ');
      return {
        id: author.id,
        firstName: nameParts[0],
        lastName: nameParts[1],
      }
    })
  }

  getAuthors(query?: string) {
    this.store.dispatch(new CoursesActions.GetAuthors(query || null));
  }
}

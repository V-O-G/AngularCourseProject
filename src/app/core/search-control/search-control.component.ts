import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { NewCourseService } from '../shared/services/newCourse.service';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent {
  @Output() userSearchEntered = new EventEmitter<string>();
  @Output() showAllCourses = new EventEmitter<boolean>();

  userSearch: string;

  constructor(
    private router: Router,
    private newCourseService: NewCourseService,
  ) { }

  getUserSearch() {
    this.userSearchEntered.emit(this.userSearch);
  }

  onSearchFocus() {
    this.showAllCourses.emit(true);
  }

  onAddCourse() {
    this.newCourseService.addNewCourseActive.next(true);
    this.router.navigate(['/courses', 'new']);
  }
}

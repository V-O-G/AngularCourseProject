import { Component, Output, EventEmitter } from '@angular/core';

import { NewCourseService } from '../shared/services/newCourse.service';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent {
  @Output() userSearchEntered = new EventEmitter<string>();
  @Output() showAllItems = new EventEmitter<boolean>();

  userSearch: string;

  constructor( private newCourseService: NewCourseService ) { }

  getUserSearch() {
    this.userSearchEntered.emit(this.userSearch);
  }

  onSearchFocus() {
    this.showAllItems.emit(true);
  }

  onAddClicked() {
    this.newCourseService.addNewCourseActive.next(true);
  }
}

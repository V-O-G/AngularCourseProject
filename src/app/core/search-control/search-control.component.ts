import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent {
  @Output() userSearchEntered = new EventEmitter<string>();
  @Output() showAllCourses = new EventEmitter<boolean>();

  userSearch: string;

  getUserSearch() {
    this.userSearchEntered.emit(this.userSearch);
  }

  onSearchFocus() {
    this.showAllCourses.emit(true);
  }
}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {
  @Output() userSearchEntered = new EventEmitter<string>();
  @Output() showAllCourses = new EventEmitter<boolean>();

  userSearch: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getUserSearch() {
    this.userSearchEntered.emit(this.userSearch);
  }

  onSearchFocus() {
    this.showAllCourses.emit(true);
  }

  onAddCourse() {
    this.router.navigate(['/courses', 'new']);
  }
}

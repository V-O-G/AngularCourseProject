import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {
  @Input() debounceTime: number = 0;
  @Input() minLengthForSearch: number = 0;
  @Output() userSearchEntered = new EventEmitter<string>();
  @Output() showAllCourses = new EventEmitter<boolean>();
  searchForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.createForm();
    this.searchForm.get('searchInput').valueChanges
    .pipe(debounceTime(this.debounceTime))
    .pipe(filter(text => text.length > this.minLengthForSearch || text.length === 0))
    .pipe(distinctUntilChanged())
    .subscribe((value) => {
      if(value.length === 0) {
        this.showAllCourses.emit(true);
      } else {
        this.userSearchEntered.emit(value);
      }
    })
  }

  private createForm() {
    this.searchForm = new FormGroup({
      'searchInput': new FormControl(null),
    });  
  }
}

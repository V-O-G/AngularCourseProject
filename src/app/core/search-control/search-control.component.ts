import { Component, Output, EventEmitter, OnChanges, OnInit, Input } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CoursesService } from 'src/app/courses/shared/services/courses.service';
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

  constructor(private coursesService: CoursesService) {}

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

  // getCoursesSearchResult(textFragment: string, count: string)
}

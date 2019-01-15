import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from "@angular/platform-browser";
import { SearchControlComponent } from './search-control.component';

describe('CourseListItemComponent', () => {
  let component: SearchControlComponent;
  let fixture: ComponentFixture<SearchControlComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchControlComponent ],
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchControlComponent);
    component = fixture.componentInstance;
    component.userSearch = 'user search';
  });

  it('should emit user input', () => {

    let userInput: number;

    component.userSearchEntered.subscribe((emittedUserInput: number) => userInput = emittedUserInput);

    component.getUserSearch();

    expect(userInput).toBe(component.userSearch);
  });
});
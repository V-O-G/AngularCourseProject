import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from "@angular/platform-browser";
import { SearchControlComponent } from './search-control.component';
import { FormsModule } from '@angular/forms';

describe('CourseListItemComponent', () => {
  let component: SearchControlComponent;
  let fixture: ComponentFixture<SearchControlComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchControlComponent ],
      imports: [ FormsModule ],
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchControlComponent);
    component = fixture.componentInstance;
    component.userSearch = 'user search';
  });

  it('should emit user input (stand-alone)', () => {

    let userInput: string;

    component.userSearchEntered.subscribe((emittedUserInput: string) => userInput = emittedUserInput);

    component.getUserSearch();

    expect(userInput).toBe(component.userSearch);
  });
});
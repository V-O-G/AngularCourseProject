import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import {Component} from "@angular/core";
import { SearchControlComponent } from './search-control.component';

@Component({
  template: `
    <app-search-control    
      (userSearchEntered)="getUserSearchInput($event)"
      (showAllCourses)="showAllCourses($event)"  
    ></app-search-control>`
  })
class TestHostComponent {
  public userInput: string;
  public getUserSearchInput(userSearchInput: string) { 
    this.userInput = userSearchInput; 
  }
}

describe('SearchControlComponent', () => {
  let testHost: TestHostComponent;
  let component: SearchControlComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchControlComponent, TestHostComponent ],
      providers: [],
      imports: [ FormsModule ],
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    component = TestBed.createComponent(SearchControlComponent).componentInstance;
  });

  it('should emit user input', () => {
    fixture.detectChanges();

    component.userSearch = "user input";
    component.getUserSearch();

    const expectedUserInput = component.userSearch;

    expect(testHost.userInput).toEqual(expectedUserInput);
  });
});

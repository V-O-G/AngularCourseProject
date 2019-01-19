import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import {Component} from "@angular/core";
import { SearchControlComponent } from './search-control.component';
import { By } from "@angular/platform-browser";

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
  });

  it('should emit user input', () => {
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('.search-input')).nativeElement;
    const searchButton = fixture.debugElement.query(By.css('.search-button'));
    inputElement.value = 'Updated Task';
    inputElement.dispatchEvent(new Event('input'));

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      searchButton.triggerEventHandler('click', null);
      expect(testHost.userInput).toEqual('Updated Task');
    });
  });
});

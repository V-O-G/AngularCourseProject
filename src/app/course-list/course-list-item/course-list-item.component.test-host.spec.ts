import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import {Component} from "@angular/core";

import { ICourse } from '../course-list-item.model';
import { CourseListItemComponent } from './course-list-item.component';
import { CourseHighlightDirective } from './course-highlight.directive';
import { DurationPipe } from './duration.pipe';

@Component({
  template: `
  <app-course-list-item      
    [course]="course"
    (courseDeleted)="onCourseDeleted($event)"  
  ></app-course-list-item>`
})
class TestHostComponent {
  public course: ICourse = { 
    id: 1,
    title: 'testTitle',
    creationDate: new Date(),
    duration: 150,
    description: 'testDescription',
    topRated: true
  };
  public selectedCourseId: number;
  public onCourseDeleted(selectedCourseId: number) { 
    this.selectedCourseId = selectedCourseId; 
  }
}

describe('CourseListItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CourseListItemComponent, 
        TestHostComponent, 
        CourseHighlightDirective, 
        DurationPipe 
      ],
      providers: [],
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
  });

  it('should receive course item and emit selected item id', () => {
    fixture.detectChanges();

    const expectedSelectedCourse = { 
      id: 1,
      title: 'testTitle',
      creationDate: new Date(),
      duration: 150,
      description: 'testDescription',
      topRated: true
    };

    const deleteButton = fixture.debugElement.query(By.css('.button-delete'));
    deleteButton.triggerEventHandler('click', null);

    expect(testHost.selectedCourseId).toEqual(expectedSelectedCourse.id);
  });
});

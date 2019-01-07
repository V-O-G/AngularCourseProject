import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from "@angular/platform-browser";
import { CourseListItemComponent } from './course-list-item.component';
import { ICourse, CourseListItem } from '../course-list-item.model';

describe('CourseListItemComponent', () => {
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;

  let course: ICourse;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemComponent ]
    })
  }));

  beforeEach(() => {
    course = new CourseListItem(1, 'testTitle', 150, 'testDescription');
    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;
    component.course = course;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selected item id', () => {
    const deleteButton = fixture.debugElement.query(By.css('.button-delete'));

    let selectedCourseId: number;
    component.courseDeleted.subscribe((emittedCourseId: number) => selectedCourseId = emittedCourseId);

    deleteButton.triggerEventHandler('click', null);

    expect(selectedCourseId).toBe(course.id);
  });
});
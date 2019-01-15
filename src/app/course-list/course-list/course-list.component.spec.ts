import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CourseListComponent } from './course-list.component';
import { OrderByDatePipe } from './pipes/order-by-date.pipe';
import { FilterByUserInputPipe } from './pipes/filter-by-user-intup.pipe';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CourseListComponent,
        OrderByDatePipe,
        FilterByUserInputPipe,
      ],
      providers: [ OrderByDatePipe, FilterByUserInputPipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createCourses() after onInit', () => {
    component.courses = [];
    component.ngOnInit();
    expect(component.courses.length).toEqual(5);
  });
});

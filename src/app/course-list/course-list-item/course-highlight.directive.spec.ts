import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import {Component} from "@angular/core";

import { CourseHighlightDirective } from './course-highlight.directive';



@Component({
  template: `
    <div>
      <div 
        [appCourseHighlight]="upcommingDate" 
        id="blueBorder"
      ></div>
      <div 
        [appCourseHighlight]="lessThanFourteenDaysDate" 
        id="greenBorder"
      ></div>
      <div 
        [appCourseHighlight]="moreThanFourteenDaysDate" 
        id="withoutBorder"
      ></div>
    </div>`
})
class TestComponent { 
  private currentYear = new Date().getFullYear();
  private currentMonth = new Date().getMonth();
  private currentDay = new Date().getDate() === 1 ? 2 : new Date().getDate();
  
  upcommingDate = new Date(this.currentYear + 1, 0, 1);
  lessThanFourteenDaysDate = new Date(this.currentYear, this.currentMonth, this.currentDay-1);
  moreThanFourteenDaysDate = new Date(this.currentYear-1, this.currentMonth, this.currentDay);
}

describe('CourseHighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, CourseHighlightDirective],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ],
    });

    fixture = TestBed.createComponent(TestComponent);
    element = fixture.nativeElement;
  });

  it('should set blue border to element if creation date is bigger than today', () => {
    const targetElement = <HTMLDivElement>element.querySelector('#blueBorder');

    expect(targetElement.style.border).toEqual('2px solid powderblue');
  });

  it('should set green border to element if creation date is less than forteen days ago (e.g. yesterday/today)', () => {
    const targetElement = <HTMLDivElement>element.querySelector('#greenBorder');

    expect(targetElement.style.border).toEqual('2px solid palegreen');
  });

  it('should not set any border to the element if creation date is more than forteen days ago (e.g. previous year)', () => {
    const targetElement = <HTMLDivElement>element.querySelector('#withoutBorder');

    expect(targetElement.style.border).toEqual('none');
  });
});
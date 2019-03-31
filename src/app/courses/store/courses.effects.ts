import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';

import * as CoursesActions from './courses.actions';
import { CoursesService } from '../shared/services/courses.service';

@Injectable()
export class CoursesEffects {
  @Effect()
  getCourseList = this.actions$.pipe(
    ofType(CoursesActions.GET_COURSES),
    switchMap(() => {
      return from(this.coursesService.getCourses());
    }),
    mergeMap((courses: any) => {
      return [{
        type: CoursesActions.SET_COURSES,
        payload: courses
      }];
    })
  );

  constructor(
    private actions$: Actions, 
    private coursesService: CoursesService,
    ) {
  }
}

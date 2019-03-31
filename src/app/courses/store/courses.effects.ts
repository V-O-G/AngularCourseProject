import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, mergeMap, map } from 'rxjs/operators';
import { from } from 'rxjs';

import * as CoursesActions from './courses.actions';
import { CoursesService } from '../shared/services/courses.service';
import { IAuthor } from '../shared/models/author.model';
import { IAuthorFethed } from '../shared/models/authors.model';

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

  @Effect()
  deleteCourse = this.actions$.pipe(
    ofType(CoursesActions.DELETE_COURSE),
    map((action: CoursesActions.DeleteCourse) => {
      return action.payload;
    }),
    switchMap((courseId: number) => {
      const courseIdToServer = courseId.toString();
      return from(this.coursesService.removeCourse(courseIdToServer));
    }),
    mergeMap(() => {
      return [{
        type: CoursesActions.GET_COURSES,
      }];
    })
  );

  @Effect()
  getUserSearchInput = this.actions$.pipe(
    ofType(CoursesActions.GET_USER_SEARCH),
    map((action: CoursesActions.GetUserSearch) => {
      return action.payload;
    }),
    switchMap((searchFragment: string) => {
      return from(this.coursesService.getCoursesSearchResult(searchFragment));
    }),
    mergeMap((courses: any) => {
      return [{
        type: CoursesActions.SET_COURSES,
        payload: courses
      }];
    })
  );

  @Effect()
  getAuthors = this.actions$.pipe(
    ofType(CoursesActions.GET_AUTHORS),
    map((action: CoursesActions.GetAuthors) => {
      return action.payload;
    }),
    switchMap((searchFragment: string) => {
      return from(this.coursesService.getAuthors(searchFragment));
    }),
    mergeMap((authors: IAuthorFethed[]) => {
      return [{
        type: CoursesActions.SET_AUTHORS,
        payload: authors
      }];
    })
  );

  constructor(
    private actions$: Actions, 
    private coursesService: CoursesService,
    ) {
  }
}

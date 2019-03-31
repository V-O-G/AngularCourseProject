import { Action } from '@ngrx/store';
import { IAuthor } from '../shared/models/author.model';
import { IAuthorFethed } from '../shared/models/authors.model';

export const GET_COURSES = 'GET_COURSES';
export const SET_COURSES = 'SET_COURSES';
export const LOAD_MORE = 'LOAD_MORE';
export const DELETE_COURSE = 'DELETE_COURSE';
export const GET_USER_SEARCH = 'GET_USER_SEARCH';
export const GET_AUTHORS = 'GET_AUTHORS';
export const SET_AUTHORS = 'SET_AUTHORS';


export class GetCourses implements Action {
  readonly type = GET_COURSES;
}

export class SetCourses implements Action {
  readonly type = SET_COURSES;

  constructor(public payload: any) {}
}

export class LoadMore implements Action {
  readonly type = LOAD_MORE;
}

export class DeleteCourse implements Action {
  readonly type = DELETE_COURSE;

  constructor(public payload: number) {}
}

export class GetUserSearch implements Action {
  readonly type = GET_USER_SEARCH;

  constructor(public payload: string) {}
}

export class GetAuthors implements Action {
  readonly type = GET_AUTHORS;

  constructor(public payload: string) {}
}

export class SetAuthors implements Action {
  readonly type = SET_AUTHORS;

  constructor(public payload: IAuthorFethed[]) {}
}

export type CoursesActions =
  GetCourses |
  SetCourses |
  LoadMore |
  DeleteCourse |
  GetUserSearch |
  GetAuthors |
  SetAuthors;

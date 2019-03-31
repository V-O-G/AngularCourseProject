import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromAuth from '../auth/store/auth.reducers';
import * as fromCourses from '../courses/store/courses.reducers';

export interface State {
  auth: fromAuth.State,
  courses: fromCourses.State,
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.authReducer,
  courses: fromCourses.coursesReducer,
};

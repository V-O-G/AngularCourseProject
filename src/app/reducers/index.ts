import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromAuth from '../auth/store/auth.reducers';

export interface State {
  auth: fromAuth.State
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.authReducer
};

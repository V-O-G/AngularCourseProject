import * as AuthActions from './auth.actions';

export interface State {
  token: string;
  userInfo: any;
  authenticated: boolean;
}

const initialState: State = {
  token: localStorage.getItem('userToken') || null,
  userInfo: null,
  authenticated: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.SIGNIN):
      return {
        ...state,
        authenticated: true
      };
    case (AuthActions.SET_TOKEN):
      return {
        ...state,
        token: action.payload
    };
    case (AuthActions.LOGOUT):
      return {
        ...state,
        userInfo: null,
        authenticated: false
      };
    case (AuthActions.SET_USER_INFO):
      return {
        ...state,
        userInfo: action.payload
      };
    default:
      return state;
  }
}

import { Action } from '@ngrx/store';

export const TRY_SIGNIN = 'TRY_SIGNIN';
export const IF_SIGNED_IN = 'IF_SIGNED_IN';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignin implements Action {
  readonly type = TRY_SIGNIN;

  constructor(public payload: {email: string, password: string}) {
  }
}

export class ifSignedIn implements Action {
  readonly type = IF_SIGNED_IN;

  constructor(public payload: string) {}
}

export class Signin implements Action {
  readonly type = SIGNIN;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetUserInfo implements Action {
  readonly type = SET_USER_INFO;

  constructor(public payload: string) {}
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {}
}

export type AuthActions = 
  Signin | 
  Logout | 
  SetUserInfo | 
  TrySignin | 
  SetToken | 
  ifSignedIn;

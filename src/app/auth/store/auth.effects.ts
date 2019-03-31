import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { from } from 'rxjs';

import * as AuthActions from './auth.actions';
import { AuthorizationService } from '../authorization.service';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignin = this.actions$.pipe(
    ofType(AuthActions.TRY_SIGNIN),
    map((action: AuthActions.TrySignin) => {
      return action.payload;
    }),
    switchMap((authData: {email: string, password: string}) => {
      return from(this.authService.login(authData.email, authData.password));
    }),
    switchMap((token: any) => {
      this.authService.saveTokenToLocalStorage(token.token);
      return from(this.authService.getUserInfo(token.token));
    }),
    mergeMap((userInfo: any) => {
      this.router.navigate(['/courses']);
      return [
        {
          type: AuthActions.SIGNIN
        },
        {
          type: AuthActions.SET_USER_INFO,
          payload: userInfo
        }
      ];
    })
  );

  @Effect()
  authIfSignedIn = this.actions$.pipe(
    ofType(AuthActions.IF_SIGNED_IN),
    map((action: AuthActions.ifSignedIn) => {
      return action.payload;
    }),
    switchMap((token: string) => {
      return from(this.authService.getUserInfo(token));
    }),
    mergeMap((userInfo: any) => {
      this.router.navigate(['/courses']);
      return [
        {
          type: AuthActions.SIGNIN
        },
        {
          type: AuthActions.SET_USER_INFO,
          payload: userInfo
        }
      ];
    })
  );

  @Effect({dispatch: false})
  authLogout = this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(() => {
      this.authService.logout();
      this.router.navigate(['/login']);
    }));

  constructor(
    private actions$: Actions, 
    private router: Router,
    private authService: AuthorizationService,
    ) {
  }
}

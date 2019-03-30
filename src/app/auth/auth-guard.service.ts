import {
  CanActivate,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

import * as fromApp from '../reducers';
import * as fromAuth from './store/auth.reducers';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<fromApp.State>,
    private router: Router,
  ) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select('auth'),
      map((authState: fromAuth.State) => {
        if(authState.authenticated) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }),
      take(1)
    );
  }
}

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthorizationService } from './authorization.service';
import { Observable, of } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {
  isUserLoggedIn: boolean;

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    this.subscribeToLoginStatus();
    if (this.isUserLoggedIn) {
      return of(true);
    } else {
      this.router.navigate(['/login']);
      return of(false);
    }
  }

  subscribeToLoginStatus() {
    this.authorizationService.isUserLoggedIn.subscribe(
      (isLoggedIn: boolean) => {
        this.isUserLoggedIn = isLoggedIn;
      }
    );
  }
}

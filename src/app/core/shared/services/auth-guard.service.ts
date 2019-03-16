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
  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    if (this.authorizationService.isAuthenticated()) {
      return of(true);
    } else {
      this.router.navigate(['/login']);
    }
  }
}

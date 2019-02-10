import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthorizationService } from './authorization.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (this.authorizationService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}

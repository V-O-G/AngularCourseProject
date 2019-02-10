import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../shared/services/authorization.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLogin: string;
  isUserLoggedIn: boolean;

  constructor(
    public authorizationService: AuthorizationService,
    public router: Router,
  ) {}

  ngOnInit() {
    this.userLogin = this.authorizationService.getUserInfo();
    this.authorizationService.isUserLoggedIn.subscribe(
      (isLoggenIn: boolean) => {
        this.isUserLoggedIn = isLoggenIn;
      }
    );
    this.authorizationService.isAuthenticated();
  }

  onLogOff() {
    this.authorizationService.logout();
    this.router.navigate(['/login']);
  }
}

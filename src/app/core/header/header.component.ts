import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../shared/services/authorization.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userInfo;
  isUserLoggedIn: boolean;
  subscription;

  constructor(
    public authorizationService: AuthorizationService,
    public router: Router,
  ) {}

  ngOnInit() {
    this.authorizationService.userInfo.subscribe((userInfo) => {
      this.userInfo = userInfo;
    });
    this.authorizationService.isAuthenticated();
    this.authorizationService.isUserLoggedIn.subscribe(
      (isLoggedIn: boolean) => {
        this.isUserLoggedIn = isLoggedIn;
      }
    );
  };

  onLogOff() {
    this.authorizationService.logout();
    this.router.navigate(['/login']);
  }
}

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
    this.authorizationService.isAuthenticated();
    this.authorizationService.isUserLoggedIn.subscribe(
      (isLoggedIn: boolean) => {
        this.isUserLoggedIn = isLoggedIn;
      }
    );
    this.subscription = this.authorizationService.getUserInfo()
    .subscribe(
      (courses: any) => {
        this.userInfo = courses; 
      },
      (error) => console.log(error)
    );
  };

  onLogOff() {
    this.authorizationService.logout();
    this.router.navigate(['/login']);
  }
}

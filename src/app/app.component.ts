import { Component, OnInit } from '@angular/core';

import { AuthorizationService } from './shared/services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
  private authorizationService: AuthorizationService,
) {}

  userLoggedIn: boolean;
  
  ngOnInit() {
    this.authorizationService.isUserLoggedIn
    .subscribe(
      (isLoggedIn: boolean) => {
        this.userLoggedIn = isLoggedIn;
      }
    );
  }
}

import { Component, OnInit, OnChanges } from '@angular/core';

import { AuthorizationService } from './core/shared/services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isUserLoggedIn: boolean;

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
) {}
  
  ngOnInit() {
    this.authorizationService.isUserLoggedIn.subscribe(
      (isLoggedIn: boolean) => {
        this.isUserLoggedIn = isLoggedIn;
      }
    );
    this.authorizationService.isAuthenticated();
    this.checkLogIn();  
  }

  checkLogIn() {
    if(this.isUserLoggedIn) {
      this.router.navigate(['/courses']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}

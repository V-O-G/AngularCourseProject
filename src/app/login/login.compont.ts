import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../core/shared/services/authorization.service';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isUserLoggedIn: boolean;

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
  ) {}

  onLoginClick(email: string, password: string) {
    this.authorizationService.login(email, password)
      .subscribe(
        (tokenData: {token: string}) => {
          this.authorizationService.saveTokenToLocalStorage(tokenData.token);
          this.authorizationService.getUserInfo(tokenData.token);
          this.router.navigate(['/courses']);
        },
        (error) => console.log(error)
      );
  }  
} 
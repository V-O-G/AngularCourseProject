import { Component } from '@angular/core';

import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(private authorizationService: AuthorizationService) {}

  onLoginClick(email: string, password: string) {
    this.authorizationService.login(email, password);
  }
  
}
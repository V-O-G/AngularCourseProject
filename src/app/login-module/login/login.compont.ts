import { Component } from '@angular/core';

import { AuthorizationService } from '../../shared/services/authorization.service';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authorizationService: AuthorizationService) {}

  onLoginClick(email: string, password: string) {
    this.authorizationService.login(email, password);
  }
  
}
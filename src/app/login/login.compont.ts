import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../core/shared/services/authorization.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isUserLoggedIn: boolean;
  loginForm: FormGroup;

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.createForm();
  }

  onLoginClick() {
    const email: string = this.loginForm.get('email').value;
    const password: string = this.loginForm.get('password').value;
    this.authorizationService.login(email, password)
      .subscribe(
        (tokenData: {token: string}) => {
          this.authorizationService.saveTokenToLocalStorage(tokenData.token);
          this.authorizationService.isUserLoggedIn.next(true);
          this.authorizationService.getUserInfo(tokenData.token);
          this.router.navigate(['/courses']);
        },
        (error) => console.log(error)
      );
  } 

  private createForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null),
    });  
  }
} 
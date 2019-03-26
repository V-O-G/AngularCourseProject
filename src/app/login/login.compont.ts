import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../core/shared/services/authorization.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  onSubmit() {
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

  checkIfValid(controlName) {
    const control = this.loginForm.get(controlName);
    return control.valid ? true: control.touched ? false : true;
  }

  private createForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    });  
  }
} 
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as fromApp from '../../reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private store: Store<fromApp.State>,
  ) {}

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    const email: string = this.loginForm.get('email').value;
    const password: string = this.loginForm.get('password').value;
    this.store.dispatch(new AuthActions.TrySignin({email: email, password: password}));
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
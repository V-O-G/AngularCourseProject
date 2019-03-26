import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.compont';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
  ],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule { }

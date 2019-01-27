import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { LoginPageComponent } from './login-page.compont';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    LoginPageComponent,
  ],
  providers: [
  ],
  exports: [
    LoginPageComponent,
  ]
})
export class LoginPageModule { }

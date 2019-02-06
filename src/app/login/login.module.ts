import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { LoginComponent } from './login/login.compont';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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

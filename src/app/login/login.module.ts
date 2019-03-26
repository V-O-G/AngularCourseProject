import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.compont';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule
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

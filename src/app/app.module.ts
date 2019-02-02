import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseListModule } from './courses-module/course-list.module';
import { CourseListComponent } from './courses-module/course-list/course-list.component';
import { LoginModule } from './login-module/login.module';
import { AuthorizationService } from './shared/services/authorization.service';

const appRoutes: Routes = [
  { path: 'courses-page', component: CourseListComponent },
  { path: '**', redirectTo: '/courses-page' },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    CourseListModule,
    LoginModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

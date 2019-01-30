import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseListModule } from './courses-module/course-list.module';
import { CourseListComponent } from './courses-module/course-list/course-list.component';
import { LoginPageModule } from './login-page/login-page.module';
import { AuthorizationService } from './authorization.service';
import { AddCourseComponent } from './add-course/add-course.component';

const appRoutes: Routes = [
  { path: 'courses-page', component: CourseListComponent },
  { path: 'add-course-page', component: AddCourseComponent },
  { path: '**', redirectTo: '/courses-page' },
];

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    CourseListModule,
    LoginPageModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

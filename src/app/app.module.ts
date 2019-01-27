import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseListModule } from './course-list/course-list.module';
import { CourseListComponent } from './course-list/course-list/course-list.component';
import { LoginPageModule } from './login-page/login-page.module';
import { AuthorizationService } from './authorization.service';

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
    LoginPageModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

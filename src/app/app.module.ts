import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseListModule } from './courses/course-list.module';
import { LoginModule } from './login/login.module';
import { AuthorizationService } from './core/shared/services/authorization.service';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthGuard } from './core/shared/services/auth-guard.service';
import { CoursesService } from './courses/shared/services/courses.service';
import { LoaderService } from './loader.service';
import { MatProgressSpinnerModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    CourseListModule,
    LoginModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    OverlayModule,
  ],
  providers: [
    AuthorizationService,
    AuthGuard,
    CoursesService,
    LoaderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

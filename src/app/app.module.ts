import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseListModule } from './courses/course-list.module';
import { LoginModule } from './login/login.module';
import { AuthorizationService } from './core/shared/services/authorization.service';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthGuard } from './core/shared/services/auth-guard.service';
import { CoursesService } from './courses/shared/services/courses.service';
import { MatProgressSpinnerModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { AuthInterceptor } from './core/auth-interceptor';
import { LoaderService } from './core/shared/services/loader.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';


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
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthorizationService,
    AuthGuard,
    CoursesService,
    LoaderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

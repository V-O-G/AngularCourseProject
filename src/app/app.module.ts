import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseListModule } from './courses/course-list.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CoursesService } from './courses/shared/services/courses.service';
import { MatProgressSpinnerModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { AuthInterceptor } from './core/auth-interceptor';
import { LoaderService } from './core/shared/services/loader.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { AuthModule } from './auth/auth.module';
import { AuthorizationService } from './auth/authorization.service';
import { AuthGuard } from './auth/auth-guard.service';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    AuthModule,
    CourseListModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    OverlayModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects])
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

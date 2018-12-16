import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BreadcrumbsComponent } from './core/breadcrumbs/breadcrumbs.component';
import { CourseListModule } from './course-list/course-list.module';


@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    CourseListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

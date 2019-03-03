import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { AddEditCourseComponent } from './courses/add-edit-course/add-edit-course.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.compont';
import { AuthGuard } from './core/shared/services/auth-guard.service';
import { EntryPageComponent } from './courses/entry-page/entry-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', canActivate: [AuthGuard], component: EntryPageComponent,
    children: [
      { path: '', component: CourseListComponent },
      { path: 'new', component: AddEditCourseComponent },
      { path: ':id', component: AddEditCourseComponent },
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

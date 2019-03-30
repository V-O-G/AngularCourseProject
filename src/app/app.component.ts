import { Component, OnInit, OnChanges } from '@angular/core';
import { ICourse } from './courses/shared/models/course-list-item.model';
import { AuthorizationService } from './auth/authorization.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from './reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  courses: ICourse[] = [];
  breadcrumbsActive: boolean = true;
  authState: Observable<any>;

  constructor(
    private authorizationService: AuthorizationService,
    private store: Store<fromApp.State>,
  ) {}

  ngOnInit() {
    this.authorizationService.isAuthenticated();
    this.authState = this.store.select('auth');
  }
}

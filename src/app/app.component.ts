import { Component, OnInit, OnChanges } from '@angular/core';
import { ICourse } from './courses/shared/models/course-list-item.model';
import { AuthorizationService } from './auth/authorization.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  courses: ICourse[] = [];
  breadcrumbsActive: boolean = true;

  constructor(
    private authorizationService: AuthorizationService,
  ) {}

  ngOnInit() {
    this.authorizationService.isAuthenticated();
    this.authorizationService.isUserLoggedIn.subscribe(
      (loggedIn: boolean) => {
        this.breadcrumbsActive = loggedIn;
      }
    );
  }
}

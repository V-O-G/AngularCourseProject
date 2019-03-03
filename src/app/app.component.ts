import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthorizationService } from './core/shared/services/authorization.service';
import { ICourse } from './courses/course-list-item.model';


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
    this.authorizationService.isUserLoggedIn.subscribe(
      (loggedIn: boolean) => {
        this.breadcrumbsActive = loggedIn
      }
    );
  }
}

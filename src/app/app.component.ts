import { Component, OnInit, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthorizationService } from './core/shared/services/authorization.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  breadcrumbsActive: boolean = true;

  constructor(private authorizationService: AuthorizationService) {}

  ngOnInit() {
    this.authorizationService.isUserLoggedIn.subscribe(
      (loggedIn: boolean) => {
        this.breadcrumbsActive = loggedIn
      }
    );
  }
}

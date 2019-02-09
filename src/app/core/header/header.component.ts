import { Component, OnInit } from '@angular/core';

import { AuthorizationService } from '../shared/services/authorization.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLogin: string;

  constructor(public authorizationService: AuthorizationService) {}
  ngOnInit() {
    this.userLogin = this.authorizationService.getUserInfo();
  }

  onLogOff() {
    this.authorizationService.logout();
  }
}

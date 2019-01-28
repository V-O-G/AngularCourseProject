import { Component } from '@angular/core';

import { AuthorizationService } from 'src/app/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public authorizationService: AuthorizationService) {}
  
  onLogOff() {
    this.authorizationService.logout();
  }
}

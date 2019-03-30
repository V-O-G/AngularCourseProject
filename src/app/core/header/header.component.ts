import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/auth/authorization.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from '../../reducers';
import * as AuthActions from '../../auth/store/auth.actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authState: Observable<any>;

  constructor(
    public authorizationService: AuthorizationService,
    public router: Router,
    private store: Store<fromApp.State>,
  ) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
  };

  onLogOff() {
    this.store.dispatch(new AuthActions.Logout());
  }
}

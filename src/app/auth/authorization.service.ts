import { Subject, BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Store } from "@ngrx/store";

import * as fromApp from '../reducers';
import * as AuthActions from './store/auth.actions';
import { Router } from "@angular/router";

const LOGIN_URL = 'http://localhost:3004/auth/login';
const USERINFO_URL = 'http://localhost:3004/auth/userinfo';


export class AuthorizationService {
    private token: string = 'userToken';

    constructor(
        private http: HttpClient,
        private store: Store<fromApp.State>,
    ) { }

    login(login: string, password: string): Observable<string> {
        return this.http
          .post<string>(`${LOGIN_URL}`, {login: login, password: password})
          .pipe(catchError((error: any) => Observable.throw(error.json())));
      }

    logout() {
        localStorage.removeItem(this.token);
    }
    isAuthenticated() {
        const userToken = localStorage.getItem(this.token); 
        if (userToken) {
            this.store.dispatch(new AuthActions.ifSignedIn(userToken));
        }
    }
    getUserInfo(token: string) {
        return this.http
          .post<string>(`${USERINFO_URL}`, {fakeToken: token})
    }

    saveTokenToLocalStorage(token: string) {
        localStorage.setItem(this.token, `${token}`);
    }
}
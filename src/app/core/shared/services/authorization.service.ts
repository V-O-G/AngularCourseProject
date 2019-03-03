import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Headers } from '@angular/http';

const LOGIN_URL = 'http://localhost:3004/auth/login';
const USERINFO_URL = 'http://localhost:3004/auth/userinfo';


export class AuthorizationService {
    isUserLoggedIn = new Subject();
    userToken: string = localStorage.getItem('userToken');

    constructor(
        private http: HttpClient,
    ) { }

    login(login: string, password: string) {
        return this.http.post(`${LOGIN_URL}`, {login: login, password: password});
    }
    logout() {
        this.userToken = null;
        this.isAuthenticated();
    }
    isAuthenticated() {
        const userToken = localStorage.getItem('userToken'); 
        if (userToken) {
            this.userToken = userToken;
            this.isUserLoggedIn.next(true);
            return true;
        } else {
            this.isUserLoggedIn.next(false);
            return false;
        }
    }
    getUserInfo() {
        this.isAuthenticated();
        const httpOptions = {
            headers: new HttpHeaders({
              'Authorization': this.userToken
            })
          };
        return this.http.post(`${USERINFO_URL}`, {fakeToken: this.userToken}, httpOptions);
    }
    saveTokenToLocalStorage(token: string) {
        localStorage.setItem('userToken', `${token}`);
        this.isAuthenticated();
    }
}
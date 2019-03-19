import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

const LOGIN_URL = 'http://localhost:3004/auth/login';
const USERINFO_URL = 'http://localhost:3004/auth/userinfo';


export class AuthorizationService {
    isUserLoggedIn = new Subject();
    userInfo = new Subject();
    private token: string = 'userToken';
    userToken: string = localStorage.getItem(this.token);

    constructor(
        private http: HttpClient,
    ) { }

    login(login: string, password: string) {
        return this.http.post(`${LOGIN_URL}`, {login: login, password: password});
    }
    logout() {
        this.userToken = null;
        localStorage.removeItem(this.token);
        this.isAuthenticated();
    }
    isAuthenticated() {
        const userToken = localStorage.getItem(this.token); 
        if (userToken) {
            this.userToken = userToken;
            this.isUserLoggedIn.next(true);
            return true;
        } else {
            this.isUserLoggedIn.next(false);
            return false;
        }
    }
    getUserInfo(token: string) {
        return this.http.post(`${USERINFO_URL}`, {fakeToken: token});
    }
    subscribeTouserInfo(token: string) {
        this.getUserInfo(token)
            .subscribe(
                (userInfo: any) => {
                    this.userInfo.next(userInfo);
                    localStorage.setItem('userLogin', `${userInfo.login}`); 
                },
            (error) => console.log(error)
        );
    }
    saveTokenToLocalStorage(token: string) {
        localStorage.setItem(this.token, `${token}`);
        this.isAuthenticated();
    }
}
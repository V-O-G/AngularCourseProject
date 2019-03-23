import { Subject, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

const LOGIN_URL = 'http://localhost:3004/auth/login';
const USERINFO_URL = 'http://localhost:3004/auth/userinfo';


export class AuthorizationService {
    isUserLoggedIn = new BehaviorSubject<boolean>(false);
    userInfo = new Subject();
    private token: string = 'userToken';

    constructor(
        private http: HttpClient,
    ) { }

    login(login: string, password: string) {
        return this.http.post(`${LOGIN_URL}`, {login: login, password: password});
    }
    logout() {
        localStorage.removeItem(this.token);
        this.isUserLoggedIn.next(false);
    }
    isAuthenticated() {
        const userToken = localStorage.getItem(this.token); 
        if (userToken) {
            this.getUserInfo(userToken);
            this.isUserLoggedIn.next(true);
        } else {
            this.isUserLoggedIn.next(false);
        }
    }
    getUserInfo(token: string) {
        this.http.post(`${USERINFO_URL}`, {fakeToken: token})
        .subscribe(
            (userInfo: any) => {
                this.userInfo.next(userInfo);
            },
        (error) => console.log(error));
    }

    saveTokenToLocalStorage(token: string) {
        localStorage.setItem(this.token, `${token}`);
    }
}
import { Subject } from "rxjs";
import { Router } from "@angular/router";


export class AuthorizationService {
    isUserLoggedIn = new Subject();

    userInfo = {
        'email': 'JonDoe@mail.com',
        'password': 'Jonny123'
    } 

    constructor(private router: Router) {
    }

    login(email: string, password: string) {
        localStorage.setItem('userInfo', JSON.stringify({
            'email': email,
            'password': password
        }));
        this.isAuthenticated();
    }
    logout() {
        localStorage.removeItem('userInfo');
        this.isAuthenticated();
    }
    isAuthenticated() {
        const passedInUserInfo = this.getUserInfo();
        if (passedInUserInfo 
            && passedInUserInfo.email === this.userInfo.email 
            && passedInUserInfo.password === this.userInfo.password) {
                this.isUserLoggedIn.next(true);
                return true;
        } else {
            this.isUserLoggedIn.next(false);
            return false;
        }
    }
    getUserInfo() {
        return JSON.parse(localStorage.getItem('userInfo'));
    }
}
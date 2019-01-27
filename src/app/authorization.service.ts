import { EventEmitter } from "@angular/core";


export class AuthorizationService {
    isUserLoggedIn = new EventEmitter<boolean>();

    userInfo = {
        'email': 'JonDoe@mail.com',
        'password': 'Jonny123'
    } 

    login(email: string, password: string) {
        localStorage.setItem('userInfo', JSON.stringify({
            'email': email,
            'password': password
        }));
        this.isAuthenticated();
        console.log('logged in successfully');
    }
    logout() {
        localStorage.removeItem('userInfo');
        this.isAuthenticated();
    }
    isAuthenticated() {
        const passedInUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (passedInUserInfo 
            && passedInUserInfo.email === this.userInfo.email 
            && passedInUserInfo.password === this.userInfo.password) {
                this.isUserLoggedIn.emit(true);
                return true;
        } else {
            this.isUserLoggedIn.emit(false);
            return false;
        }
    }
    getUserInfo() {
        return localStorage.getItem('userInfo');
    }
}
import { Injectable } from "@angular/core";
import { 
    HttpRequest, 
    HttpInterceptor, 
    HttpHandler, 
    HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    userToken: string;

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.userToken = localStorage.getItem('userToken') || 'unknown';
        const authReq = req.clone({
            headers: req.headers.set('Authorization', this.userToken)
        });
        return next.handle(authReq);
    }
}

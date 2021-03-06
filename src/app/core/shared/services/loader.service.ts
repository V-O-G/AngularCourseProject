import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class LoaderService {
    private loaderSubject = new Subject();
    loaderState = this.loaderSubject.asObservable();    

    show() {
        this.loaderSubject.next(true);
    }

    hide() {
        this.loaderSubject.next(false);
    }
}

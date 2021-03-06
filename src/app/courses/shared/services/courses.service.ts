import { Injectable, EventEmitter } from "@angular/core";

import { ICourse, CourseListItem } from "../models/course-list-item.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { Store } from "@ngrx/store";

import { LoaderService } from "src/app/core/shared/services/loader.service";
import * as fromApp from '../../../reducers';

const BASE_URL = 'http://localhost:3004/courses';
const AUTHORS_URL = 'http://localhost:3004/authors';


@Injectable()
export class CoursesService {
    courses: ICourse[] = [];
    count: string;
    coursesState: Observable<any>;

    constructor(
        private http: HttpClient,
        private loaderService: LoaderService,
        private store: Store<fromApp.State>,
    ) {
        this.coursesState = this.store.select('courses');
        this.coursesState.subscribe(data => {
            this.count = data.count;
          });
    }

    getCourses() {
        this.showLoader();
        const count = this.count;
        return this.http.get<CourseListItem[]>(`${BASE_URL}`, {params: {count}})
        .pipe( finalize(() => {
            this.hideLoader();
        }));
    }

    removeCourse(courseToRemoveId: string) {
        return this.http.delete<CourseListItem[]>(`${BASE_URL}/${courseToRemoveId}`);   
    }

    getCoursesSearchResult(textFragment: string) {
        const count = this.count;
        this.showLoader();
        return this.http.get<CourseListItem[]>(`${BASE_URL}`, {params: {textFragment, count}})
        .pipe( finalize(() => {
            this.hideLoader();
        }));
    }

    addCourse(course) {
        if(course) {
            if(course.id){
                return this.http.put(`${BASE_URL}/${course.id}`, course)
            } else {
                return this.http.post(`${BASE_URL}`, course);
            }
        }
    }

    getCourseById(id: number) {
        this.showLoader();
        return this.http.get<ICourse>(`${BASE_URL}/${id}`)
        .pipe( finalize(() => {
            this.hideLoader();
        })); 
    }

    getAuthors(textFragment?: string) {
        if(textFragment) {
            return this.http.get<any>(`${AUTHORS_URL}`, {params: {textFragment}})
        } else {
            return this.http.get<any>(`${AUTHORS_URL}`);
        }
    }

    private showLoader(): void {
        this.loaderService.show();
    }

    private hideLoader(): void {
        this.loaderService.hide();
    }
}
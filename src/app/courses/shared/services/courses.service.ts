import { Injectable, EventEmitter } from "@angular/core";

import { ICourse, CourseListItem } from "../models/course-list-item.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { LoaderService } from "src/app/core/shared/services/loader.service";

const BASE_URL = 'http://localhost:3004/courses';


@Injectable()
export class CoursesService {
    courses: ICourse[] = [];

    constructor(
        private http: HttpClient,
        private loaderService: LoaderService
    ) {
    }

    getCourses(count: string) {
        this.showLoader();
        return this.http.get<CourseListItem[]>(`${BASE_URL}`, {params: {count}})
        .pipe( finalize(() => {
            this.hideLoader();
        }));
    }

    getCoursesSearchResult(textFragment: string, count: string) {
        this.showLoader();
        return this.http.get<CourseListItem[]>(`${BASE_URL}`, {params: {textFragment, count}})
        .pipe( finalize(() => {
            this.hideLoader();
        }));
    }

    addCourse(course: string) {
        if(course) {
            return this.http.post(`${BASE_URL}`, {course});
        }
    }

    getCourseById(id: number) {
        this.showLoader();
        return this.http.get<ICourse>(`${BASE_URL}/${id}`)
        .pipe( finalize(() => {
            this.hideLoader();
        })); 
    }
    
    removeCourse(courseToRemoveId: string) {
        return this.http.delete<CourseListItem[]>(`${BASE_URL}/${courseToRemoveId}`);   
    }

    private showLoader(): void {
        this.loaderService.show();
    }

    private hideLoader(): void {
        this.loaderService.hide();
    }
}
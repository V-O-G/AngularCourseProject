import { Injectable, EventEmitter } from "@angular/core";

import { ICourse, CourseListItem } from "../../course-list-item.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3004/courses';


@Injectable()
export class CoursesService {
    courses: ICourse[] = [];

    constructor(private http: HttpClient) {
    }

    getCourses(count: string) {
        return this.http.get<CourseListItem[]>(`${BASE_URL}`, {params: {count}});
    }

    getCoursesSearchResult(textFragment: string, count: string) {
        return this.http.get<CourseListItem[]>(`${BASE_URL}`, {params: {textFragment, count}});
    }

    addCourse(course: string) {
        if(course) {
            return this.http.post(`${BASE_URL}`, {course});
        }
    }

    getCourseById(id: number) {
        return this.http.get<ICourse>(`${BASE_URL}/${id}`);   
    }
    
    removeCourse(courseToRemoveId: string) {
        return this.http.delete<CourseListItem[]>(`${BASE_URL}/${courseToRemoveId}`);   
    }
}
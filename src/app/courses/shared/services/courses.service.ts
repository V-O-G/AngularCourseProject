import { Injectable, EventEmitter } from "@angular/core";

import { ICourse, CourseListItem } from "../../course-list-item.model";
import { HttpClient } from "@angular/common/http";

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

    addCourse(newCourse: ICourse) {
        if(newCourse) {
            this.courses.push(newCourse);
        }
    }

    getCourseById(courseId: number) {
        return this.courses.find((course) => course.id === courseId);
    }

    updateCourse(updatedCourse: ICourse ) {
        if(updatedCourse && updatedCourse.id) {
            const courseToReplace = this.getCourseIndex(updatedCourse.id);
            this.courses.splice(courseToReplace, 1, updatedCourse);
        } 
    }
    
    removeCourse(courseToRemoveId: string) {
        return this.http.delete<CourseListItem[]>(`${BASE_URL}/${courseToRemoveId}`);   
    }

    private getCourseIndex(courseId: number) {
        return this.courses.findIndex((course) => course.id === courseId);
    }
}
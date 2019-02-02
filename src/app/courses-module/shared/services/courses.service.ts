import { Injectable, EventEmitter } from "@angular/core";

import { ICourse, CourseListItem } from "../../course-list-item.model";


@Injectable()
export class CoursesService {
    courses: ICourse[] = [
        {
          id: 1,
          title: 'Video Course 1',
          creationDate: new Date(2020, 0, 1),
          duration: 150,
          description: 'upcoming course',
          topRated: false
        },
        {
          id: 2,
          title: 'Video Course 2',
          creationDate: new Date(2001, 0, 1),
          duration: 150,
          description: 'old course',
          topRated: true
        },  
    ];

    constructor() {
        this.createInitialCourses();
    }

    getCourses() {
        return this.courses.slice();
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
        const courseToReplace = this.getCourseIndex(updatedCourse.id);
        this.courses.splice(courseToReplace, 1, updatedCourse);
    }
    
    removeCourse(courseToRemoveId: number) {
        const courseToRemove = this.getCourseIndex(courseToRemoveId);
        this.courses.splice(courseToRemove, 1);
    }

    private createInitialCourses() {
        const courseDescription = 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.';
        for (let i=0; i<5; i++) {
            const courseItem: ICourse = new CourseListItem (
            i,
            `Video Course ${i+3}`,
            Math.random()*100,
            courseDescription
            );
    
            this.courses.push(courseItem);
        };
    }

    private getCourseIndex(courseId: number) {
        return this.courses.findIndex((course) => course.id === courseId);
    }
}
import { Pipe, PipeTransform } from '@angular/core';

import { ICourse } from '../models/course-list-item.model';



@Pipe({
  name: 'orderBy'
})
export class OrderByDatePipe implements PipeTransform {

  transform(courses: ICourse[]): ICourse[] {
    return courses ? courses.sort((a,b) => +b.date - +a.date) : null;
  } 
}
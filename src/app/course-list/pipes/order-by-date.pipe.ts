import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../course-list-item.model';


@Pipe({
  name: 'orderBy'
})
export class OrderByDatePipe implements PipeTransform {

  transform(courses: ICourse[]): ICourse[] {
    return courses.sort((a,b) => +b.creationDate - +a.creationDate)}
}
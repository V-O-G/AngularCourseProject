import { Pipe, PipeTransform } from '@angular/core';

import { ICourse } from '../../course-list-item.model';


@Pipe({
  name: 'filter',
  pure: false
})
export class FilterByUserInputPipe implements PipeTransform {

  transform(courses: ICourse[], filterString: string): ICourse[] {
    if (courses.length === 0 || filterString === '') {
      return courses;
    }
    const resultArray = [];
    for (const item of courses) {
      if (item.name.includes(filterString)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
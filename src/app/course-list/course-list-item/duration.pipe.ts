import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(courseDuration: number): any {
    const hours = Math.floor(courseDuration / 60);
    const minutes = Math.round(courseDuration % 60);
    return hours ? `${hours}h ${minutes} min` : `${minutes} min`;
  }
}
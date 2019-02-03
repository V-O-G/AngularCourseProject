import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(courseDuration: number): string {
    if(courseDuration) {
      const hours = Math.floor(courseDuration / 60);
      const minutes = Math.round(courseDuration % 60);
      return hours
              ? minutes 
              ? `${hours} h ${minutes} min` 
              : `${hours} h` 
            : `${minutes} min`;
    } else {
      return null;
    }  
  }
}
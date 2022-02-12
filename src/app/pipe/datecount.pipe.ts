import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecount'
})
export class DatecountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29)
        return 'Just now';
      const intervals:any = {
        'year': 31536000,
        'month': 2592000,
        'week': 604800,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1
      };
      let dateCounter;
      for (const i in intervals) {
        dateCounter = Math.floor(seconds / intervals[i]);
        if (dateCounter > 0)
          if (dateCounter === 1) {
            return dateCounter + ' ' + i + ' ago'; 
          } else {
            return dateCounter + ' ' + i + 's ago'; 
          }
      }
    }
    return value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform(author: string, gender: string): any {
   if (gender === 'Male') {
      return `Herr ${author}`
   } else if (gender === 'Female') {
      return `Frau ${author}`
   } else {
      return author
   }
  }

}

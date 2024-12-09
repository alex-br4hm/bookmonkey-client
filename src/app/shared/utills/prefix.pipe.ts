import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform(author: string, gender: string): any {
    console.log(gender)

   if (gender === 'Male') {
     console.log('Male')
    return `Herr ${author}`
   } else if (gender === 'Female') {
     console.log('Female')
     return `Frau ${author}`
   } else {
     console.log('nothing')
     return author
   }
  }

}

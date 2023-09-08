import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailPrefix'
})
export class EmailPrefixPipe implements PipeTransform {

  transform(value: string): string {
    return  `email:${value}`;
  }

}

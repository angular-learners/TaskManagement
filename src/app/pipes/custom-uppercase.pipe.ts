import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase'
})
export class CustomUppercasePipe implements PipeTransform {

  transform(value: any): any {
    return  value.toUpperCase().substring(0,4);
  }

}

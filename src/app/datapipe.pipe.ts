import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datapipe',
  pure: false
})
export class DatapipePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }
  // transform(objects : any = []) {
  //   return Object.value(objects);
  // }
  //  transform (value, args) {
  //   return Array.from(value);
  // }

  transform(input: any): any {
    const keys = [];
    for (let key in input) {
      if (input.hasOwnProperty(key)) {
        keys.push({ key: key, value: input[key]});
      }
    }
    return keys;
  }
}

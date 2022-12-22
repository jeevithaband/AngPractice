import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipenewcompo',
  // pure: true
  //  need to write whether it is pure or impure
})
export class PipenewcompoPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: string) {
    let output = "hello" + value + 'How are you'
    return output;
  }

}

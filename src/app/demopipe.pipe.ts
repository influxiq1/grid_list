import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demopipe'
})
export class DemopipePipe implements PipeTransform {

  transform(value: any, range1: number, range2: number): any {
    console.log(value, range1, range2)
    // return ((value - range1) + " To " + (value + range2));
    // let rowHight = (range1/40)
    // console.log(rowHight,'+++++++++')
    return (range1 > range2) ? value.substring(0, range2)+ '....' : value;
  }

}


@Pipe({
  name: 'stringLength'
})
export class stringLengthPipe implements PipeTransform {

  transform(value: any, range1: number, range2: number): any {
    console.log(value, range1, range2)
    return ((value - range1) + " To " + (value + range2));
  }

}

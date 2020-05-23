import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "arrayShorten",
})
export class ArrayShortenerPipe implements PipeTransform {
  transform(val) {
    if (val && val.constructor === Array && val.length > 1) {
      var c = 1;
      var first = val[0];
      var notDone = true;
      while (notDone) {
        if (val.length > c && first.length + val[c].length < 30) {
          first += `, ${val[c]}`;
          c++;
        } else {
          notDone = false;
        }
      }
      return `${first}, and ${val.length - c} more`;
    } else {
      return val;
    }
  }
}

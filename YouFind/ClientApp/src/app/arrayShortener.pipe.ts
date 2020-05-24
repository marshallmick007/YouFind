import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "arrayShorten",
})
export class ArrayShortenerPipe implements PipeTransform {
  transform(val) {
    if (val && val.constructor === Array) {
      if (val.length > 1) {
        return this.accumulateItems(val);
      } else if (val.length == 1) {
        return val[0];
      } else {
        return "";
      }
    } else {
      return val;
    }
  }

  accumulateItems(val) {
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
    if (val.length - c < 1) {
      return first;
    } else {
      return `${first}, and ${val.length - c} more`;
    }
  }
}

import { Pipe, PipeTransform } from "@angular/core";
import { isObservable, of } from "rxjs";
import { map, startWith, catchError, tap } from "rxjs/operators";

@Pipe({
  name: "loading",
})
export class LoadingPipe implements PipeTransform {
  transform(val) {
    return isObservable(val)
      ? val.pipe(
          tap((value: any) => console.log("pipe value", value)),
          map((value: any) => ({
            loading: value.type === "start",
            value: value.type ? value.value : value,
            noresults:
              value && value.constructor === Array && value.length === 0,
          })),
          startWith({ loading: true }),
          catchError((error) => of({ loading: false, error }))
        )
      : val;
  }
}

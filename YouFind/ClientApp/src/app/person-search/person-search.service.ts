import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Person } from '../models/person.model';
import { catchError, map, tap} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PersonSearchService {

  constructor(private http: HttpClient) { }

  search(term: string): Observable<Person[]> {
    console.log('calling api/search for term', term);
    if (!term.trim()) {
      return of([]);
    }

    var api = `/api/person/search?q=${term}`;
    
    return this.http.get<Person[]>(api).pipe(
      // return an empty array if there was an error
      catchError(this.handleError<Person[]>([]))
    );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

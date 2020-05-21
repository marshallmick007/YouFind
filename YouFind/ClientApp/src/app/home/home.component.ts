import { Component, OnInit } from '@angular/core';
import { Observable ,  Subject } from 'rxjs';
import { Person } from '../models/person.model';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { PersonSearchService } from '../person-search/person-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  results$: Observable<Person[]>;
  private search = new Subject<string>();

  constructor(private personService: PersonSearchService) {

  }

  performSearch(term: string): void {
    //console.log("Performing search for ", term);
    this.search.next(term);
  }

  ngOnInit(): void {

    this.results$ = this.search.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.personService.search(term)),
    );
  }
}

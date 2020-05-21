import { TestBed, inject } from '@angular/core/testing';

import { PersonSearchService } from './person-search.service';

describe('PersonSearchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonSearchService]
    });
  });

  it('should be created', inject([PersonSearchService], (service: PersonSearchService) => {
    expect(service).toBeTruthy();
  }));
});

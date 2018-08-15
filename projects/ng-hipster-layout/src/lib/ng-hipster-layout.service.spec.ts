import { TestBed, inject } from '@angular/core/testing';

import { NgHipsterLayoutService } from './ng-hipster-layout.service';

describe('NgHipsterLayoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgHipsterLayoutService]
    });
  });

  it('should be created', inject([NgHipsterLayoutService], (service: NgHipsterLayoutService) => {
    expect(service).toBeTruthy();
  }));
});

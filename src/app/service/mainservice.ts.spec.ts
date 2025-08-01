import { TestBed } from '@angular/core/testing';

import { MainserviceTs } from './mainservice.ts';

describe('MainserviceTs', () => {
  let service: MainserviceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainserviceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

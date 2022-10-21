import { TestBed } from '@angular/core/testing';

import { FetchCitylistService } from './fetch-citylist.service';

describe('FetchCitylistService', () => {
  let service: FetchCitylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchCitylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

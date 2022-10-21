import { TestBed } from '@angular/core/testing';

import { FetchEmployeeByIdService } from './fetch-employee-by-id.service';

describe('FetchEmployeeByIdService', () => {
  let service: FetchEmployeeByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchEmployeeByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

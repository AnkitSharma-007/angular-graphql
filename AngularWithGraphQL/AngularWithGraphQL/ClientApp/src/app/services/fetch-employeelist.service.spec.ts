import { TestBed } from '@angular/core/testing';

import { FetchEmployeelistService } from './fetch-employeelist.service';

describe('FetchEmployeelistService', () => {
  let service: FetchEmployeelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchEmployeelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

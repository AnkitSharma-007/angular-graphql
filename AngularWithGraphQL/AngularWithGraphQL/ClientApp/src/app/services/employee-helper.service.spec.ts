import { TestBed } from '@angular/core/testing';

import { EmployeeHelperService } from './employee-helper.service';

describe('EmployeeHelperService', () => {
  let service: EmployeeHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

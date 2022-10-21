import { TestBed } from '@angular/core/testing';

import { AddEmployeeService } from './add-employee.service';

describe('AddEmployeeService', () => {
  let service: AddEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DeleteEmployeeService } from './delete-employee.service';

describe('DeleteEmployeeService', () => {
  let service: DeleteEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Employee } from '../models/employee';
import { FetchEmployeelistService } from './fetch-employeelist.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeHelperService {
  employee = new BehaviorSubject<Employee[]>([]);

  constructor(
    private readonly fetchEmployeelistService: FetchEmployeelistService
  ) {}

  getEmployeeData() {
    return this.fetchEmployeeList().valueChanges.pipe(
      map((result) => {
        this.employee.next(result.data?.employeeList);
      })
    );
  }

  searchEmployee(searchText: string) {
    return this.fetchEmployeeList().valueChanges.pipe(
      map((result) => {
        const employees = result.data?.employeeList.filter((employee) =>
          employee.name
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase())
        );
        this.employee.next(employees);
      })
    );
  }

  fetchEmployeeList() {
    return this.fetchEmployeelistService.watch();
  }
}

import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { DeleteEmployeeService } from 'src/app/services/delete-employee.service';
import { EmployeeHelperService } from 'src/app/services/employee-helper.service';

@Component({
  selector: 'app-fetch-employee',
  templateUrl: './fetch-employee.component.html',
  styleUrls: ['./fetch-employee.component.css'],
})
export class FetchEmployeeComponent implements OnInit {
  protected employees$ = this.employeeHelperService.employee;
  private destroyed$ = new ReplaySubject<void>(1);

  constructor(
    private readonly deleteEmployeeService: DeleteEmployeeService,
    private readonly employeeHelperService: EmployeeHelperService
  ) {}

  ngOnInit(): void {
    this.employeeHelperService
      .getEmployeeData()
      .pipe(takeUntil(this.destroyed$))
      .subscribe();
  }

  searchEmployee(event: any): void {
    const searchString = event.target.value;
    this.employeeHelperService
      .searchEmployee(searchString)
      .pipe(takeUntil(this.destroyed$))
      .subscribe();
  }

  delete(employeeID: number): void {
    const confirmDelete = confirm(
      'Do you want to delete the employee with Id: ' + employeeID
    );
    if (employeeID != undefined && confirmDelete) {
      this.deleteEmployeeService
        .mutate({
          employeeId: employeeID,
        })
        .pipe(
          switchMap(() =>
            this.employeeHelperService.fetchEmployeeList().refetch()
          ),
          takeUntil(this.destroyed$)
        )
        .subscribe();
    }
  }
}

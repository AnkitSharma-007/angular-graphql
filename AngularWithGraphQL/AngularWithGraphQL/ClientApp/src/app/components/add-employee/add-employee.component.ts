import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EMPTY, ReplaySubject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { EmployeeRegistration } from 'src/app/models/employee-registration';
import { AddEmployeeService } from 'src/app/services/add-employee.service';
import { EmployeeHelperService } from 'src/app/services/employee-helper.service';
import { FetchCitylistService } from 'src/app/services/fetch-citylist.service';
import { FetchEmployeeByIdService } from 'src/app/services/fetch-employee-by-id.service';
import { UpdateEmployeeService } from 'src/app/services/update-employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit, OnDestroy {
  protected employeeForm!: FormGroup<EmployeeRegistration>;
  protected title = 'Create';
  protected employeeId!: number;
  protected submitted = false;
  private destroyed$ = new ReplaySubject<void>(1);

  cityList$ = this.fetchCitylistService
    .watch()
    .valueChanges.pipe(map((result) => result.data));

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly avRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly fetchEmployeeByIdService: FetchEmployeeByIdService,
    private readonly fetchCitylistService: FetchCitylistService,
    private readonly addEmployeeService: AddEmployeeService,
    private readonly updateEmployeeService: UpdateEmployeeService,
    private readonly employeeHelperService: EmployeeHelperService
  ) {
    this.employeeForm = this.formBuilder.group({
      employeeId: 0,
      name: ['', Validators.required],
      gender: ['', Validators.required],
      department: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.avRoute.paramMap
      .pipe(
        switchMap((params: Params) => {
          this.employeeId = params.get('employeeId');
          if (this.employeeId > 0) {
            this.title = 'Edit';
            return this.fetchEmployeeByIdService
              .watch(
                {
                  filterInput: Number(this.employeeId),
                },
                {
                  fetchPolicy: 'network-only',
                }
              )
              .valueChanges.pipe(map((result) => result.data));
          } else {
            return EMPTY;
          }
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe((response) => {
        if (response != undefined) {
          this.employeeForm.setValue(response.employeeList[0]);
        }
      });
  }

  get employeeFormControl() {
    return this.employeeForm.controls;
  }

  save(): void {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return;
    }

    if (this.employeeId > 0) {
      this.updateEmployee();
    } else {
      this.addEmployee();
    }
  }

  navigateToFetchEmployee(): void {
    this.router.navigate(['/employee/fetch']);
  }

  private addEmployee(): void {
    this.addEmployeeService
      .mutate({
        employeeData: this.employeeForm.value,
      })
      .pipe(
        switchMap(() =>
          this.employeeHelperService.fetchEmployeeList().refetch()
        ),
        takeUntil(this.destroyed$)
      )
      .subscribe({
        next: () => {
          this.navigateToFetchEmployee();
        },
        error: (error) => console.error(error),
      });
  }

  private updateEmployee(): void {
    this.updateEmployeeService
      .mutate({
        employeeData: this.employeeForm.value,
      })
      .pipe(
        switchMap(() =>
          this.employeeHelperService.fetchEmployeeList().refetch()
        ),
        takeUntil(this.destroyed$)
      )
      .subscribe({
        next: () => {
          this.navigateToFetchEmployee();
        },
        error: (error) => console.error(error),
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import { GET_EMPLOYEE_BY_ID } from '../GraphQL/query';
import { EmployeeType } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class FetchEmployeeByIdService extends Query<EmployeeType> {
  document = GET_EMPLOYEE_BY_ID;
}

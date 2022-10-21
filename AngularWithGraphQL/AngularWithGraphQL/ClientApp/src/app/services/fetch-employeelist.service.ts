import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import { GET_EMPLOYEES } from '../GraphQL/query';
import { EmployeeType } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class FetchEmployeelistService extends Query<EmployeeType> {
  document = GET_EMPLOYEES;
}

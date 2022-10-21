import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import { DELETE_EMPLOYEE } from '../GraphQL/mutation';

@Injectable({
  providedIn: 'root',
})
export class DeleteEmployeeService extends Mutation {
  document = DELETE_EMPLOYEE;
}

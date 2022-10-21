import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import { ADD_EMPLOYEE } from '../GraphQL/mutation';

@Injectable({
  providedIn: 'root',
})
export class AddEmployeeService extends Mutation {
  document = ADD_EMPLOYEE;
}

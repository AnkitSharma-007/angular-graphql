import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import { UPDATE_EMPLOYEE } from '../GraphQL/mutation';

@Injectable({
  providedIn: 'root',
})
export class UpdateEmployeeService extends Mutation {
  document = UPDATE_EMPLOYEE;
}

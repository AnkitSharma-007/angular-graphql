import { gql } from 'apollo-angular';

export const ADD_EMPLOYEE = gql`
  mutation AddEmployeeData($employeeData: EmployeeInput!) {
    addEmployee(employee: $employeeData) {
      employee {
        name
      }
    }
  }
`;

export const UPDATE_EMPLOYEE = gql`
  mutation EditEmployeeData($employeeData: EmployeeInput!) {
    editEmployee(employee: $employeeData) {
      employee {
        name
      }
    }
  }
`;

export const DELETE_EMPLOYEE = gql`
  mutation DeleteMovieData($employeeId: Int!) {
    deleteEmployee(employeeId: $employeeId)
  }
`;

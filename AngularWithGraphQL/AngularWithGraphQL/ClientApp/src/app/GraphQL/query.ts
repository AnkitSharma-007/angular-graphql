import { gql } from 'apollo-angular';

export const GET_EMPLOYEES = gql`
  query FetchEmployeeList {
    employeeList {
      employeeId
      name
      gender
      department
      city
    }
  }
`;

export const GET_CITIES = gql`
  query FetchCityList {
    cityList {
      cityId
      cityName
    }
  }
`;

export const GET_EMPLOYEE_BY_ID = gql`
  query FilterEmployeeByID($filterInput: Int!) {
    employeeList(where: { employeeId: { eq: $filterInput } }) {
      employeeId
      name
      gender
      department
      city
    }
  }
`;

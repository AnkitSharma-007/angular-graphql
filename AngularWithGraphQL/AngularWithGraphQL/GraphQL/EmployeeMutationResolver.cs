using AngularWithGraphQL.Interfaces;
using AngularWithGraphQL.Models;

namespace AngularWithGraphQL.GraphQL
{
    public class EmployeeMutationResolver
    {
        public record AddEmployeePayload(Employee employee);

        //readonly IEmployee _employeeService;

        //public EmployeeMutationResolver(IEmployee employeeService)
        //{
        //    _employeeService = employeeService;
        //}

        [GraphQLDescription("Add a new employee data.")]
        public AddEmployeePayload AddEmployee(Employee employee, IEmployee _employeeService)
        {
            _employeeService.AddEmployee(employee);

            return new AddEmployeePayload(employee);
        }

        [GraphQLDescription("Edit an existing employee data.")]
        public async Task<AddEmployeePayload> EditEmployee(Employee employee, IEmployee _employeeService)
        {
            await _employeeService.UpdateEmployee(employee);

            return new AddEmployeePayload(employee);
        }

        [GraphQLDescription("Delete an employee data.")]
        public async Task<int> DeleteEmployee(int employeeId, IEmployee _employeeService)
        {
            await _employeeService.DeleteEmployee(employeeId);

            return employeeId;
        }
    }
}

using AngularWithGraphQL.Interfaces;
using AngularWithGraphQL.Models;

namespace AngularWithGraphQL.GraphQL
{
    public class EmployeeQueryResolver
    {
        //readonly IEmployee _employeeService;

        //public EmployeeQueryResolver(IEmployee employeeService)
        //{
        //    _employeeService = employeeService;
        //}

        [GraphQLDescription("Gets the list of movies.")]
        [UseFiltering]
        public async Task<IQueryable<Employee>> GetEmployeeList(IEmployee _employeeService)
        {
            List<Employee> availableEmployees = await _employeeService.GetAllEmployee();
            return availableEmployees.AsQueryable();
        }

        [GraphQLDescription("Gets the list of cities.")]
        public async Task<List<City>> GetCityList(IEmployee _employeeService)
        {
            return await _employeeService.GetCity();
        }
    }
}

using AngularWithGraphQL.Models;

namespace AngularWithGraphQL.Interfaces
{
    public interface IEmployee
    {
        Task AddEmployee(Employee employee);

        Task<List<Employee>> GetAllEmployee();

        Task UpdateEmployee(Employee employee);

        Task DeleteEmployee(int employeeId);

        Task<List<City>> GetCity();
    }
}

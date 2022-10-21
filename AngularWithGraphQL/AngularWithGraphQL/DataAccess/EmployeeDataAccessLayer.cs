using AngularWithGraphQL.Interfaces;
using AngularWithGraphQL.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularWithGraphQL.DataAccess
{
    public class EmployeeDataAccessLayer : IEmployee
    {
        readonly EmployeeDBContext _dbContext;

        public EmployeeDataAccessLayer(IDbContextFactory<EmployeeDBContext> dbContext)
        {
            _dbContext = dbContext.CreateDbContext();
        }

        public async Task AddEmployee(Employee employee)
        {
            try
            {
                await _dbContext.Employees.AddAsync(employee);
                await _dbContext.SaveChangesAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task<List<Employee>> GetAllEmployee()
        {
            return await _dbContext.Employees.AsNoTracking().ToListAsync();
        }

        public async Task UpdateEmployee(Employee employee)
        {
            try
            {
                var result = await _dbContext.Employees.FirstOrDefaultAsync(e => e.EmployeeId == employee.EmployeeId);

                if (result is not null)
                {
                    result.Name = employee.Name;
                    result.Gender = employee.Gender;
                    result.Department = employee.Department;
                    result.City = employee.City;
                }

                await _dbContext.SaveChangesAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task DeleteEmployee(int employeeId)
        {
            try
            {
                Employee? employee = await _dbContext.Employees.FindAsync(employeeId);

                if (employee is not null)
                {
                    _dbContext.Employees.Remove(employee);
                    await _dbContext.SaveChangesAsync();
                }
            }
            catch
            {
                throw;
            }
        }

        public async Task<List<City>> GetCity()
        {
            return await _dbContext.Cities.AsNoTracking().ToListAsync();
        }
    }
}

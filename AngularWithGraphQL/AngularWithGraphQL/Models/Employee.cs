using System;
using System.Collections.Generic;

namespace AngularWithGraphQL.Models
{
    public partial class Employee
    {
        public int EmployeeId { get; set; }
        public string Name { get; set; } = null!;
        public string City { get; set; } = null!;
        public string Department { get; set; } = null!;
        public string Gender { get; set; } = null!;
    }
}

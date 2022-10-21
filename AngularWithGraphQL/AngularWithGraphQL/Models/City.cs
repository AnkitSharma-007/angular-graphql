using System;
using System.Collections.Generic;

namespace AngularWithGraphQL.Models
{
    public partial class City
    {
        public int CityId { get; set; }
        public string CityName { get; set; } = null!;
    }
}

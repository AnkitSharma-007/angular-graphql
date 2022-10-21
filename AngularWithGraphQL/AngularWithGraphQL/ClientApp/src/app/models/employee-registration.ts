import { FormControl } from '@angular/forms';

export interface EmployeeRegistration {
  employeeId: FormControl<number>;
  name: FormControl<string>;
  gender: FormControl<string>;
  department: FormControl<string>;
  city: FormControl<string>;
}

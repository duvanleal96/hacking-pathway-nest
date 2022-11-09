import { CustomerInterface } from './customer.interface';
export class CustomerDto implements CustomerInterface {
  dni: string;
  name: string;
  email: string;
  constructor(customer: CustomerDto) {
    this.dni = customer.dni;
    this.name = customer.name;
    this.email = customer.email;
  }
}

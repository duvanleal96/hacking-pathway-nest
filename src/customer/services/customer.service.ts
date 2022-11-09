import { Injectable } from '@nestjs/common';
import { CustomerDto } from '../customer.dto';

@Injectable()
export class CustomerService {
  customers: CustomerDto[] = [
    {
      dni: '1',
      name: 'duvan',
      email: 'duvanleal@gmail.com',
    },
    {
      dni: '2',
      name: 'felipe',
      email: 'felipe@gmail.com',
    },
  ];
  getAll(): CustomerDto[] {
    return this.customers;
  }
  createCustomer(customer: CustomerDto): CustomerDto {
    this.customers.push(customer);
    return customer;
  }
  getById(dni: string): CustomerDto | undefined {
    return this.customers.find((customer: CustomerDto) => (customer.dni = dni));
  }
  putCustomer(dni: string, customers: CustomerDto): CustomerDto | undefined {
    const customer = this.customers.find(
      (customer: CustomerDto) => (customer.dni = dni),
    );
    if (customer != undefined) {
      customer.dni = customers.dni;
      customer.name = customers.name;
      customer.email = customers.email;
    }
    return customer;
  }
  deleteCustomers(dni: string): boolean {
    const deleteCustomers = this.customers.find(
      (customer: CustomerDto) => (customer.dni = dni),
    );
    if (deleteCustomers) return true;
    return false;
  }
}

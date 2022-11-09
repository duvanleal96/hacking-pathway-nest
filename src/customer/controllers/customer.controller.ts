import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { CustomerDto } from '../customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Get()
  getAll(): CustomerDto[] {
    return this.customerService.getAll();
  }
  @Post()
  GetData(@Body() customer: CustomerDto): CustomerDto {
    return this.customerService.createCustomer(customer);
  }
  @Get('/:dni')
  getUserByUuid(@Param('dni') dni: string): CustomerDto | undefined {
    return this.customerService.getById(dni);
  }
  @Put('/:dni')
  putUsers(
    @Param('dni') dni: string,
    @Body() customer: CustomerDto,
  ): CustomerDto | undefined {
    return this.customerService.putCustomer(dni, customer);
  }
  @Delete('/:dni')
  deleteUser(@Param('dni') dni: string): boolean {
    return this.customerService.deleteCustomers(dni);
  }
}

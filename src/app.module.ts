import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerService } from './customer/services/customer.service';
import { InvoiceService } from './invoice/services/invoice.service';
import { CustomerController } from './customer/controllers/customer.controller';
import { InvoiceController } from './invoice/controllers/invoice.controller';
import { CustomerModule } from './customer/customer.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [CustomerModule, InvoiceModule],
  controllers: [AppController, CustomerController, InvoiceController],
  providers: [AppService, CustomerService, InvoiceService],
})
export class AppModule {}

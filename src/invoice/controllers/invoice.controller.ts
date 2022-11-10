import { Controller, Get } from '@nestjs/common';
import { InvoiceDto } from '../dto/invoice.dto';
import { InvoiceService } from '../services/invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly InvoiceService: InvoiceService) {}
  @Get()
  getInvoices(): InvoiceDto[] {
    return this.InvoiceService.getInvoices();
  }
}

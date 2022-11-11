import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { InvoiceDto } from '../dto/invoice.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { InvoiceService } from '../services/invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly InvoiceService: InvoiceService) {}
  @Get()
  getInvoices(): InvoiceDto[] {
    return this.InvoiceService.getInvoices();
  }

  @Put(':uuid')
  putInvoice(@Param('uuid') @Body() uuid: string, invoice: InvoiceDto) {
    return this.InvoiceService.putInvoices(uuid, invoice);
  }

  @Post()
  postInvoice(@Body() invoiceCreate: InvoiceDto): InvoiceDto {
    return this.InvoiceService.createIvoice(invoiceCreate);
  }

  @Patch(':uuid')
  patchInvoice(
    @Param('uuid') @Body() uuid: string,
    invoice: InvoiceDto,
  ): InvoiceDto | undefined {
    return this.InvoiceService.pathInvoices(uuid, invoice);
  }
}

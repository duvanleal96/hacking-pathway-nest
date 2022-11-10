import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { InvoiceDetailDto } from './invoice-detail.dto';
export class InvoiceDto {
  @IsUUID()
  uuid: string;

  @IsString()
  customerUuid: string;

  @IsString()
  nit: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InvoiceDetailDto)
  invoiceDetail: InvoiceDetailDto[];

  constructor(invoice: InvoiceDto) {
    this.uuid = invoice.uuid;
    this.customerUuid = invoice.customerUuid;
    this.nit = invoice.nit;
    this.invoiceDetail = invoice.invoiceDetail;
  }
}

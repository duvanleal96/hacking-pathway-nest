import { IsInt, IsString, IsUUID } from 'class-validator';
export class InvoiceDetailDto {
  @IsUUID()
  uuid: string;
  @IsString()
  name: string;
  @IsInt()
  price: number;

  constructor(invoice: InvoiceDetailDto) {
    this.uuid = invoice.uuid;
    this.name = invoice.name;
    this.price = invoice.price;
  }
}

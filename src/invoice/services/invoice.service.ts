import { Injectable } from '@nestjs/common';
import { InvoiceDto } from '../dto/invoice.dto';

@Injectable()
export class InvoiceService {
  invoice: InvoiceDto[] = [
    {
      uuid: '1',
      customerUuid: '1',
      nit: '12344',
      invoiceDetail: [
        {
          uuid: '1',
          name: 'fortident',
          price: 20000,
        },
        {
          uuid: '2',
          name: 'costeñita',
          price: 2500,
        },
      ],
    },
    {
      uuid: '2',
      customerUuid: '2',
      nit: '99999',
      invoiceDetail: [
        {
          uuid: '3',
          name: 'chocoso',
          price: 2000,
        },
        {
          uuid: '4',
          name: 'chocorramo',
          price: 2500,
        },
      ],
    },
  ];

  getInvoices(): InvoiceDto[]{
    return this.invoice;
  }
}

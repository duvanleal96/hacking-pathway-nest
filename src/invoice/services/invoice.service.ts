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

  getInvoices(): InvoiceDto[] {
    return this.invoice;
  }

  createIvoice(invoice: InvoiceDto): InvoiceDto {
    this.invoice.push(invoice);
    return invoice;
  }

  getById(uuid: string): InvoiceDto | undefined {
    return this.invoice.find((invoice: InvoiceDto) => (invoice.uuid = uuid));
  }

  putInvoices(
    uuid: string,
    invoicesUpdate: InvoiceDto,
  ): InvoiceDto | undefined {
    const invoices = this.invoice.find(
      (invoice: InvoiceDto) => (invoice.uuid = uuid),
    );
    if (invoices != undefined) {
      invoices.customerUuid = invoicesUpdate.customerUuid;
      invoices.nit = invoicesUpdate.nit;
      invoices.invoiceDetail = invoicesUpdate.invoiceDetail;
    }
    return invoices;
  }

  pathInvoices(
    uuid: string,
    invoiceUpdate: InvoiceDto,
  ): InvoiceDto | undefined {
    const invoice = this.invoice.find(
      (invoice: InvoiceDto) => (invoice.uuid = uuid),
    );
    if (invoice != undefined) {
      const invoicePath: InvoiceDto = {
        ...invoice,
        ...invoiceUpdate,
      };
      this.invoice = this.invoice.map((invoice: InvoiceDto) => {
        return invoice.uuid == uuid ? invoicePath : invoice;
      });
      return invoicePath;
    }
    return invoice;
  }

  deleteInvoice(uuid: string): boolean {
    const deleteInvoice = this.invoice.find(
      (invoice: InvoiceDto) => (invoice.uuid = uuid),
    );
    if (deleteInvoice) return true;
    return false;
  }
}

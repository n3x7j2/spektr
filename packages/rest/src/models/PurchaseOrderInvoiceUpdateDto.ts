/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PurchaseOrderInvoiceUpdateDto = {
  purchaseOrderId?: string;
  invoiceNr?: string | null;
  receivingListNr?: string | null;
  invoiceDate?: string;
  invoiceApproved?: boolean;
  paymentDueDate?: string;
  invoiceValue?: number;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PurchaseOrderInvoiceUpsertDto = {
  id?: string;
  purchaseOrderId?: string;
  invoiceNr?: string | null;
  receivingListNr?: string | null;
  invoiceDate?: string;
  invoiceApproved?: boolean;
  paymentDueDate?: string;
  invoiceValue?: number;
};

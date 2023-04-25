/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchaseOrderInvoiceUpsertDto } from './PurchaseOrderInvoiceUpsertDto';

export type UpsertPurchaseOrderInvoiceItemsDto = {
  purchaseOrderInvoiceId?: string;
  items?: Array<PurchaseOrderInvoiceUpsertDto> | null;
};

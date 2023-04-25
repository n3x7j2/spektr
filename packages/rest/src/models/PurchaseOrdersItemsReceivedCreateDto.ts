/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PurchaseOrdersItemsReceivedCreateDto = {
  purchasingQuantity?: number;
  dateReceived?: string;
  isNotificationSent?: boolean;
  sortNr?: number;
  description?: string | null;
  purchasingUOMId?: string;
  inventoryQuantity?: number;
  inventoryUOMId?: string | null;
  supplierReferenceNumber: string;
};

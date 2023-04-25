/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PurchaseOrdersItemsReceivedUpdateQuantityDto = {
  id?: string;
  purchasingQuantity?: number;
  purchasingUOMId?: string;
  inventoryQuantity?: number;
  inventoryUOMId?: string | null;
  description?: string | null;
  supplierReferenceNumber: string;
};

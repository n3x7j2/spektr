/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PurchaseOrderItemUpsertDto = {
  id?: string;
  inventoryItemId?: string | null;
  manualItemCode?: string | null;
  projectId?: string;
  purchasingQuantity?: number;
  purchasingUOMId?: string;
  inventoryQuantity?: number;
  inventoryUOMId?: string | null;
  inventoryUOM?: string | null;
  description?: string | null;
  unitPrice?: number;
  total?: number;
  sortNr?: number;
  dateExpected?: string | null;
  isDateExceptedConfirmed?: boolean;
  isBatched?: boolean;
  requestedItemId?: string | null;
  lots?: number;
};

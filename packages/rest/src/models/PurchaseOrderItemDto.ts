/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchaseOrdersItemsReceivedDto } from './PurchaseOrdersItemsReceivedDto';

export type PurchaseOrderItemDto = {
  id?: string;
  purchaseOrderId?: string;
  inventoryItemId?: string | null;
  inventoryItemItemId?: string | null;
  manualItemCode?: string | null;
  projectId?: string;
  projectNumber?: string | null;
  purchasingQuantity?: number;
  purchasingUOMId?: string;
  inventoryQuantity?: number;
  inventoryUOMId?: string | null;
  inventoryUOM?: string | null;
  description?: string | null;
  glAccount?: string | null;
  unitPrice?: number;
  total?: number;
  sortNr?: number;
  dateExpected?: string | null;
  isDateExceptedConfirmed?: boolean;
  isBatched?: boolean;
  requestedItemId?: string | null;
  lots?: number;
  readonly purchasingRemainingOnOrder?: number;
  readonly inventoryRemainingOnOrder?: number;
  purchaseOrderItemsReceived?: Array<PurchaseOrdersItemsReceivedDto> | null;
};

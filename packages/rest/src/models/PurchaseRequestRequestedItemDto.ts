/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemStatus } from './InventoryItemStatus';

export type PurchaseRequestRequestedItemDto = {
  id?: string | null;
  purchaseRequestStatusId?: string;
  inventoryItemId?: string;
  itemStatus?: InventoryItemStatus;
  item?: string | null;
  quantity?: number;
  quantityUOMId?: string;
  conversionFactorId?: string | null;
  dateRequired?: string;
  lots?: number;
  notes?: string | null;
};

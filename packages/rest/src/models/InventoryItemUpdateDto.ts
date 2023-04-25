/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemStatus } from './InventoryItemStatus';

export type InventoryItemUpdateDto = {
  id?: string;
  inventoryItemDynamicFields: string;
  inventoryItemGroupBatchId?: string;
  openInventoryWithdrawal?: boolean;
  minimumQuantity?: number | null;
  description?: string | null;
  imageURL?: string | null;
  imageTitle?: string | null;
  imageDescription?: string | null;
  status?: InventoryItemStatus;
  defaultReceivingUnitId?: string | null;
};

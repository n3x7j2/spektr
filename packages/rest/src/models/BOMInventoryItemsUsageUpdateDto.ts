/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMInventoryImagesUsageType } from './BOMInventoryImagesUsageType';

export type BOMInventoryItemsUsageUpdateDto = {
  bomId?: string;
  inventoryItemId?: string;
  type?: BOMInventoryImagesUsageType;
  designAllocatedQuantity?: number;
  designAllocationDateTime?: string;
  productionWithdrawalQuantity?: number | null;
  productionWithdrawalDateTime?: string | null;
};

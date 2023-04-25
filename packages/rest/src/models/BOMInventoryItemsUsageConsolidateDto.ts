/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMInventoryImagesUsageType } from './BOMInventoryImagesUsageType';

export type BOMInventoryItemsUsageConsolidateDto = {
  bomId?: string;
  inventoryItemId?: string | null;
  inventoryItemItemId?: string | null;
  inventoryItemItemDescription?: string | null;
  type?: BOMInventoryImagesUsageType;
  projectId?: string | null;
  designAllocatedQuantity?: number;
  designAllocationDateTime?: string;
  designAllocatedNet?: number | null;
  productionWithdrawalQuantity?: number | null;
  productionWithdrawalDateTime?: string | null;
  productionWithdrawalNet?: number | null;
  creationTime?: string;
  lastModificationTime?: string | null;
  isHaveAnyBOMFieldItem?: boolean;
};

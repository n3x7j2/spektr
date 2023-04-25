/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BOMInventoryItemsUsageDto = {
  id?: string;
  bomId?: string;
  inventoryProjectSpecificId?: string | null;
  inventoryOpenId?: string | null;
  inventoryItemId?: string | null;
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

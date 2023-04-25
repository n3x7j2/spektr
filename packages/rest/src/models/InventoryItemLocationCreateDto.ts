/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InventoryItemLocationCreateDto = {
  inventoryItemId?: string;
  inventoryLocationId?: string;
  quantity?: number;
  unitOfMeasureId?: string;
  bundleNumber?: string | null;
  notes?: string | null;
};

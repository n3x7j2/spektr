/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InventoryItemLocationUpdateDto = {
  inventoryItemId?: string;
  inventoryLocationId?: string;
  quantity?: number;
  unitOfMeasureId?: string;
  bundleNumber?: string | null;
  notes?: string | null;
};

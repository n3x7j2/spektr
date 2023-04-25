/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InventoryItemLocationDto = {
  id?: string;
  inventoryItemId?: string;
  inventoryItem?: string | null;
  inventoryLocationId?: string;
  inventoryLocation?: string | null;
  quantity?: number;
  unitOfMeasureId?: string;
  unitOfMeasure?: string | null;
  bundleNumber?: string | null;
  notes?: string | null;
  creationTime?: string;
  lastModificationTime?: string | null;
};

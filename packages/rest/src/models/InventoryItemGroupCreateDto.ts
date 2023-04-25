/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InventoryItemGroupCreateDto = {
  id?: string;
  inventoryGroupDynamicFields: string;
  inventorySubCategoryId?: string;
  inventoryUOMId?: string;
  batches?: Array<string> | null;
};

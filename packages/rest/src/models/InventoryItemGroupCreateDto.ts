/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemGroupStatus } from './InventoryItemGroupStatus';

export type InventoryItemGroupCreateDto = {
  id?: string;
  inventoryGroupDynamicFields: string;
  inventorySubCategoryId?: string;
  inventoryUOMId?: string | null;
  status?: InventoryItemGroupStatus;
  batches?: Array<string> | null;
};

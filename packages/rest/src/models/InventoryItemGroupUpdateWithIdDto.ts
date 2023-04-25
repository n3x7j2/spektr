/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemGroupStatus } from './InventoryItemGroupStatus';

export type InventoryItemGroupUpdateWithIdDto = {
  id?: string;
  inventoryGroupDynamicFields: string;
  inventorySubCategoryId?: string;
  inventoryUOMId?: string;
  batches?: Array<string> | null;
  status?: InventoryItemGroupStatus;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemGroupStatus } from './InventoryItemGroupStatus';

export type InventoryItemGroupDto = {
  id?: string;
  inventoryGroupDynamicFields: string;
  inventorySubCategoryId?: string;
  inventoryUOMId?: string | null;
  status?: InventoryItemGroupStatus;
  batches?: Array<string> | null;
  creationTime?: string;
  lastModificationTime?: string | null;
  categoryName?: string | null;
  subCategoryName?: string | null;
  componentName?: string | null;
  componentId?: string | null;
  inventoryCategoryId?: string;
  phaseCardPrimaryComponent?: string | null;
  statusName?: string | null;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemGroupStatus } from './InventoryItemGroupStatus';

export type InventoryItemGroupDto = {
  id?: string;
  inventoryGroupDynamicFields: string;
  inventorySubCategoryId?: string;
  inventoryUOMId?: string;
  batches?: Array<string> | null;
  status?: InventoryItemGroupStatus;
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

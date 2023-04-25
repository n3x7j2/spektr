/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryOpenChangeDto } from './InventoryOpenChangeDto';

export type InventoryOpenDto = {
  inventoryItemId?: string;
  quantity?: number;
  unitCost?: number;
  id?: string;
  inventoryItemDescription?: string | null;
  net?: number | null;
  inventoryOpenChanges?: Array<InventoryOpenChangeDto> | null;
  creationTime?: string;
  lastModificationTime?: string | null;
};

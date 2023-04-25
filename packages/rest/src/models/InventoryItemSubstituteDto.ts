/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemSubstituteDirection } from './InventoryItemSubstituteDirection';

export type InventoryItemSubstituteDto = {
  inventoryItemId?: string;
  direction?: InventoryItemSubstituteDirection;
  directionInventoryItemId?: string;
  id?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
};

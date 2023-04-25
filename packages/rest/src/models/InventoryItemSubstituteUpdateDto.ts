/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemSubstituteDirection } from './InventoryItemSubstituteDirection';

export type InventoryItemSubstituteUpdateDto = {
  inventoryItemId?: string;
  direction?: InventoryItemSubstituteDirection;
  directionInventoryItemId?: string;
};

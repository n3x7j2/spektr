/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemSubstituteDirection } from './InventoryItemSubstituteDirection';

export type InventoryItemSubstituteCreateDto = {
  inventoryItemId?: string;
  direction?: InventoryItemSubstituteDirection;
  directionInventoryItemId?: string;
};

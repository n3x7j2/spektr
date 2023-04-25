/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemSubstituteDirection } from './InventoryItemSubstituteDirection';

export type InventoryItemSubstituteInfoDto = {
  id?: string;
  inventoryItemId?: string;
  directionString?: string | null;
  direction?: InventoryItemSubstituteDirection;
  directionInventoryItemId?: string;
  isEditable?: boolean;
  actualSourceInventoryItemId?: string;
  actualDirectionInventoryItemId?: string;
};

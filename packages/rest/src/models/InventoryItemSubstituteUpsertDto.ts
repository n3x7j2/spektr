/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemSubstituteDirection } from './InventoryItemSubstituteDirection';

export type InventoryItemSubstituteUpsertDto = {
  id?: string | null;
  direction?: InventoryItemSubstituteDirection;
  directionInventoryItemId?: string;
};

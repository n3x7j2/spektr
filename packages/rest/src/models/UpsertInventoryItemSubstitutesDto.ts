/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemSubstituteUpsertDto } from './InventoryItemSubstituteUpsertDto';

export type UpsertInventoryItemSubstitutesDto = {
  inventoryItemId?: string;
  items?: Array<InventoryItemSubstituteUpsertDto> | null;
};

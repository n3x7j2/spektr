/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemLocationUpsertDto } from './InventoryItemLocationUpsertDto';

export type UpsertInventoryItemLocationsDto = {
  inventoryItemId?: string;
  items?: Array<InventoryItemLocationUpsertDto> | null;
};

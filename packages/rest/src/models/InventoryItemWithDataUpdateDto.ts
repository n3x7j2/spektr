/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemCreateDto } from './InventoryItemCreateDto';
import type { InventoryItemUpdateWithIdDto } from './InventoryItemUpdateWithIdDto';
import type { UpsertInventoryItemConversionsDto } from './UpsertInventoryItemConversionsDto';
import type { UpsertInventoryItemLocationsDto } from './UpsertInventoryItemLocationsDto';
import type { UpsertInventoryItemSubstitutesDto } from './UpsertInventoryItemSubstitutesDto';
import type { UpsertInventoryItemSuppliersDto } from './UpsertInventoryItemSuppliersDto';

export type InventoryItemWithDataUpdateDto = {
  createInventoryItem?: InventoryItemCreateDto;
  updateInventoryItem?: InventoryItemUpdateWithIdDto;
  upsertInventoryItemConversions?: UpsertInventoryItemConversionsDto;
  upsertInventoryItemSuppliers?: UpsertInventoryItemSuppliersDto;
  upsertInventoryItemLocations?: UpsertInventoryItemLocationsDto;
  upsertInventoryItemSubstitutes?: UpsertInventoryItemSubstitutesDto;
};

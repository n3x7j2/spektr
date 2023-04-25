/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemConversionDto } from './InventoryItemConversionDto';
import type { InventoryItemDto } from './InventoryItemDto';
import type { InventoryItemLocationDto } from './InventoryItemLocationDto';
import type { InventoryItemSubstituteDto } from './InventoryItemSubstituteDto';
import type { InventoryItemSupplierDto } from './InventoryItemSupplierDto';

export type InventoryItemWithDataDto = {
  inventoryItem?: InventoryItemDto;
  inventoryItemConversions?: Array<InventoryItemConversionDto> | null;
  inventoryItemSuppliers?: Array<InventoryItemSupplierDto> | null;
  inventoryItemLocations?: Array<InventoryItemLocationDto> | null;
  inventoryItemSubstitutes?: Array<InventoryItemSubstituteDto> | null;
};

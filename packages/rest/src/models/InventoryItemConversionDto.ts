/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemConversionTypeDto } from './InventoryItemConversionTypeDto';

export type InventoryItemConversionDto = {
  id?: string;
  inventoryItemId?: string;
  inventoryItem?: string | null;
  name?: string | null;
  conversionFactor?: number;
  toUOMId?: string;
  toUOM?: string | null;
  creationTime?: string;
  lastModificationTime?: string | null;
  inventoryItemConversionTypeId?: string;
  inventoryItemConversionType?: InventoryItemConversionTypeDto;
  inventoryUOMId?: string;
  inventoryUOM?: string | null;
  readonly conversion?: string | null;
};

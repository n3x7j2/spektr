/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemConversionUpsertDto } from './InventoryItemConversionUpsertDto';

export type UpsertInventoryItemConversionsDto = {
  inventoryItemId?: string;
  items?: Array<InventoryItemConversionUpsertDto> | null;
};

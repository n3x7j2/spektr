/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemSupplierUpsertDto } from './InventoryItemSupplierUpsertDto';

export type UpsertInventoryItemSuppliersDto = {
  inventoryItemId?: string;
  items?: Array<InventoryItemSupplierUpsertDto> | null;
};

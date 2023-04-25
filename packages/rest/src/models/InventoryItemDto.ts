/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemConversionDto } from './InventoryItemConversionDto';
import type { InventoryItemStatus } from './InventoryItemStatus';
import type { InventoryItemSubstituteInfoDto } from './InventoryItemSubstituteInfoDto';

export type InventoryItemDto = {
  id?: string;
  inventoryItemDynamicFields: string;
  inventoryItemGroupBatchId?: string;
  openInventoryWithdrawal?: boolean;
  minimumQuantity?: number | null;
  description?: string | null;
  imageURL?: string | null;
  imageTitle?: string | null;
  imageDescription?: string | null;
  status?: InventoryItemStatus;
  defaultReceivingUnitId?: string | null;
  creationTime?: string;
  lastModificationTime?: string | null;
  supplierNames?: Array<string> | null;
  categoryName?: string | null;
  categoryId?: string;
  subCategoryName?: string | null;
  subCategoryId?: string;
  quantity?: number;
  itemId?: string | null;
  itemDescription?: string | null;
  statusName?: string | null;
  numberOpenInventoryItems?: number;
  sumQuantityOpenInventoryItems?: number;
  numberJobSpecificInventoryItems?: number;
  sumQuantityJobSpecificInventoryItems?: number;
  unitNet?: number | null;
  net?: number | null;
  inventoryUOMId?: string | null;
  inventoryUOM?: string | null;
  inventoryItemConversions?: Array<InventoryItemConversionDto> | null;
  substitutes?: Array<InventoryItemSubstituteInfoDto> | null;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemStatus } from './InventoryItemStatus';
import type { PurchaseRequestTypeEnum } from './PurchaseRequestTypeEnum';

export type PurchaseRequestRequestedItemInfoDto = {
  id?: string | null;
  purchaseRequestId?: string;
  request?: number;
  supplierIds?: Array<string> | null;
  supplier?: string | null;
  itemStatus?: InventoryItemStatus;
  item?: string | null;
  inventoryItemId?: string;
  inventoryItemGroupBatchId?: string;
  quantity?: number;
  unit?: string | null;
  inventoryUOMId?: string;
  inventoryUOM?: string | null;
  projectId?: string;
  projectName?: string | null;
  projectNumber?: string | null;
  dateRequired?: string;
  statusId?: string;
  statusName?: string | null;
  inventory?: boolean;
  lots?: number;
  notes?: string | null;
  itemUnitPrice?: number | null;
  purchasingUOMId?: string | null;
  conversionFactor?: number | null;
  isAddToCartAble?: boolean;
  purchaseRequestTypeId?: string;
  purchaseRequestTypeName?: string | null;
  purchaseRequestTypeEnum?: PurchaseRequestTypeEnum;
};

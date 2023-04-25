/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdditionalChargeDto } from './AdditionalChargeDto';
import type { PurchaseOrderTypeEnum } from './PurchaseOrderTypeEnum';

export type PurchaseOrderDto = {
  id?: string;
  statusId?: string;
  supplierContactId?: string | null;
  shipToId?: string | null;
  priorityId?: string | null;
  dateIssued?: string;
  dateRequired?: string | null;
  dateCompleted?: string | null;
  termId?: string | null;
  shipViaId?: string | null;
  authorizedById?: string | null;
  stampNote?: string | null;
  fob?: string | null;
  currencyId?: string | null;
  isOverridePriceCalculation?: boolean;
  netCost?: number | null;
  additionalCharges?: Array<AdditionalChargeDto> | null;
  totalCost?: number | null;
  attachment?: string | null;
  comments?: string | null;
  receiveToInventory?: boolean;
  purchaseOrderTypeId?: string;
  projectId?: string | null;
  inventoryItemGroupBatchId?: string | null;
  tax?: number | null;
  orderNumber?: number;
  orderNumberFormatted?: string | null;
  dateExpected?: string | null;
  creationTime?: string;
  lastModificationTime?: string | null;
  status?: string | null;
  supplierContact?: string | null;
  supplierId?: string | null;
  currencySymbol?: string | null;
  totalCountOrderedItems?: number;
  totalCountReceivedItems?: number;
  purchaseOrderTypeName?: string | null;
  purchaseOrderTypeEnum?: PurchaseOrderTypeEnum;
  inventoryItemGroupBatchItemGroupId?: string | null;
  inventoryItemGroupBatchItemGroupDescription?: string | null;
  serviceTaskDisplayInfo?: string | null;
  componentDescription?: string | null;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdditionalChargeDto } from './AdditionalChargeDto';

export type PurchaseOrderCreateDto = {
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
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchaseOrderItemUpsertDto } from './PurchaseOrderItemUpsertDto';

export type UpsertPurchaseOrderItemsDto = {
  purchaseOrderId?: string;
  items?: Array<PurchaseOrderItemUpsertDto> | null;
};

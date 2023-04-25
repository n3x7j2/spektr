/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchaseOrderDto } from './PurchaseOrderDto';
import type { PurchaseOrdersItemsReceivedDto } from './PurchaseOrdersItemsReceivedDto';

export type PurchaseOrderWithDataDto = {
  purchaseOrder?: PurchaseOrderDto;
  purchaseOrderItemsReceives?: Array<PurchaseOrdersItemsReceivedDto> | null;
};

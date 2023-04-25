/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchaseRequestUpdateDto } from './PurchaseRequestUpdateDto';
import type { PurchaseRequestWillNotOrderItemUpsertDto } from './PurchaseRequestWillNotOrderItemUpsertDto';

export type PurchaseRequestWithDataUpdateDto = {
  updatePurchaseRequest?: PurchaseRequestUpdateDto;
  purchaseRequestId?: string;
  upsertPurchaseRequestWillNotOrderItems?: Array<PurchaseRequestWillNotOrderItemUpsertDto> | null;
};

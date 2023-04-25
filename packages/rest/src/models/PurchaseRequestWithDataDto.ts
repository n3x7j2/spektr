/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchaseRequestDto } from './PurchaseRequestDto';
import type { PurchaseRequestWillNotOrderItemDto } from './PurchaseRequestWillNotOrderItemDto';

export type PurchaseRequestWithDataDto = {
  purchaseRequest?: PurchaseRequestDto;
  purchaseRequestWillNotOrderItems?: Array<PurchaseRequestWillNotOrderItemDto> | null;
};

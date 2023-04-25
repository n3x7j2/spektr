/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchaseRequestRequestedItemDto } from './PurchaseRequestRequestedItemDto';

export type PurchaseRequestRequestedUpsertItemsDto = {
  purchaseRequestId?: string;
  items?: Array<PurchaseRequestRequestedItemDto> | null;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchaseRequestRequestedItemDto } from './PurchaseRequestRequestedItemDto';
import type { PurchaseRequestTypeEnum } from './PurchaseRequestTypeEnum';

export type PurchaseRequestDto = {
  id?: string;
  projectId?: string;
  requestedById?: string;
  dateTimeRequested?: string;
  purchaseRequestStatusId?: string;
  description?: string | null;
  purchaseRequestTypeId?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
  projectName?: string | null;
  requestedBy?: string | null;
  purchaseRequestNumber?: number;
  purchaseRequestStatusName?: string | null;
  purchaseRequestTypeName?: string | null;
  purchaseRequestTypeEnum?: PurchaseRequestTypeEnum;
  isSent?: boolean;
  items?: Array<PurchaseRequestRequestedItemDto> | null;
};

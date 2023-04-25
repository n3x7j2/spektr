/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchaseRequestStatusType } from './PurchaseRequestStatusType';

export type PurchaseRequestStatusUpdateDto = {
  status: string;
  statusType?: PurchaseRequestStatusType;
  isDefault?: boolean;
  isCompleted?: boolean;
  isCanEdit?: boolean;
  isInCart?: boolean;
  isRequested?: boolean;
  description?: string | null;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PurchaseOrderStatusUpdateDto = {
  status: string;
  isDefault?: boolean;
  isCompleted?: boolean;
  isCanEdit?: boolean;
  description?: string | null;
};

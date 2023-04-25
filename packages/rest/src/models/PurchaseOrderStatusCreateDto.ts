/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PurchaseOrderStatusCreateDto = {
  status: string;
  isDefault?: boolean;
  isCompleted?: boolean;
  isCanEdit?: boolean;
  description?: string | null;
};

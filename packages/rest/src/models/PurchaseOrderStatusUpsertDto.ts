/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PurchaseOrderStatusUpsertDto = {
  status: string;
  isDefault?: boolean;
  isCompleted?: boolean;
  isCanEdit?: boolean;
  description?: string | null;
  id?: string;
};

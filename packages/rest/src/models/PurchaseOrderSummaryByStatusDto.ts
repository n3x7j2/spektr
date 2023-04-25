/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PurchaseOrderSummaryByStatusDto = {
  id?: string;
  status?: string | null;
  isDefault?: boolean;
  isCompleted?: boolean;
  isCanEdit?: boolean;
  description?: string | null;
  totalPurchaseOrder?: number;
};

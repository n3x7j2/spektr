/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PurchaseOrderStatusDto = {
  status: string;
  isDefault?: boolean;
  isCompleted?: boolean;
  isCanEdit?: boolean;
  description?: string | null;
  id?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
};

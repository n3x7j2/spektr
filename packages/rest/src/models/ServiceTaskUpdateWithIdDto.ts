/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ServiceTaskUpdateWithIdDto = {
  projectId?: string;
  supplierId?: string;
  supplierLocationId?: string | null;
  serviceTypeId?: string;
  serviceTaskStatusId?: string;
  inventoryItemGroupBatchId?: string;
  serviceDate?: string;
  estQty?: number | null;
  estQtyUnitId?: string | null;
  estNumberOfPieces?: number | null;
  purchaseOrderId?: string;
  description?: string | null;
  serviceTaskNr?: number;
  id?: string;
};

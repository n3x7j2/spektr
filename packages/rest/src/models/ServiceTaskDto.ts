/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ServiceTaskDto = {
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
  creationTime?: string;
  lastModificationTime?: string | null;
  projectNumber?: string | null;
  projectName?: string | null;
  purchaseOrderNumberFormatted?: string | null;
  purchaseOrderNumber?: number;
  supplierName?: string | null;
  itemGroupId?: string | null;
  itemGroupDescription?: string | null;
  taskStatus?: string | null;
  estQtyUnitName?: string | null;
  serviceTypeName?: string | null;
};

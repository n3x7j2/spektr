/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PurchaseOrdersItemsReceivedDto = {
  id?: string;
  purchaseOrdersItemId?: string;
  dateReceived?: string;
  isNotificationSent?: boolean;
  sortNr?: number;
  manualItemCode?: string | null;
  inventoryItemId?: string | null;
  inventoryItemItemId?: string | null;
  projectId?: string;
  projectNumber?: string | null;
  projectName?: string | null;
  purchasingUOMId?: string;
  inventoryUOMId?: string | null;
  inventoryUOM?: string | null;
  purchasingQuantity?: number;
  inventoryQuantity?: number;
  description?: string | null;
  supplierReferenceNumber?: string | null;
};

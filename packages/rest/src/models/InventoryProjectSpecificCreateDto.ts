/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InventoryProjectSpecificCreateDto = {
  inventoryItemId?: string;
  projectId?: string;
  quantity?: number;
  unitCost?: number;
  reOrder?: number;
  isCustomerMaterial?: boolean;
  estimatedUsageDate?: string | null;
};

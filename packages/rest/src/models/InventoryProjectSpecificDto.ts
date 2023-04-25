/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryProjectSpecificChangeDto } from './InventoryProjectSpecificChangeDto';

export type InventoryProjectSpecificDto = {
  inventoryItemId?: string;
  projectId?: string;
  quantity?: number;
  unitCost?: number;
  reOrder?: number;
  isCustomerMaterial?: boolean;
  estimatedUsageDate?: string | null;
  id?: string;
  inventoryItemDescription?: string | null;
  projectName?: string | null;
  projectNumber?: string | null;
  inventoryProjectSpecificChanges?: Array<InventoryProjectSpecificChangeDto> | null;
  net?: number | null;
  creationTime?: string;
  lastModificationTime?: string | null;
};

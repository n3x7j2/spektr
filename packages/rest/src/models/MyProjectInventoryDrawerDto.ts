/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MyProjectInventoryDrawerDto = {
  inventoryItemId?: string;
  inventoryItemProjectSpecificId?: string;
  itemCode?: string | null;
  item?: string | null;
  quantity?: number;
  onOrder?: number;
  wip?: number;
  estimatedUsageDate?: string | null;
};

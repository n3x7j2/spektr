/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InventoryMaterialOnOrderDto = {
  orderDate?: string;
  readonly weeksToDeliver?: number | null;
  dateExpected?: string | null;
  orderNumber?: string | null;
  orderNumberFormatted?: string | null;
  projectName?: string | null;
  quantity?: number;
  quantityWithUOM?: string | null;
};

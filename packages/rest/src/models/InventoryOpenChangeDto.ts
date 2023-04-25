/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InventoryOpenChangeDto = {
  inventoryOpenId?: string;
  comment: string;
  oldQuantity?: number;
  newQuantity?: number;
  oldNet?: number | null;
  newNet?: number | null;
  id?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
};

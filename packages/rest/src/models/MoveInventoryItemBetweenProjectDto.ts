/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MoveInventoryItemBetweenProjectDto = {
  inventoryItemId?: string;
  fromInventoryItemProjectSpecificId?: string;
  toProjectId?: string;
  quantity: number;
  reason: string;
};

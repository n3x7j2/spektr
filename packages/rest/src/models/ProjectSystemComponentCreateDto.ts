/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectSystemComponentCreateDto = {
  id?: string;
  projectSystemId?: string;
  dateApproved?: string | null;
  quantity?: number | null;
  quantityUOMId?: string | null;
  primaryComponent?: boolean | null;
  componentApproved?: boolean;
  inventoryItemGroupBatchId?: string | null;
  materialDeliveryTime?: string | null;
};

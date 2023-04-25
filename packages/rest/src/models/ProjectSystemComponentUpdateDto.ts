/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectSystemComponentUpdateDto = {
  projectSystemId?: string;
  dateApproved?: string | null;
  quantity?: number | null;
  quantityUOMId?: string | null;
  primaryComponent?: boolean | null;
  componentApproved?: boolean;
  inventoryItemGroupBatchId?: string;
  materialDeliveryTime?: string | null;
};

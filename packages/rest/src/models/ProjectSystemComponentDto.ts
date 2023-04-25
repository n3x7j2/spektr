/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectSystemComponentDto = {
  id?: string;
  projectSystemId?: string;
  dateApproved?: string | null;
  quantity?: number | null;
  quantityUOMId?: string | null;
  primaryComponent?: boolean | null;
  componentApproved?: boolean;
  inventoryItemGroupBatchId?: string;
  inventoryItemGroupBatch?: string | null;
  inventoryItemGroupId?: string | null;
  inventoryItemGroupGuidId?: string;
  inventoryItemGroupDescription?: string | null;
  materialDeliveryTime?: string | null;
  inventorySubCategoryId?: string;
  inventoryCategoryId?: string;
  isDraft?: boolean;
};

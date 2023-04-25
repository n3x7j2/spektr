/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductionDirectiveTaskUpdateDto = {
  id?: string | null;
  productionDirectiveId?: string | null;
  parentTaskId?: string | null;
  taskTypeId?: string;
  completionDate?: string | null;
  projectSystemComponentId?: string;
  partTypeCodeId?: string | null;
  quantity?: number;
  notes?: string | null;
  part?: boolean | null;
  perforated?: boolean | null;
  inventoryItemId?: string | null;
};

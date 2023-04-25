/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductionDirectiveTaskDto = {
  id?: string;
  productionDirectiveId?: string;
  parentTaskId?: string | null;
  taskTypeId?: string;
  taskTypeName?: string | null;
  completionDate?: string | null;
  projectSystemComponentId?: string;
  componentName?: string | null;
  partTypeCodeCategoriesId?: string | null;
  categoryShort?: string | null;
  partTypeCodeId?: string | null;
  projectSystemId?: string | null;
  partTypeCodeName?: string | null;
  quantity?: number;
  notes?: string | null;
  part?: boolean;
  perforated?: boolean;
  creationTime?: string;
  lastModificationTime?: string | null;
  inventoryItemId?: string | null;
  itemCode?: string | null;
  itemDescription?: string | null;
};

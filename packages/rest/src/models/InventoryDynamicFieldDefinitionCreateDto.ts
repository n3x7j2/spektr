/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InventoryDynamicFieldDefinitionCreateDto = {
  id?: string;
  fieldDefinitionGroupId?: string;
  label: string;
  fieldTypeId?: string;
  readOnly?: boolean;
  validation?: string | null;
  layoutColumn?: number;
  linkedToId?: string | null;
  sortNr?: number;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FieldDefinitionDto } from './FieldDefinitionDto';

export type InventoryDynamicFieldDefinitionDto = {
  id?: string;
  fieldDefinitionGroupId?: string;
  label: string;
  fieldTypeId?: string;
  readOnly?: boolean;
  validation?: string | null;
  layoutColumn?: number;
  linkedToId?: string | null;
  sortNr?: number;
  fieldDefinitionGroup?: string | null;
  fieldType?: FieldDefinitionDto;
  creationTime?: string;
  lastModificationTime?: string | null;
};

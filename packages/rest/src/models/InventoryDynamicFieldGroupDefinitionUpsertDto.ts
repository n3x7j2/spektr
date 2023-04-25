/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryDynamicFieldDefinitionUpsertDto } from './InventoryDynamicFieldDefinitionUpsertDto';

export type InventoryDynamicFieldGroupDefinitionUpsertDto = {
  name: string;
  upsertItems?: Array<InventoryDynamicFieldGroupDefinitionUpsertDto> | null;
  id?: string | null;
  dynamicFieldDefinitions?: Array<InventoryDynamicFieldDefinitionUpsertDto> | null;
};

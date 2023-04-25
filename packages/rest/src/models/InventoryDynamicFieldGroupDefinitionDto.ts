/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryDynamicFieldGroupDefinitionUpsertDto } from './InventoryDynamicFieldGroupDefinitionUpsertDto';

export type InventoryDynamicFieldGroupDefinitionDto = {
  name: string;
  upsertItems?: Array<InventoryDynamicFieldGroupDefinitionUpsertDto> | null;
  id?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
};

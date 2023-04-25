/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryDynamicFieldGroupDefinitionUpsertDto } from './InventoryDynamicFieldGroupDefinitionUpsertDto';

export type InventoryDynamicFieldGroupDefinitionCreateDto = {
  name: string;
  upsertItems?: Array<InventoryDynamicFieldGroupDefinitionUpsertDto> | null;
};

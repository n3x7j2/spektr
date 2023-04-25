/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryDynamicFieldGroupDefinitionUpsertDto } from './InventoryDynamicFieldGroupDefinitionUpsertDto';

export type InventoryDynamicFieldGroupDefinitionUpdateDto = {
  name: string;
  upsertItems?: Array<InventoryDynamicFieldGroupDefinitionUpsertDto> | null;
};

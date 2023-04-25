/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMProductInventoryItemDto } from './BOMProductInventoryItemDto';

export type AssignInventoryItemImportedToBOMResultDto = {
  totalRecord?: number;
  readonly totalSuccess?: number;
  readonly totalFail?: number;
  errors?: Array<string> | null;
  bomInventoryItems?: Array<BOMProductInventoryItemDto> | null;
};

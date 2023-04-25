/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMExtrusionCutlistItemDto } from './BOMExtrusionCutlistItemDto';

export type AssignExtrusionImportedToBOMResultDto = {
  totalRecord?: number;
  readonly totalSuccess?: number;
  readonly totalFail?: number;
  errors?: Array<string> | null;
  bomExtrusionItems?: Array<BOMExtrusionCutlistItemDto> | null;
};

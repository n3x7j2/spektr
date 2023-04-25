/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMAssignmentResultDto } from './BOMAssignmentResultDto';
import type { BOMProductDto } from './BOMProductDto';

export type AssignProductImportedToBOMResultDto = {
  totalRecord?: number;
  readonly totalSuccess?: number;
  readonly totalFail?: number;
  errors?: Array<string> | null;
  warning?: Array<string> | null;
  bomProducts?: Array<BOMProductDto> | null;
  createdBOMs?: Array<BOMAssignmentResultDto> | null;
  existBOMs?: Array<BOMAssignmentResultDto> | null;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMProductDetailDto } from './BOMProductDetailDto';

export type AssignDetailImportedToBOMResultDto = {
  totalRecord?: number;
  readonly totalSuccess?: number;
  readonly totalFail?: number;
  errors?: Array<string> | null;
  bomProductDetails?: Array<BOMProductDetailDto> | null;
};

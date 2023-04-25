/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMDataImportStagingMiniBOMPartDto } from './BOMDataImportStagingMiniBOMPartDto';

export type BOMDataImportStagingMiniBOMDto = {
  projectId?: string;
  ProductId?: string | null;
  Phase?: string | null;
  Directive?: string | null;
  Parts?: Array<BOMDataImportStagingMiniBOMPartDto> | null;
  checked?: boolean;
  assignedToBOM?: boolean;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMDataImportStagingResultDto } from './BOMDataImportStagingResultDto';

export type BOMDataImportStagingFinalResultDto = {
  producstImportResult?: BOMDataImportStagingResultDto;
  inventoryItemsImportResult?: BOMDataImportStagingResultDto;
  cutlistsImportResult?: BOMDataImportStagingResultDto;
  miniBOMsImportResult?: BOMDataImportStagingResultDto;
  detailsImportResult?: BOMDataImportStagingResultDto;
  fileErrors?: Array<string> | null;
};

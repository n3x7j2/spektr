/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMDataImportStagingCutlistDto } from './BOMDataImportStagingCutlistDto';
import type { BOMDataImportStagingDetailDto } from './BOMDataImportStagingDetailDto';
import type { BOMDataImportStagingInventoryItemDto } from './BOMDataImportStagingInventoryItemDto';
import type { BOMDataImportStagingMiniBOMDto } from './BOMDataImportStagingMiniBOMDto';
import type { BOMDataImportStagingProductDto } from './BOMDataImportStagingProductDto';

export type BOMDataImportStagingDto = {
  Products?: Array<BOMDataImportStagingProductDto> | null;
  InventoryItems?: Array<BOMDataImportStagingInventoryItemDto> | null;
  Cutlists?: Array<BOMDataImportStagingCutlistDto> | null;
  MiniBOMs?: Array<BOMDataImportStagingMiniBOMDto> | null;
  Details?: Array<BOMDataImportStagingDetailDto> | null;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMDataImportStagingProductElevationDto } from './BOMDataImportStagingProductElevationDto';
import type { BOMDataImportStagingProductTaskDto } from './BOMDataImportStagingProductTaskDto';

export type BOMDataImportStagingProductDto = {
  id?: string;
  projectId?: string;
  ProductId?: string | null;
  Quantity?: string | null;
  Phase?: string | null;
  Directive?: string | null;
  Thickness?: string | null;
  Material?: string | null;
  Finish?: string | null;
  Colour?: string | null;
  Batch?: string | null;
  Width?: string | null;
  Length?: string | null;
  Designer?: string | null;
  DateDrawn?: string | null;
  DXF?: string | null;
  ProductType?: string | null;
  ProductSubType?: string | null;
  FParts?: string | null;
  CParts?: string | null;
  PPN?: string | null;
  PaintSqFT?: string | null;
  FinishSqFT?: string | null;
  Tasks?: Array<BOMDataImportStagingProductTaskDto> | null;
  Elevations?: Array<BOMDataImportStagingProductElevationDto> | null;
  dateTimeImported?: string;
  checked?: boolean;
  assignedToBOMId?: string | null;
  TitleBlock: string;
};

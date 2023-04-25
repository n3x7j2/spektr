/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMProductGroup } from './BOMProductGroup';

export type BOMProductDto = {
  id?: string;
  tenantId?: string | null;
  bomDataImportStagingProductId?: string;
  bomId?: string;
  productId: string;
  quantity?: number;
  parentProductId?: string | null;
  projectSystemComponentId?: string | null;
  productTypeId?: string;
  productSubTypeId?: string | null;
  isPart?: boolean;
  width?: string | null;
  length?: string | null;
  widthDecimal?: number | null;
  lengthDecimal?: number | null;
  dxf?: string | null;
  elevations?: string | null;
  ppn?: string | null;
  paintSqFT?: number | null;
  finishSqFT?: number | null;
  cutProcessId?: string | null;
  net?: number;
  isReleasedToProduction?: boolean;
  barcode?: string | null;
  productGroup?: BOMProductGroup;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMProductGroup } from './BOMProductGroup';

export type BOMProductPartDto = {
  id?: string;
  parentProductId?: string | null;
  productId?: string | null;
  productType?: string | null;
  component?: string | null;
  width?: string | null;
  length?: string | null;
  elevation?: string | null;
  cutlistId?: string | null;
  quantity?: number;
  productGroup?: BOMProductGroup;
};

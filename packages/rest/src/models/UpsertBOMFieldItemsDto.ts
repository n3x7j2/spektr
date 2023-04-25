/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMFieldItemUpsertDto } from './BOMFieldItemUpsertDto';

export type UpsertBOMFieldItemsDto = {
  bomId?: string;
  items?: Array<BOMFieldItemUpsertDto> | null;
};

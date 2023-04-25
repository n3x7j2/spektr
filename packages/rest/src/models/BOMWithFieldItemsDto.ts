/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMDto } from './BOMDto';
import type { BOMFieldItemDto } from './BOMFieldItemDto';

export type BOMWithFieldItemsDto = {
  bom?: BOMDto;
  fieldItems?: Array<BOMFieldItemDto> | null;
};

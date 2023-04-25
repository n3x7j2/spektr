/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMCreateDto } from './BOMCreateDto';
import type { BOMUpdateDto } from './BOMUpdateDto';
import type { UpsertBOMFieldItemsDto } from './UpsertBOMFieldItemsDto';

export type BOMWithFieldItemsInputDto = {
  createBom?: BOMCreateDto;
  updateBom?: BOMUpdateDto;
  upsertBomFieldItems?: UpsertBOMFieldItemsDto;
};

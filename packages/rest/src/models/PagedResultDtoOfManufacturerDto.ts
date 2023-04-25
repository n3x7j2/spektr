/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ManufacturerDto } from './ManufacturerDto';

export type PagedResultDtoOfManufacturerDto = {
  items?: Array<ManufacturerDto> | null;
  totalCount?: number;
};

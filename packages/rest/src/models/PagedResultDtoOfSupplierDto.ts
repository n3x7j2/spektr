/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SupplierDto } from './SupplierDto';

export type PagedResultDtoOfSupplierDto = {
  items?: Array<SupplierDto> | null;
  totalCount?: number;
};

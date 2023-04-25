/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryItemDto } from './InventoryItemDto';

export type PagedResultDtoOfInventoryItemDto = {
  items?: Array<InventoryItemDto> | null;
  totalCount?: number;
};

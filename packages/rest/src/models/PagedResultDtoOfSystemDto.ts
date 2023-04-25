/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SystemDto } from './SystemDto';

export type PagedResultDtoOfSystemDto = {
  items?: Array<SystemDto> | null;
  totalCount?: number;
};

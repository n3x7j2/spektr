/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ServiceTaskDto } from './ServiceTaskDto';

export type PagedResultDtoOfServiceTaskDto = {
  items?: Array<ServiceTaskDto> | null;
  totalCount?: number;
};

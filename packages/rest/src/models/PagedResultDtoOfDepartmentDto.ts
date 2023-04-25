/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DepartmentDto } from './DepartmentDto';

export type PagedResultDtoOfDepartmentDto = {
  items?: Array<DepartmentDto> | null;
  totalCount?: number;
};

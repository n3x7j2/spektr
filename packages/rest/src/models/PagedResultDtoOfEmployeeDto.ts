/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeeDto } from './EmployeeDto';

export type PagedResultDtoOfEmployeeDto = {
  items?: Array<EmployeeDto> | null;
  totalCount?: number;
};

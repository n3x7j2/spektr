/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TimesheetDto } from './TimesheetDto';

export type PagedResultDtoOfTimesheetDto = {
  items?: Array<TimesheetDto> | null;
  totalCount?: number;
};

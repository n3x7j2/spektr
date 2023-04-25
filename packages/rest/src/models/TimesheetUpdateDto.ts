/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TimesheetEntityType } from './TimesheetEntityType';

export type TimesheetUpdateDto = {
  employeeId?: string;
  start?: string;
  end?: string | null;
  notes?: string | null;
  entityId?: string;
  taskTypeId?: string;
  tags?: string | null;
  billable?: boolean;
  entityType?: TimesheetEntityType;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TimesheetEntityType } from './TimesheetEntityType';

export type TimesheetDto = {
  id?: string;
  tenantId?: string | null;
  employeeId?: string;
  start?: string;
  end?: string | null;
  duration?: number | null;
  notes?: string | null;
  entityId?: string;
  taskTypeId?: string;
  taskType?: string | null;
  tags?: string | null;
  billable?: boolean;
  entityType?: TimesheetEntityType;
};

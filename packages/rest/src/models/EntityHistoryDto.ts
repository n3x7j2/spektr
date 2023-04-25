/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EntityChangeType } from './EntityChangeType';
import type { EntityPropertyHistoryDto } from './EntityPropertyHistoryDto';

export type EntityHistoryDto = {
  id?: string;
  changeTime?: string;
  changeType?: EntityChangeType;
  readonly entityTypeFullName?: string | null;
  propertyChanges?: Array<EntityPropertyHistoryDto> | null;
  employeeId?: string | null;
  employeeFullName?: string | null;
  userId?: string | null;
  userFullName?: string | null;
  title?: string | null;
  description?: string | null;
};

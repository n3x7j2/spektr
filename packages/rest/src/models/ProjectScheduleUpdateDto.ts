/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectScheduleStatus } from './ProjectScheduleStatus';

export type ProjectScheduleUpdateDto = {
  projectId?: string;
  eventTypeId?: string;
  eventDate?: string | null;
  note?: string | null;
  status?: ProjectScheduleStatus;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectScheduleStatus } from './ProjectScheduleStatus';

export type ProjectScheduleUpsertDto = {
  id?: string;
  eventDate?: string | null;
  note?: string | null;
  status?: ProjectScheduleStatus;
};

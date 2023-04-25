/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectScheduleStatus } from './ProjectScheduleStatus';

export type ProjectScheduleDto = {
  projectId?: string;
  eventTypeId?: string;
  eventDate?: string | null;
  note?: string | null;
  status?: ProjectScheduleStatus;
  id?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
  eventTypeName?: string | null;
};

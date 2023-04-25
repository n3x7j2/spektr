/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectScheduleTypeCalculation } from './ProjectScheduleTypeCalculation';

export type ProjectScheduleTypeDto = {
  eventType: string;
  calculation?: ProjectScheduleTypeCalculation;
  id?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
};

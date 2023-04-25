/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectScheduleTypeCalculation } from './ProjectScheduleTypeCalculation';

export type ProjectScheduleTypeCreateDto = {
  eventType: string;
  calculation?: ProjectScheduleTypeCalculation;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectScheduleTypeCalculation } from './ProjectScheduleTypeCalculation';

export type ProjectScheduleTypeUpdateDto = {
  eventType: string;
  calculation?: ProjectScheduleTypeCalculation;
};

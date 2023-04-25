/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ServiceTaskDto } from './ServiceTaskDto';
import type { ServiceTaskProductionDirectiveDto } from './ServiceTaskProductionDirectiveDto';

export type ServiceTaskProductionDirectiveUpsertResultDto = {
  createdNewServiceTasks?: Array<ServiceTaskDto> | null;
  items?: Array<ServiceTaskProductionDirectiveDto> | null;
};

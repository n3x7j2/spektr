/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ServiceTaskCreateWithIdDto } from './ServiceTaskCreateWithIdDto';
import type { ServiceTaskProductionDirectiveItemDto } from './ServiceTaskProductionDirectiveItemDto';

export type ServiceTaskProductionDirectiveUpsertDto = {
  productionDirectiveId?: string;
  newServiceTasks?: Array<ServiceTaskCreateWithIdDto> | null;
  items?: Array<ServiceTaskProductionDirectiveItemDto> | null;
};

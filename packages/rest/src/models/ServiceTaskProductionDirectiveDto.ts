/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ServiceTaskDto } from './ServiceTaskDto';

export type ServiceTaskProductionDirectiveDto = {
  serviceTaskId: string;
  shipToServiceDate?: string;
  notes?: string | null;
  sortNr?: number;
  productionDirectiveId: string;
  id?: string;
  formattedDirectiveNumber?: string | null;
  directiveNumberFormat?: string | null;
  directiveNumber?: number;
  serviceTaskInfo?: ServiceTaskDto;
  creationTime?: string;
  lastModificationTime?: string | null;
};

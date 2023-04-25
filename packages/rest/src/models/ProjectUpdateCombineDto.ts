/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectAllowanceUpsertDto } from './ProjectAllowanceUpsertDto';
import type { ProjectEstimateUpsertDto } from './ProjectEstimateUpsertDto';
import type { ProjectScheduleUpsertDto } from './ProjectScheduleUpsertDto';
import type { ProjectUpdateDto } from './ProjectUpdateDto';
import type { ProjectWallTypeInformationUpsertDto } from './ProjectWallTypeInformationUpsertDto';

export type ProjectUpdateCombineDto = {
  updateProject?: ProjectUpdateDto;
  upsertProjectSchedules?: Array<ProjectScheduleUpsertDto> | null;
  upsertProjectEstimates?: Array<ProjectEstimateUpsertDto> | null;
  upsertProjectWallTypeInformations?: Array<ProjectWallTypeInformationUpsertDto> | null;
  upsertProjectAllowances?: Array<ProjectAllowanceUpsertDto> | null;
};

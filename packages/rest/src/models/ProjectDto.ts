/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectAllowanceDto } from './ProjectAllowanceDto';
import type { ProjectScheduleDto } from './ProjectScheduleDto';
import type { ProjectScope } from './ProjectScope';
import type { ProjectStatus } from './ProjectStatus';
import type { ProjectWallTypeInformationDto } from './ProjectWallTypeInformationDto';

export type ProjectDto = {
  id?: string;
  projectNumber?: string | null;
  projectName?: string | null;
  projectCreationDateTime?: string;
  projectStatus?: ProjectStatus;
  projectStatusName?: string | null;
  projectCompletionDateTime?: string | null;
  projectAddress?: string | null;
  projectCity?: string | null;
  projectPostalCode?: string | null;
  engineeringCalcsProject?: boolean;
  leedProject?: boolean;
  proposalId?: string | null;
  projectManagerId?: string;
  projectManagerName?: string | null;
  projectManagerCode?: string | null;
  projectTypeId?: string;
  projectTypeName?: string | null;
  projectTeamId?: string;
  projectTeamName?: string | null;
  projectProvinceStateId?: string | null;
  provinceStateName?: string | null;
  projectCountryId?: string | null;
  countryName?: string | null;
  isOpenInventoryProject?: boolean;
  drawingSubmittal?: string | null;
  materialDelivery?: string | null;
  fabricationLeadTime?: string | null;
  siteDateRequirements?: string | null;
  currentExpectedSiteDate?: string | null;
  contractCreationDate?: string | null;
  creationTime?: string;
  lastModificationTime?: string | null;
  projectEstimatorId?: string | null;
  estimateNumber?: string | null;
  specialInclusions?: string | null;
  specialExclusions?: string | null;
  projectScope?: ProjectScope;
  additionalNotes?: string | null;
  projectFolder?: string | null;
  projectStageId?: string;
  projectSchedules?: Array<ProjectScheduleDto> | null;
  projectWallTypeInformation?: Array<ProjectWallTypeInformationDto> | null;
  projectAllowances?: Array<ProjectAllowanceDto> | null;
};

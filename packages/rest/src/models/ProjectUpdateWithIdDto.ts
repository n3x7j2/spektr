/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectScope } from './ProjectScope';
import type { ProjectStatus } from './ProjectStatus';

export type ProjectUpdateWithIdDto = {
  projectName?: string | null;
  projectCreationDateTime?: string;
  projectStatus?: ProjectStatus;
  projectCompletionDateTime?: string | null;
  projectAddress?: string | null;
  projectCity?: string | null;
  projectPostalCode?: string | null;
  engineeringCalcsProject?: boolean;
  leedProject?: boolean;
  proposalId?: string | null;
  projectManagerId?: string;
  projectTypeId?: string;
  projectTeamId?: string;
  projectProvinceStateId?: string | null;
  projectCountryId?: string | null;
  isOpenInventoryProject?: boolean;
  projectEstimatorId?: string | null;
  estimateNumber?: string | null;
  specialInclusions?: string | null;
  specialExclusions?: string | null;
  projectScope?: ProjectScope;
  additionalNotes?: string | null;
  projectFolder?: string | null;
  projectStageId?: string;
  id?: string;
};

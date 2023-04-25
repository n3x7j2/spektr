/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectExtraProductCategoryDto } from './ProjectExtraProductCategoryDto';

export type ProjectExtraDto = {
  id?: string;
  extraNumber?: number;
  extraTypeID?: string;
  extraType?: string | null;
  description?: string | null;
  reasonCategoryID?: string;
  reasonCategoryName?: string | null;
  reason?: string | null;
  extraStatusID?: string;
  extraStatusName?: string | null;
  billable?: boolean;
  projectId?: string;
  projectName?: string | null;
  creationTime?: string;
  lastModificationTime?: string | null;
  mainPhaseId?: string | null;
  mainPhaseName?: string | null;
  projectExtraProductCategories?: Array<ProjectExtraProductCategoryDto> | null;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectExtraProductCategoryDto } from './ProjectExtraProductCategoryDto';

export type ProjectExtraCreateDto = {
  id?: string;
  projectId?: string;
  extraTypeID?: string;
  description?: string | null;
  reasonCategoryID?: string;
  reason?: string | null;
  extraStatusID?: string;
  billable?: boolean;
  projectExtraProductCategories?: Array<ProjectExtraProductCategoryDto> | null;
};

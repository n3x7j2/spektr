/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectPhaseProductCategoryDto } from './ProjectPhaseProductCategoryDto';

export type ProjectPhaseDto = {
  id?: string;
  projectExtraNumber?: string | null;
  projectExtraTypeId?: string;
  projectExtraType?: string | null;
  projectExtraTypeLong?: string | null;
  phase?: string | null;
  description?: string | null;
  contractReference?: string | null;
  systemTypeIds?: Array<string> | null;
  projectExtraId?: string;
  partTypeCodeCategoryIds?: Array<string> | null;
  creationTime?: string;
  lastModificationTime?: string | null;
  initialShipDate?: string | null;
  projectPhaseProductCategories?: Array<ProjectPhaseProductCategoryDto> | null;
};

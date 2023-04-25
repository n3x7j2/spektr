/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectPhaseProductCategoryDto } from './ProjectPhaseProductCategoryDto';

export type ProjectPhaseUpdateWithIdDto = {
  description?: string | null;
  contractReference?: string | null;
  systemTypeIds?: Array<string> | null;
  partTypeCodeCategoryIds?: Array<string> | null;
  initialShipDate?: string | null;
  projectPhaseProductCategories?: Array<ProjectPhaseProductCategoryDto> | null;
  id?: string;
};

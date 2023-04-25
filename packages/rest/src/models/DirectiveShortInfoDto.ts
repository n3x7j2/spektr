/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DirectiveCategory } from './DirectiveCategory';
import type { ProductionDirectiveProductCategoryDto } from './ProductionDirectiveProductCategoryDto';

export type DirectiveShortInfoDto = {
  id?: string;
  projectId?: string;
  scopeId?: string;
  scopeName?: string | null;
  phaseId?: string;
  phaseName?: string | null;
  formattedDirectiveNumber?: string | null;
  directiveTypeId?: string;
  directiveTypeName?: string | null;
  directiveSubTypeId?: string | null;
  directiveSubTypeName?: string | null;
  assignedTo?: string;
  assignedToName?: string | null;
  subject?: string | null;
  requiredCompletionDate?: string | null;
  directiveStatusId?: string;
  directiveStatusName?: string | null;
  primaryComponent?: string | null;
  reqShippingDate?: string;
  nextShippingDate?: string | null;
  panels?: number;
  parts?: number;
  directiveCategory?: DirectiveCategory;
  quantityByProductionCategories?: Array<ProductionDirectiveProductCategoryDto> | null;
};

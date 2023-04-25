/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DirectiveCategory } from './DirectiveCategory';

export type DirectiveDto = {
  id?: string;
  directiveNumber?: number;
  formattedDirectiveNumber?: string | null;
  directiveVersion?: number;
  subject?: string | null;
  description?: string | null;
  phaseId?: string;
  phase?: string | null;
  extraId?: string;
  directiveTypeId?: string;
  directiveTypeName?: string | null;
  directiveCategory?: DirectiveCategory;
  directiveSubTypeId?: string | null;
  directiveSubTypeName?: string | null;
  directiveStatusId?: string;
  directiveStatusName?: string | null;
  createdById?: string;
  employeeFullName?: string | null;
  parentDirectiveId?: string | null;
  parentDirectiveNumber?: number | null;
  fieldsToOverwrite?: Array<string> | null;
  estimatedTaskTime?: string | null;
  estimatedReviewTime?: string | null;
  dateCompleted?: string | null;
  creationTime?: string;
  lastModificationTime?: string | null;
  primaryComponent?: string | null;
  shippingDate?: string;
  panels?: number;
  parts?: number;
  requiredCompletionDate?: string | null;
  assignedToId?: string;
};

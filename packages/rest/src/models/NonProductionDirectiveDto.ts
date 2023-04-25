/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DirectiveCategory } from './DirectiveCategory';

export type NonProductionDirectiveDto = {
  id?: string;
  directiveId?: string;
  formattedDirectiveNumber?: string | null;
  phaseId?: string;
  directiveTypeId?: string;
  directiveSubTypeId?: string | null;
  directiveStatusId?: string;
  subject?: string | null;
  directiveVersion?: number;
  dateCompleted?: string | null;
  requiredCompletionDate?: string;
  dateScheduled?: string | null;
  internalReviewDate?: string | null;
  dateReceivedFromPM?: string | null;
  dateAssigned?: string | null;
  creationTime?: string;
  createdById?: string | null;
  estimatedTaskTime?: string | null;
  estimatedReviewTime?: string | null;
  description?: string | null;
  lastModificationTime?: string | null;
  directiveCategory?: DirectiveCategory;
  assignedToId?: string;
};

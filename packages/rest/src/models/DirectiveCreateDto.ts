/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DirectiveCreateDto = {
  id?: string;
  subject?: string | null;
  description?: string | null;
  phaseId?: string;
  directiveTypeId?: string;
  directiveSubTypeId?: string | null;
  directiveStatusId?: string;
  createdById?: string;
  parentDirectiveId?: string | null;
  fieldsToOverwrite?: Array<string> | null;
  estimatedTaskTime?: string | null;
  estimatedReviewTime?: string | null;
  dateCompleted?: string | null;
  assignedToId?: string;
};

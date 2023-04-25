/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectStatusUpdateCreateDto = {
  id?: string;
  projectId?: string;
  intent?: string | null;
  customerReferenceId?: string | null;
  submittedByEmployeeId?: string;
  submittedToContactId?: string;
  cc?: string | null;
  dateSent?: string;
  quotedSiteDate?: string | null;
  currentExpectedSiteDate?: string | null;
  statusId?: string;
  specificationSectionReference?: string | null;
  description?: string | null;
  projectDocumentTypeId?: string;
};

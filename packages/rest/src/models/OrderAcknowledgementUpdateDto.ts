/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrderAcknowledgementUpdateDto = {
  id?: string;
  projectId?: string;
  customerReferenceId?: string | null;
  submittedByEmployeeId?: string;
  submittedToContactId?: string;
  cc?: string | null;
  dateSent?: string;
  quotedSiteDate?: string | null;
  statusId?: string;
  specificationSectionReference?: string | null;
  message?: string | null;
  description?: string | null;
  projectDocumentTypeId?: string;
};

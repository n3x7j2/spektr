/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RFIUpdateWithIdDto = {
  id?: string;
  revision?: number;
  statusId?: string;
  projectId?: string;
  intent?: string | null;
  customerReferenceId?: string | null;
  submittedByEmployeeId?: string;
  submittedToContactId?: string;
  cc?: string | null;
  dateSent?: string;
  dueDate?: string | null;
  remindDate?: string | null;
  responseDate?: string | null;
  specificationSectionReference?: string | null;
  description?: string | null;
  projectDocumentTypeId?: string;
};

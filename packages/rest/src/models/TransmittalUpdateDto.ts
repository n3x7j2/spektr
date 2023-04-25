/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TransmittalUpdateDto = {
  id?: string;
  statusId?: string;
  projectId?: string;
  dateSent?: string;
  dueDate?: string | null;
  customerOrderReference?: string | null;
  transmittalToContactId?: string;
  transmittalMediumId?: string;
  transmittedByEmployeeId?: string;
  description?: string | null;
  customerReferenceId?: string | null;
  cc?: string | null;
  remindDate?: string | null;
  specificationSectionReference?: string | null;
  revision?: number;
  projectDocumentTypeId?: string;
};

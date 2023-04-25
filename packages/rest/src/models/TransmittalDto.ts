/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentType } from './DocumentType';

export type TransmittalDto = {
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
  creationTime?: string;
  lastModificationTime?: string | null;
  transmittalNumber?: number;
  status?: string | null;
  projectNumber?: string | null;
  projectName?: string | null;
  transmittalToContactFullName?: string | null;
  transmittalToContactEmail?: string | null;
  transmittalMedium?: string | null;
  transmittedByEmployeeName?: string | null;
  documentId?: string | null;
  documentTypeName?: string | null;
  title?: string | null;
  documentType?: DocumentType;
};

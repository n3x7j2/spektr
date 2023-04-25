/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentType } from './DocumentType';

export type RFIDto = {
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
  creationTime?: string;
  lastModificationTime?: string | null;
  documentId?: string | null;
  documentTypeName?: string | null;
  title?: string | null;
  documentType?: DocumentType;
};

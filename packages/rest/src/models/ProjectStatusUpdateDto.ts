/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentType } from './DocumentType';

export type ProjectStatusUpdateDto = {
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
  creationTime?: string;
  lastModificationTime?: string | null;
  documentId?: string | null;
  documentTypeName?: string | null;
  title?: string | null;
  documentType?: DocumentType;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentType } from './DocumentType';

export type OrderAcknowledgementDto = {
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
  creationTime?: string;
  lastModificationTime?: string | null;
  documentId?: string | null;
  documentTypeName?: string | null;
  title?: string | null;
  documentType?: DocumentType;
};

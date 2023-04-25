/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentType } from './DocumentType';

export type SubmittalDto = {
  id?: string;
  statusId?: string;
  projectId?: string;
  quantity?: number | null;
  item?: string | null;
  revision?: number;
  referenceDate?: string | null;
  description?: string | null;
  submittalTypeId?: string;
  transmittalId?: string | null;
  requiredByDate?: string;
  dateSent?: string | null;
  responseDate?: string | null;
  customerReferenceId?: string | null;
  projectDocumentTypeId?: string;
  submittalsPurposeId?: string;
  submittalNumber?: number;
  documentId?: string | null;
  documentTypeName?: string | null;
  title?: string | null;
  documentType?: DocumentType;
  creationTime?: string;
  lastModificationTime?: string | null;
};

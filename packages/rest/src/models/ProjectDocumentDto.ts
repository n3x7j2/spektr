/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentType } from './DocumentType';

export type ProjectDocumentDto = {
  id?: string;
  documentId?: string | null;
  documentType?: string | null;
  title?: string | null;
  dateSent?: string | null;
  status?: string | null;
  statusId?: string;
  type?: DocumentType;
  creationTime?: string;
  lastModificationTime?: string | null;
};

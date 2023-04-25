/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentType } from './DocumentType';

export type ProjectDocumentTypeDto = {
  type?: DocumentType;
  documentIDFormat?: string | null;
  description?: string | null;
  id?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
};

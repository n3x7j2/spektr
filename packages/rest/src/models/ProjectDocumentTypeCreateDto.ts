/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentType } from './DocumentType';

export type ProjectDocumentTypeCreateDto = {
  type?: DocumentType;
  documentIDFormat?: string | null;
  description?: string | null;
};

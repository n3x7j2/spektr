/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectDocumentFileUpdateDto = {
  documentTypeId?: string;
  documentId?: string;
  documentFileURL: string;
  documentFileTitle: string;
  notes?: string | null;
};

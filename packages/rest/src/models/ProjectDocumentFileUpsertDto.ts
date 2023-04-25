/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectDocumentFileUpsertDto = {
  documentTypeId?: string;
  documentId?: string;
  documentFileURL: string;
  documentFileTitle: string;
  notes?: string | null;
  id?: string;
};

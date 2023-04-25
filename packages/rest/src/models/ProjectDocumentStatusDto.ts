/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectDocumentStatusDto = {
  status?: string | null;
  documentTypeId?: string;
  isDefault?: boolean;
  isCompleted?: boolean;
  description?: string | null;
  id?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
};

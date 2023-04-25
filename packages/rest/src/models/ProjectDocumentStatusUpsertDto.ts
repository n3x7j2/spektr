/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectDocumentStatusUpsertDto = {
  status?: string | null;
  documentTypeId?: string;
  isDefault?: boolean;
  isCompleted?: boolean;
  description?: string | null;
  id?: string;
};

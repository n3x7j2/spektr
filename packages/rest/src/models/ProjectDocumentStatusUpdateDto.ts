/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectDocumentStatusUpdateDto = {
  status?: string | null;
  documentTypeId?: string;
  isDefault?: boolean;
  isCompleted?: boolean;
  description?: string | null;
};

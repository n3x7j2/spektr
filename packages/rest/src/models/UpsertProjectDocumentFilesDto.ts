/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectDocumentFileUpsertDto } from './ProjectDocumentFileUpsertDto';

export type UpsertProjectDocumentFilesDto = {
  documentId?: string;
  items?: Array<ProjectDocumentFileUpsertDto> | null;
};

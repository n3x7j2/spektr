/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NoteEntityType } from './NoteEntityType';

export type NoteDto = {
  entityType?: NoteEntityType;
  entityId: string;
  content: string;
  id?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
  creatorId?: string | null;
  avatarUrl?: string | null;
  fullName?: string | null;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NoteEntityType } from './NoteEntityType';

export type NoteCreateDto = {
  entityType?: NoteEntityType;
  entityId: string;
  content: string;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NoteDto } from './NoteDto';

export type PagedResultDtoOfNoteDto = {
  items?: Array<NoteDto> | null;
  totalCount?: number;
};

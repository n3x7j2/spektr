/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TeamDto } from './TeamDto';

export type PagedResultDtoOfTeamDto = {
  items?: Array<TeamDto> | null;
  totalCount?: number;
};

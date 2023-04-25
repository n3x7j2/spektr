/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectDto } from './ProjectDto';

export type PagedResultDtoOfProjectDto = {
  items?: Array<ProjectDto> | null;
  totalCount?: number;
};

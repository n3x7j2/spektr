/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectCloneItem } from './ProjectCloneItem';

export type ProjectCloneDto = {
  projectSourceId?: string;
  newProjectName: string;
  newProjectNumber?: string | null;
  cloneItems?: Array<ProjectCloneItem> | null;
  isNotGenerationCards?: boolean;
};

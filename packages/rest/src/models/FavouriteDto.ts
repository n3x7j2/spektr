/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FavouriteEntityType } from './FavouriteEntityType';

export type FavouriteDto = {
  entityType?: FavouriteEntityType;
  entityId?: string;
  employeeId?: string;
  id?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
};

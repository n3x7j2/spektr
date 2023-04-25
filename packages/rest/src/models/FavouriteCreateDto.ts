/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FavouriteEntityType } from './FavouriteEntityType';

export type FavouriteCreateDto = {
  entityType?: FavouriteEntityType;
  entityId?: string;
  employeeId?: string;
};

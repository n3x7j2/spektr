/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FavouriteEntityType } from './FavouriteEntityType';

export type FavouriteUpdateDto = {
  entityType?: FavouriteEntityType;
  entityId?: string;
  employeeId?: string;
};

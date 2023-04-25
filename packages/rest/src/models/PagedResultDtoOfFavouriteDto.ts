/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FavouriteDto } from './FavouriteDto';

export type PagedResultDtoOfFavouriteDto = {
  items?: Array<FavouriteDto> | null;
  totalCount?: number;
};

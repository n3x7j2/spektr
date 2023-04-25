/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CountryDto } from './CountryDto';

export type PagedResultDtoOfCountryDto = {
  items?: Array<CountryDto> | null;
  totalCount?: number;
};

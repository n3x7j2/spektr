/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CurrenciesDto } from './CurrenciesDto';

export type PagedResultDtoOfCurrenciesDto = {
  items?: Array<CurrenciesDto> | null;
  totalCount?: number;
};

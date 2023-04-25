/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompanyDto } from './CompanyDto';

export type PagedResultDtoOfCompanyDto = {
  items?: Array<CompanyDto> | null;
  totalCount?: number;
};

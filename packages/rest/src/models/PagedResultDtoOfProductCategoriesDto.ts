/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductCategoriesDto } from './ProductCategoriesDto';

export type PagedResultDtoOfProductCategoriesDto = {
  items?: Array<ProductCategoriesDto> | null;
  totalCount?: number;
};

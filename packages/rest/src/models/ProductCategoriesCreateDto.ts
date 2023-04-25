/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductCategoriesCreateDto = {
  productCategory: string;
  productCategoryShort: string;
  description?: string | null;
  sortNr?: number;
  isQuantityControl?: boolean;
};

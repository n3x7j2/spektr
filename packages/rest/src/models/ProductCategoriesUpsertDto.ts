/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductCategoriesUpsertDto = {
  productCategory: string;
  productCategoryShort: string;
  description?: string | null;
  sortNr?: number;
  isQuantityControl?: boolean;
  id?: string;
};

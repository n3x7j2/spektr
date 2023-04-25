/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductCategoriesDto = {
  productCategory: string;
  productCategoryShort: string;
  description?: string | null;
  sortNr?: number;
  isQuantityControl?: boolean;
  id?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
};

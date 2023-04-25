/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryCategoryCreateDto } from './InventoryCategoryCreateDto';
import type { InventoryCategoryUpdateWithIdDto } from './InventoryCategoryUpdateWithIdDto';
import type { InventorySubCategoryCreateDto } from './InventorySubCategoryCreateDto';
import type { InventorySubCategoryUpdateWithIdDto } from './InventorySubCategoryUpdateWithIdDto';

export type InventoryCategoryWithDataUpdateDto = {
  createInventoryCategory?: InventoryCategoryCreateDto;
  updateInventoryCategory?: InventoryCategoryUpdateWithIdDto;
  createInventorySubCategory?: InventorySubCategoryCreateDto;
  updateInventorySubCategory?: InventorySubCategoryUpdateWithIdDto;
};

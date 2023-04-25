/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InventorySubCategoryCreateDto = {
  id?: string;
  inventoryCategoryId?: string;
  subCategoryName?: string | null;
  inventoryGroupFieldDefId?: string;
  inventoryItemFieldDefId?: string;
  phaseCardPrimaryComponentFieldDefId?: string;
  itemGroupIdGenerationRule?: string | null;
  itemIdGenerationRule?: string | null;
  itemGroupDescriptionGenerationRule?: string | null;
  itemDescriptionGenerationRule?: string | null;
  phaseCardPrimaryComponentGenerationRule?: string | null;
  itemNetRule?: string | null;
};

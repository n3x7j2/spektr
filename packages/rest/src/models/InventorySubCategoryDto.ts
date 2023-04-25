/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryDynamicFieldDefinitionDto } from './InventoryDynamicFieldDefinitionDto';

export type InventorySubCategoryDto = {
  id?: string;
  inventoryCategoryId?: string;
  categoryName?: string | null;
  subCategoryName?: string | null;
  inventoryGroupFieldDefId?: string;
  componentField?: string | null;
  groupFieldDefinitions?: Array<InventoryDynamicFieldDefinitionDto> | null;
  itemFieldDefinitions?: Array<InventoryDynamicFieldDefinitionDto> | null;
  netCalculationFieldDefinitions?: Array<InventoryDynamicFieldDefinitionDto> | null;
  phaseCardPrimaryComponentFieldDefinitions?: Array<InventoryDynamicFieldDefinitionDto> | null;
  inventoryItemFieldDefId?: string;
  itemField?: string | null;
  itemGroupIdGenerationRule?: string | null;
  itemIdGenerationRule?: string | null;
  itemGroupDescriptionGenerationRule?: string | null;
  itemDescriptionGenerationRule?: string | null;
  phaseCardPrimaryComponentGenerationRule?: string | null;
  itemNetRule?: string | null;
  creationTime?: string;
  lastModificationTime?: string | null;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArrayProductionDirectiveTaskUpdateDto } from './ArrayProductionDirectiveTaskUpdateDto';
import type { ProductionDirectiveFullCreateDto } from './ProductionDirectiveFullCreateDto';

export type ProductionDirectiveTaskCreateFullDto = {
  productionDirective: ProductionDirectiveFullCreateDto;
  task?: ArrayProductionDirectiveTaskUpdateDto;
};

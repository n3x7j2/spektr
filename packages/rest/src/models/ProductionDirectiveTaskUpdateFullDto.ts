/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArrayProductionDirectiveTaskUpdateDto } from './ArrayProductionDirectiveTaskUpdateDto';
import type { ProductionDirectiveFullUpdateDto } from './ProductionDirectiveFullUpdateDto';

export type ProductionDirectiveTaskUpdateFullDto = {
  productionDirective: ProductionDirectiveFullUpdateDto;
  task?: ArrayProductionDirectiveTaskUpdateDto;
};

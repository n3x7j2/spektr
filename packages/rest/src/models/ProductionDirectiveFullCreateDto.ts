/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DirectiveCreateDto } from './DirectiveCreateDto';
import type { ProductionDirectiveCreateDto } from './ProductionDirectiveCreateDto';

export type ProductionDirectiveFullCreateDto = {
  directive?: DirectiveCreateDto;
  productionDirective?: ProductionDirectiveCreateDto;
};

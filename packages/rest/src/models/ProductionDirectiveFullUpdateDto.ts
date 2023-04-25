/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DirectiveUpdateDto } from './DirectiveUpdateDto';
import type { ProductionDirectiveUpdateDto } from './ProductionDirectiveUpdateDto';

export type ProductionDirectiveFullUpdateDto = {
  directive?: DirectiveUpdateDto;
  productionDirective?: ProductionDirectiveUpdateDto;
};

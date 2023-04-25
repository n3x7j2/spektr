/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DirectiveCreateDto } from './DirectiveCreateDto';
import type { NonProductionDirectiveCreateDto } from './NonProductionDirectiveCreateDto';

export type NonProductionDirectiveFullCreateDto = {
  directive?: DirectiveCreateDto;
  nonProductionDirective?: NonProductionDirectiveCreateDto;
};

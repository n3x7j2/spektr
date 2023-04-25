/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DirectiveUpdateDto } from './DirectiveUpdateDto';
import type { NonProductionDirectiveUpdateDto } from './NonProductionDirectiveUpdateDto';

export type NonProductionDirectiveFullUpdateDto = {
  directive?: DirectiveUpdateDto;
  nonProductionDirective?: NonProductionDirectiveUpdateDto;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DirectiveCategory } from './DirectiveCategory';

export type DirectiveTypeUpdateDto = {
  directiveTypeName?: string | null;
  description?: string | null;
  directiveNumberFormat?: string | null;
  directiveCategory?: DirectiveCategory;
};

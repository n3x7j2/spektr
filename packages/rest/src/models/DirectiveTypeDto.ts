/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DirectiveCategory } from './DirectiveCategory';

export type DirectiveTypeDto = {
  id?: string;
  directiveTypeName?: string | null;
  description?: string | null;
  directiveNumberFormat?: string | null;
  directiveCategory?: DirectiveCategory;
  readonly directiveCategoryStr?: string | null;
  creationTime?: string;
  lastModificationTime?: string | null;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DynamicLookupFieldDataStatus } from './DynamicLookupFieldDataStatus';

export type DynamicLookupFieldDataDropdownItemDto = {
  id?: string;
  fieldValue?: string | null;
  fieldValueShort?: string | null;
  status?: DynamicLookupFieldDataStatus;
};

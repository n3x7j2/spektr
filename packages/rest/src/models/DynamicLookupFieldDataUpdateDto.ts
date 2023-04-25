/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DynamicLookupFieldDataStatus } from './DynamicLookupFieldDataStatus';

export type DynamicLookupFieldDataUpdateDto = {
  fieldName: string;
  fieldValue: string;
  fieldValueShort?: string | null;
  status?: DynamicLookupFieldDataStatus;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DynamicLookupFieldDataStatus } from './DynamicLookupFieldDataStatus';

export type DynamicLookupFieldDataDto = {
  fieldName: string;
  fieldValue: string;
  fieldValueShort?: string | null;
  status?: DynamicLookupFieldDataStatus;
  id?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
};

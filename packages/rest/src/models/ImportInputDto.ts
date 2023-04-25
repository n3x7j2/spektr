/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImportFieldMappingDto } from './ImportFieldMappingDto';

export type ImportInputDto = {
  fieldMappings?: Array<ImportFieldMappingDto> | null;
  fileUrl?: string | null;
  isFirstRowHeader?: boolean;
  csvDelimiter?: string | null;
  csvTextQualifier?: string | null;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PropertyDefineInfoDto } from './PropertyDefineInfoDto';

export type ExportApiInfoDto = {
  name?: string | null;
  url?: string | null;
  parameterSchema?: Array<PropertyDefineInfoDto> | null;
};

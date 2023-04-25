/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LookupSettingProperty } from './LookupSettingProperty';

export type LookupSettingUpdateDto = {
  moduleName: string;
  subModuleName: string;
  lookupName: string;
  exposeFields: Array<LookupSettingProperty>;
  getListEndpoint: string;
  upsertEndpoint: string;
  isInActive?: boolean;
};

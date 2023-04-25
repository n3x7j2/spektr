/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchaseRequestTypeEnum } from './PurchaseRequestTypeEnum';

export type PurchaseRequestTypeUpsertDto = {
  name: string;
  type?: PurchaseRequestTypeEnum;
  id?: string;
};

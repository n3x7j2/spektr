/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchaseOrderTypeEnum } from './PurchaseOrderTypeEnum';

export type PurchaseOrderTypeUpsertDto = {
  name: string;
  type?: PurchaseOrderTypeEnum;
  id?: string;
};

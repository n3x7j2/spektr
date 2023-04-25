/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchaseOrderTypeEnum } from './PurchaseOrderTypeEnum';

export type PurchaseOrderTypeCreateDto = {
  name: string;
  type?: PurchaseOrderTypeEnum;
};

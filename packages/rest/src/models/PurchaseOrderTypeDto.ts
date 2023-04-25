/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchaseOrderTypeEnum } from './PurchaseOrderTypeEnum';

export type PurchaseOrderTypeDto = {
  name: string;
  type?: PurchaseOrderTypeEnum;
  id?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
};

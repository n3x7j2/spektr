/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchaseRequestTypeEnum } from './PurchaseRequestTypeEnum';

export type PurchaseRequestTypeDto = {
  name: string;
  type?: PurchaseRequestTypeEnum;
  id?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
};

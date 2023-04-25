/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchaseOrderCreateDto } from './PurchaseOrderCreateDto';
import type { PurchaseOrdersItemsReceivedUpdateQuantityDto } from './PurchaseOrdersItemsReceivedUpdateQuantityDto';
import type { PurchaseOrderUpdateWithIdDto } from './PurchaseOrderUpdateWithIdDto';
import type { UpsertPurchaseOrderInvoiceItemsDto } from './UpsertPurchaseOrderInvoiceItemsDto';
import type { UpsertPurchaseOrderItemsDto } from './UpsertPurchaseOrderItemsDto';

export type PurchaseOrderWithDataUpdateDto = {
  createPurchaseOrder?: PurchaseOrderCreateDto;
  updatePurchaseOrder?: PurchaseOrderUpdateWithIdDto;
  upsertPurchaseOrderItems?: UpsertPurchaseOrderItemsDto;
  updateQuantityItems?: Array<PurchaseOrdersItemsReceivedUpdateQuantityDto> | null;
  upsertPurchaseOrderInvoiceItems?: UpsertPurchaseOrderInvoiceItemsDto;
};

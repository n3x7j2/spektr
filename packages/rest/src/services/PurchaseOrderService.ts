/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfPurchaseOrderDto } from '../models/PagedResultDtoOfPurchaseOrderDto';
import type { PurchaseOrderCreateDto } from '../models/PurchaseOrderCreateDto';
import type { PurchaseOrderDto } from '../models/PurchaseOrderDto';
import type { PurchaseOrderItemDto } from '../models/PurchaseOrderItemDto';
import type { PurchaseOrderItemInfoDto } from '../models/PurchaseOrderItemInfoDto';
import type { PurchaseOrderItemUpsertDto } from '../models/PurchaseOrderItemUpsertDto';
import type { PurchaseOrderReceiveAllItemInputDto } from '../models/PurchaseOrderReceiveAllItemInputDto';
import type { PurchaseOrdersItemsReceivedCreateDto } from '../models/PurchaseOrdersItemsReceivedCreateDto';
import type { PurchaseOrdersItemsReceivedDto } from '../models/PurchaseOrdersItemsReceivedDto';
import type { PurchaseOrdersItemsReceivedUpdateQuantityDto } from '../models/PurchaseOrdersItemsReceivedUpdateQuantityDto';
import type { PurchaseOrderSummaryByStatusDto } from '../models/PurchaseOrderSummaryByStatusDto';
import type { PurchaseOrderTypeEnum } from '../models/PurchaseOrderTypeEnum';
import type { PurchaseOrderUpdateDto } from '../models/PurchaseOrderUpdateDto';
import type { PurchaseOrderWithDataDto } from '../models/PurchaseOrderWithDataDto';
import type { PurchaseOrderWithDataUpdateDto } from '../models/PurchaseOrderWithDataUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PurchaseOrderService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.PurchaseOrderController.GetAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderDto Success
   * @throws ApiError
   */
  public purchaseOrderGet({
id,
}: {
id: string,
}): CancelablePromise<PurchaseOrderDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-orders/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.PurchaseOrderController.UpdateAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderDto Success
   * @throws ApiError
   */
  public purchaseOrderUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: PurchaseOrderUpdateDto,
}): CancelablePromise<PurchaseOrderDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/purchase-orders/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.PurchaseOrderController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public purchaseOrderDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/purchase-orders/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.PurchaseOrderController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfPurchaseOrderDto Success
   * @throws ApiError
   */
  public purchaseOrderGetList({
disablePagination,
statusId,
supplierId,
isDraft,
type,
sorting,
skipCount,
maxResultCount,
}: {
disablePagination?: boolean,
statusId?: string,
supplierId?: string,
isDraft?: boolean,
type?: PurchaseOrderTypeEnum,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfPurchaseOrderDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-orders',
      query: {
        'DisablePagination': disablePagination,
        'StatusId': statusId,
        'SupplierId': supplierId,
        'IsDraft': isDraft,
        'Type': type,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.PurchaseOrderController.CreateAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderDto Success
   * @throws ApiError
   */
  public purchaseOrderCreate({
requestBody,
}: {
requestBody?: PurchaseOrderCreateDto,
}): CancelablePromise<PurchaseOrderDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-orders',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Summary by Status
   * SpektrERP.Controllers.PurchaseOrderController.GetSummaryByStatusAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderSummaryByStatusDto Success
   * @throws ApiError
   */
  public purchaseOrderGetSummaryByStatus(): CancelablePromise<Array<PurchaseOrderSummaryByStatusDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-orders/summary-by-status',
    });
  }

  /**
   * Get List Item
   * SpektrERP.Controllers.PurchaseOrderController.GetListItemAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderItemInfoDto Success
   * @throws ApiError
   */
  public purchaseOrderGetListItem({
inventoryItemId,
purchaseOrderId,
}: {
inventoryItemId?: string,
purchaseOrderId?: string,
}): CancelablePromise<Array<PurchaseOrderItemInfoDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-orders/items',
      query: {
        'InventoryItemId': inventoryItemId,
        'PurchaseOrderId': purchaseOrderId,
      },
    });
  }

  /**
   * Get List Item by Supplier Id
   * SpektrERP.Controllers.PurchaseOrderController.GetListItemBySupplierIdAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderItemDto Success
   * @throws ApiError
   */
  public purchaseOrderGetListItemBySupplierId({
supplierId,
}: {
supplierId: string,
}): CancelablePromise<Array<PurchaseOrderItemDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-orders/suppliers/{supplierId}/items',
      path: {
        'supplierId': supplierId,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.PurchaseOrderController.UpsertAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderItemDto Success
   * @throws ApiError
   */
  public purchaseOrderUpsert({
id,
requestBody,
}: {
id: string,
requestBody?: Array<PurchaseOrderItemUpsertDto>,
}): CancelablePromise<Array<PurchaseOrderItemDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-orders/{id}/upsert-items',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Receive Item
   * SpektrERP.Controllers.PurchaseOrderController.ReceiveItemAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrdersItemsReceivedDto Success
   * @throws ApiError
   */
  public purchaseOrderReceiveItem({
itemId,
requestBody,
}: {
itemId: string,
requestBody?: PurchaseOrdersItemsReceivedCreateDto,
}): CancelablePromise<PurchaseOrdersItemsReceivedDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-orders/items/{itemId}/received',
      path: {
        'itemId': itemId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Receive All Item
   * SpektrERP.Controllers.PurchaseOrderController.ReceiveAllItemAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrdersItemsReceivedDto Success
   * @throws ApiError
   */
  public purchaseOrderReceiveAllItem({
requestBody,
}: {
requestBody?: PurchaseOrderReceiveAllItemInputDto,
}): CancelablePromise<Array<PurchaseOrdersItemsReceivedDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-orders/items/received-all',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get All Receive Item
   * SpektrERP.Controllers.PurchaseOrderController.GetAllReceiveItemAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrdersItemsReceivedDto Success
   * @throws ApiError
   */
  public purchaseOrderGetAllReceiveItem({
id,
}: {
id: string,
}): CancelablePromise<Array<PurchaseOrdersItemsReceivedDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-orders/{id}/items/received-all',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Delete Received Item
   * SpektrERP.Controllers.PurchaseOrderController.DeleteReceivedItemAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public purchaseOrderDeleteReceivedItem({
receivedItemId,
}: {
receivedItemId: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/purchase-orders/items/received/{receivedItemId}',
      path: {
        'receivedItemId': receivedItemId,
      },
    });
  }

  /**
   * Update Quantity Receive Items
   * SpektrERP.Controllers.PurchaseOrderController.UpdateQuantityReceiveItemsAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrdersItemsReceivedDto Success
   * @throws ApiError
   */
  public purchaseOrderUpdateQuantityReceiveItems({
requestBody,
}: {
requestBody?: Array<PurchaseOrdersItemsReceivedUpdateQuantityDto>,
}): CancelablePromise<Array<PurchaseOrdersItemsReceivedDto>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/purchase-orders/items/receives/quantity',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Update With Data
   * SpektrERP.Controllers.PurchaseOrderController.UpdateWithDataAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderWithDataDto Success
   * @throws ApiError
   */
  public purchaseOrderUpdateWithData({
requestBody,
}: {
requestBody?: PurchaseOrderWithDataUpdateDto,
}): CancelablePromise<PurchaseOrderWithDataDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-orders/purchase-order-with-data',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}

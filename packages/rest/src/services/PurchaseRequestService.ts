/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfPurchaseRequestDto } from '../models/PagedResultDtoOfPurchaseRequestDto';
import type { PagedResultDtoOfPurchaseRequestRequestedItemInfoDto } from '../models/PagedResultDtoOfPurchaseRequestRequestedItemInfoDto';
import type { PurchaseOrderDto } from '../models/PurchaseOrderDto';
import type { PurchaseRequestCreateDto } from '../models/PurchaseRequestCreateDto';
import type { PurchaseRequestDto } from '../models/PurchaseRequestDto';
import type { PurchaseRequestItemPurchaseOrderItemInfoDto } from '../models/PurchaseRequestItemPurchaseOrderItemInfoDto';
import type { PurchaseRequestPurchaseOrderInfoDto } from '../models/PurchaseRequestPurchaseOrderInfoDto';
import type { PurchaseRequestRequestedItemDto } from '../models/PurchaseRequestRequestedItemDto';
import type { PurchaseRequestRequestedItemInfoDto } from '../models/PurchaseRequestRequestedItemInfoDto';
import type { PurchaseRequestRequestedItemUpdateStatusDto } from '../models/PurchaseRequestRequestedItemUpdateStatusDto';
import type { PurchaseRequestUpdateDto } from '../models/PurchaseRequestUpdateDto';
import type { PurchaseRequestWithDataDto } from '../models/PurchaseRequestWithDataDto';
import type { PurchaseRequestWithDataUpdateDto } from '../models/PurchaseRequestWithDataUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PurchaseRequestService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.PurchaseRequestController.GetAsync (SpektrERP.HttpApi)
   * @returns PurchaseRequestDto Success
   * @throws ApiError
   */
  public purchaseRequestGet({
id,
}: {
id: string,
}): CancelablePromise<PurchaseRequestDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-requests/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.PurchaseRequestController.UpdateAsync (SpektrERP.HttpApi)
   * @returns PurchaseRequestDto Success
   * @throws ApiError
   */
  public purchaseRequestUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: PurchaseRequestUpdateDto,
}): CancelablePromise<PurchaseRequestDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/purchase-requests/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.PurchaseRequestController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public purchaseRequestDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/purchase-requests/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.PurchaseRequestController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfPurchaseRequestDto Success
   * @throws ApiError
   */
  public purchaseRequestGetList({
purchaseRequestNumber,
projectId,
requestedById,
supplierId,
dateTimeRequestedFrom,
dateTimeRequestedTo,
purchaseRequestStatusId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
purchaseRequestNumber?: number,
projectId?: string,
requestedById?: string,
supplierId?: string,
dateTimeRequestedFrom?: string,
dateTimeRequestedTo?: string,
purchaseRequestStatusId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfPurchaseRequestDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-requests',
      query: {
        'PurchaseRequestNumber': purchaseRequestNumber,
        'ProjectId': projectId,
        'RequestedById': requestedById,
        'SupplierId': supplierId,
        'DateTimeRequestedFrom': dateTimeRequestedFrom,
        'DateTimeRequestedTo': dateTimeRequestedTo,
        'PurchaseRequestStatusId': purchaseRequestStatusId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.PurchaseRequestController.CreateAsync (SpektrERP.HttpApi)
   * @returns PurchaseRequestDto Success
   * @throws ApiError
   */
  public purchaseRequestCreate({
requestBody,
}: {
requestBody?: PurchaseRequestCreateDto,
}): CancelablePromise<PurchaseRequestDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-requests',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Item
   * SpektrERP.Controllers.PurchaseRequestController.GetListItemAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfPurchaseRequestRequestedItemInfoDto Success
   * @throws ApiError
   */
  public purchaseRequestGetListItem({
request,
purchaseRequestId,
projectId,
purchaseRequestStatusId,
dateTimeRequestedFrom,
dateTimeRequestedTo,
disablePagination,
supplierId,
sorting,
skipCount,
maxResultCount,
}: {
request?: number,
purchaseRequestId?: string,
projectId?: string,
purchaseRequestStatusId?: string,
dateTimeRequestedFrom?: string,
dateTimeRequestedTo?: string,
disablePagination?: boolean,
supplierId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfPurchaseRequestRequestedItemInfoDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-requests/items',
      query: {
        'Request': request,
        'PurchaseRequestId': purchaseRequestId,
        'ProjectId': projectId,
        'PurchaseRequestStatusId': purchaseRequestStatusId,
        'DateTimeRequestedFrom': dateTimeRequestedFrom,
        'DateTimeRequestedTo': dateTimeRequestedTo,
        'DisablePagination': disablePagination,
        'SupplierId': supplierId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Get List Purchase Order Item
   * SpektrERP.Controllers.PurchaseRequestController.GetListPurchaseOrderItemAsync (SpektrERP.HttpApi)
   * @returns PurchaseRequestItemPurchaseOrderItemInfoDto Success
   * @throws ApiError
   */
  public purchaseRequestGetListPurchaseOrderItem({
purchaseRequestRequestedItemId,
}: {
purchaseRequestRequestedItemId: string,
}): CancelablePromise<Array<PurchaseRequestItemPurchaseOrderItemInfoDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-requests/items/{purchaseRequestRequestedItemId}/purchase-orders',
      path: {
        'purchaseRequestRequestedItemId': purchaseRequestRequestedItemId,
      },
    });
  }

  /**
   * Get List Purchase Order
   * SpektrERP.Controllers.PurchaseRequestController.GetListPurchaseOrderAsync (SpektrERP.HttpApi)
   * @returns PurchaseRequestPurchaseOrderInfoDto Success
   * @throws ApiError
   */
  public purchaseRequestGetListPurchaseOrder({
purchaseRequestId,
}: {
purchaseRequestId: string,
}): CancelablePromise<Array<PurchaseRequestPurchaseOrderInfoDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-requests/{purchaseRequestId}/purchase-orders',
      path: {
        'purchaseRequestId': purchaseRequestId,
      },
    });
  }

  /**
   * Update Item Statuses
   * SpektrERP.Controllers.PurchaseRequestController.UpdateItemStatuses (SpektrERP.HttpApi)
   * @returns PurchaseRequestRequestedItemInfoDto Success
   * @throws ApiError
   */
  public purchaseRequestUpdateItemStatuses({
requestBody,
}: {
requestBody?: Array<PurchaseRequestRequestedItemUpdateStatusDto>,
}): CancelablePromise<Array<PurchaseRequestRequestedItemInfoDto>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/purchase-requests/items/status',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Send
   * SpektrERP.Controllers.PurchaseRequestController.Send (SpektrERP.HttpApi)
   * @returns PurchaseOrderDto Success
   * @throws ApiError
   */
  public purchaseRequestSend({
id,
}: {
id: string,
}): CancelablePromise<Array<PurchaseOrderDto>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/purchase-requests/{id}/send',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Upsert Items
   * SpektrERP.Controllers.PurchaseRequestController.UpsertItems (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public purchaseRequestUpsertItems({
id,
requestBody,
}: {
id: string,
requestBody?: Array<PurchaseRequestRequestedItemDto>,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/purchase-requests/{id}/upsert-items',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Drop Down Items
   * SpektrERP.Controllers.PurchaseRequestController.GetDropDownItemsAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public purchaseRequestGetDropDownItems({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-requests/items/lookup',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Update With Data
   * SpektrERP.Controllers.PurchaseRequestController.UpdateWithDataAsync (SpektrERP.HttpApi)
   * @returns PurchaseRequestWithDataDto Success
   * @throws ApiError
   */
  public purchaseRequestUpdateWithData({
requestBody,
}: {
requestBody?: PurchaseRequestWithDataUpdateDto,
}): CancelablePromise<PurchaseRequestWithDataDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-requests/purchase-request-with-data',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}

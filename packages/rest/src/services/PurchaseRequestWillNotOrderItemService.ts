/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfPurchaseRequestWillNotOrderItemDto } from '../models/PagedResultDtoOfPurchaseRequestWillNotOrderItemDto';
import type { PurchaseRequestWillNotOrderItemDto } from '../models/PurchaseRequestWillNotOrderItemDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PurchaseRequestWillNotOrderItemService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.PurchaseRequestWillNotOrderItemController.GetAsync (SpektrERP.HttpApi)
   * @returns PurchaseRequestWillNotOrderItemDto Success
   * @throws ApiError
   */
  public purchaseRequestWillNotOrderItemGet({
id,
}: {
id: string,
}): CancelablePromise<PurchaseRequestWillNotOrderItemDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-request-will-not-order-items/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.PurchaseRequestWillNotOrderItemController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfPurchaseRequestWillNotOrderItemDto Success
   * @throws ApiError
   */
  public purchaseRequestWillNotOrderItemGetList({
disablePagination,
purchaseRequestRequestedItemId,
purchaseRequestId,
sorting,
skipCount,
maxResultCount,
}: {
disablePagination?: boolean,
purchaseRequestRequestedItemId?: string,
purchaseRequestId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfPurchaseRequestWillNotOrderItemDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-request-will-not-order-items',
      query: {
        'DisablePagination': disablePagination,
        'PurchaseRequestRequestedItemId': purchaseRequestRequestedItemId,
        'PurchaseRequestId': purchaseRequestId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

}

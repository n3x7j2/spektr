/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfPurchaseOrderStatusDto } from '../models/PagedResultDtoOfPurchaseOrderStatusDto';
import type { PurchaseOrderStatusCreateDto } from '../models/PurchaseOrderStatusCreateDto';
import type { PurchaseOrderStatusDropDownDto } from '../models/PurchaseOrderStatusDropDownDto';
import type { PurchaseOrderStatusDto } from '../models/PurchaseOrderStatusDto';
import type { PurchaseOrderStatusUpdateDto } from '../models/PurchaseOrderStatusUpdateDto';
import type { PurchaseOrderStatusUpsertDto } from '../models/PurchaseOrderStatusUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PurchaseOrderStatusService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.PurchaseOrderStatusController.GetAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderStatusDto Success
   * @throws ApiError
   */
  public purchaseOrderStatusGet({
id,
}: {
id: string,
}): CancelablePromise<PurchaseOrderStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-order-statuses/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.PurchaseOrderStatusController.UpdateAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderStatusDto Success
   * @throws ApiError
   */
  public purchaseOrderStatusUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: PurchaseOrderStatusUpdateDto,
}): CancelablePromise<PurchaseOrderStatusDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/purchase-order-statuses/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.PurchaseOrderStatusController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public purchaseOrderStatusDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/purchase-order-statuses/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.PurchaseOrderStatusController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfPurchaseOrderStatusDto Success
   * @throws ApiError
   */
  public purchaseOrderStatusGetList({
status,
sorting,
skipCount,
maxResultCount,
}: {
status?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfPurchaseOrderStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-order-statuses',
      query: {
        'Status': status,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.PurchaseOrderStatusController.CreateAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderStatusDto Success
   * @throws ApiError
   */
  public purchaseOrderStatusCreate({
requestBody,
}: {
requestBody?: PurchaseOrderStatusCreateDto,
}): CancelablePromise<PurchaseOrderStatusDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-order-statuses',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down
   * SpektrERP.Controllers.PurchaseOrderStatusController.GetListDropDownAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderStatusDropDownDto Success
   * @throws ApiError
   */
  public purchaseOrderStatusGetListDropDown({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<PurchaseOrderStatusDropDownDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-order-statuses/lookups',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.PurchaseOrderStatusController.UpsertAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderStatusDto Success
   * @throws ApiError
   */
  public purchaseOrderStatusUpsert({
requestBody,
}: {
requestBody?: Array<PurchaseOrderStatusUpsertDto>,
}): CancelablePromise<Array<PurchaseOrderStatusDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-order-statuses/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}

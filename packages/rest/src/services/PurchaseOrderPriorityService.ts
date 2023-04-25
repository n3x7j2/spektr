/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfPurchaseOrderPriorityDto } from '../models/PagedResultDtoOfPurchaseOrderPriorityDto';
import type { PurchaseOrderPriorityCreateDto } from '../models/PurchaseOrderPriorityCreateDto';
import type { PurchaseOrderPriorityDto } from '../models/PurchaseOrderPriorityDto';
import type { PurchaseOrderPriorityUpdateDto } from '../models/PurchaseOrderPriorityUpdateDto';
import type { PurchaseOrderPriorityUpsertDto } from '../models/PurchaseOrderPriorityUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PurchaseOrderPriorityService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.PurchaseOrderPriorityController.GetAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderPriorityDto Success
   * @throws ApiError
   */
  public purchaseOrderPriorityGet({
id,
}: {
id: string,
}): CancelablePromise<PurchaseOrderPriorityDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-order-priorities/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.PurchaseOrderPriorityController.UpdateAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderPriorityDto Success
   * @throws ApiError
   */
  public purchaseOrderPriorityUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: PurchaseOrderPriorityUpdateDto,
}): CancelablePromise<PurchaseOrderPriorityDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/purchase-order-priorities/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.PurchaseOrderPriorityController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public purchaseOrderPriorityDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/purchase-order-priorities/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.PurchaseOrderPriorityController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfPurchaseOrderPriorityDto Success
   * @throws ApiError
   */
  public purchaseOrderPriorityGetList({
priority,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
priority?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfPurchaseOrderPriorityDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-order-priorities',
      query: {
        'Priority': priority,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.PurchaseOrderPriorityController.CreateAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderPriorityDto Success
   * @throws ApiError
   */
  public purchaseOrderPriorityCreate({
requestBody,
}: {
requestBody?: PurchaseOrderPriorityCreateDto,
}): CancelablePromise<PurchaseOrderPriorityDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-order-priorities',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down
   * SpektrERP.Controllers.PurchaseOrderPriorityController.GetListDropDownAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public purchaseOrderPriorityGetListDropDown({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-order-priorities/lookups',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.PurchaseOrderPriorityController.UpsertAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderPriorityDto Success
   * @throws ApiError
   */
  public purchaseOrderPriorityUpsert({
requestBody,
}: {
requestBody?: Array<PurchaseOrderPriorityUpsertDto>,
}): CancelablePromise<Array<PurchaseOrderPriorityDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-order-priorities/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}

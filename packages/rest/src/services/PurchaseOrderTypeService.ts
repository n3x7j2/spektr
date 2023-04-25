/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfPurchaseOrderTypeDto } from '../models/PagedResultDtoOfPurchaseOrderTypeDto';
import type { PurchaseOrderTypeCreateDto } from '../models/PurchaseOrderTypeCreateDto';
import type { PurchaseOrderTypeDto } from '../models/PurchaseOrderTypeDto';
import type { PurchaseOrderTypeEnum } from '../models/PurchaseOrderTypeEnum';
import type { PurchaseOrderTypeUpdateDto } from '../models/PurchaseOrderTypeUpdateDto';
import type { PurchaseOrderTypeUpsertDto } from '../models/PurchaseOrderTypeUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PurchaseOrderTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.PurchaseOrderTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderTypeDto Success
   * @throws ApiError
   */
  public purchaseOrderTypeGet({
id,
}: {
id: string,
}): CancelablePromise<PurchaseOrderTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-order-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.PurchaseOrderTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderTypeDto Success
   * @throws ApiError
   */
  public purchaseOrderTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: PurchaseOrderTypeUpdateDto,
}): CancelablePromise<PurchaseOrderTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/purchase-order-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.PurchaseOrderTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public purchaseOrderTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/purchase-order-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.PurchaseOrderTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfPurchaseOrderTypeDto Success
   * @throws ApiError
   */
  public purchaseOrderTypeGetList({
name,
type,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
name?: string,
type?: PurchaseOrderTypeEnum,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfPurchaseOrderTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-order-types',
      query: {
        'Name': name,
        'Type': type,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.PurchaseOrderTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderTypeDto Success
   * @throws ApiError
   */
  public purchaseOrderTypeCreate({
requestBody,
}: {
requestBody?: PurchaseOrderTypeCreateDto,
}): CancelablePromise<PurchaseOrderTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-order-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.PurchaseOrderTypeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderTypeDto Success
   * @throws ApiError
   */
  public purchaseOrderTypeUpsert({
requestBody,
}: {
requestBody?: Array<PurchaseOrderTypeUpsertDto>,
}): CancelablePromise<Array<PurchaseOrderTypeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-order-types/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}

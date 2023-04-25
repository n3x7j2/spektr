/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfPurchaseRequestTypeDto } from '../models/PagedResultDtoOfPurchaseRequestTypeDto';
import type { PurchaseRequestTypeCreateDto } from '../models/PurchaseRequestTypeCreateDto';
import type { PurchaseRequestTypeDto } from '../models/PurchaseRequestTypeDto';
import type { PurchaseRequestTypeEnum } from '../models/PurchaseRequestTypeEnum';
import type { PurchaseRequestTypeUpdateDto } from '../models/PurchaseRequestTypeUpdateDto';
import type { PurchaseRequestTypeUpsertDto } from '../models/PurchaseRequestTypeUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PurchaseRequestTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.PurchaseRequestTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns PurchaseRequestTypeDto Success
   * @throws ApiError
   */
  public purchaseRequestTypeGet({
id,
}: {
id: string,
}): CancelablePromise<PurchaseRequestTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-request-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.PurchaseRequestTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns PurchaseRequestTypeDto Success
   * @throws ApiError
   */
  public purchaseRequestTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: PurchaseRequestTypeUpdateDto,
}): CancelablePromise<PurchaseRequestTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/purchase-request-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.PurchaseRequestTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public purchaseRequestTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/purchase-request-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.PurchaseRequestTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfPurchaseRequestTypeDto Success
   * @throws ApiError
   */
  public purchaseRequestTypeGetList({
name,
type,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
name?: string,
type?: PurchaseRequestTypeEnum,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfPurchaseRequestTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-request-types',
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
   * SpektrERP.Controllers.PurchaseRequestTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns PurchaseRequestTypeDto Success
   * @throws ApiError
   */
  public purchaseRequestTypeCreate({
requestBody,
}: {
requestBody?: PurchaseRequestTypeCreateDto,
}): CancelablePromise<PurchaseRequestTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-request-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.PurchaseRequestTypeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns PurchaseRequestTypeDto Success
   * @throws ApiError
   */
  public purchaseRequestTypeUpsert({
requestBody,
}: {
requestBody?: Array<PurchaseRequestTypeUpsertDto>,
}): CancelablePromise<Array<PurchaseRequestTypeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-request-types/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}

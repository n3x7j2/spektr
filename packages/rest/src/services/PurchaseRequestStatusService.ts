/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfPurchaseRequestStatusDto } from '../models/PagedResultDtoOfPurchaseRequestStatusDto';
import type { PurchaseRequestStatusCreateDto } from '../models/PurchaseRequestStatusCreateDto';
import type { PurchaseRequestStatusDto } from '../models/PurchaseRequestStatusDto';
import type { PurchaseRequestStatusType } from '../models/PurchaseRequestStatusType';
import type { PurchaseRequestStatusUpdateDto } from '../models/PurchaseRequestStatusUpdateDto';
import type { PurchaseRequestStatusUpsertDto } from '../models/PurchaseRequestStatusUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PurchaseRequestStatusService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.PurchaseRequestStatusController.GetAsync (SpektrERP.HttpApi)
   * @returns PurchaseRequestStatusDto Success
   * @throws ApiError
   */
  public purchaseRequestStatusGet({
id,
}: {
id: string,
}): CancelablePromise<PurchaseRequestStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-request-statuses/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.PurchaseRequestStatusController.UpdateAsync (SpektrERP.HttpApi)
   * @returns PurchaseRequestStatusDto Success
   * @throws ApiError
   */
  public purchaseRequestStatusUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: PurchaseRequestStatusUpdateDto,
}): CancelablePromise<PurchaseRequestStatusDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/purchase-request-statuses/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.PurchaseRequestStatusController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public purchaseRequestStatusDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/purchase-request-statuses/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.PurchaseRequestStatusController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfPurchaseRequestStatusDto Success
   * @throws ApiError
   */
  public purchaseRequestStatusGetList({
status,
statusType,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
status?: string,
statusType?: PurchaseRequestStatusType,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfPurchaseRequestStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-request-statuses',
      query: {
        'Status': status,
        'StatusType': statusType,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.PurchaseRequestStatusController.CreateAsync (SpektrERP.HttpApi)
   * @returns PurchaseRequestStatusDto Success
   * @throws ApiError
   */
  public purchaseRequestStatusCreate({
requestBody,
}: {
requestBody?: PurchaseRequestStatusCreateDto,
}): CancelablePromise<PurchaseRequestStatusDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-request-statuses',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.PurchaseRequestStatusController.UpsertAsync (SpektrERP.HttpApi)
   * @returns PurchaseRequestStatusDto Success
   * @throws ApiError
   */
  public purchaseRequestStatusUpsert({
requestBody,
}: {
requestBody?: Array<PurchaseRequestStatusUpsertDto>,
}): CancelablePromise<Array<PurchaseRequestStatusDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-request-statuses/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InventoryItemGroupBatchCreateDto } from '../models/InventoryItemGroupBatchCreateDto';
import type { InventoryItemGroupBatchDto } from '../models/InventoryItemGroupBatchDto';
import type { InventoryItemGroupBatchUpdateDto } from '../models/InventoryItemGroupBatchUpdateDto';
import type { PagedResultDtoOfInventoryItemGroupBatchDto } from '../models/PagedResultDtoOfInventoryItemGroupBatchDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventoryItemGroupBatchService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.InventoryItemGroupBatchController.GetAsync (SpektrERP.HttpApi)
   * @returns InventoryItemGroupBatchDto Success
   * @throws ApiError
   */
  public inventoryItemGroupBatchGet({
id,
}: {
id: string,
}): CancelablePromise<InventoryItemGroupBatchDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-group-batches/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.InventoryItemGroupBatchController.UpdateAsync (SpektrERP.HttpApi)
   * @returns InventoryItemGroupBatchDto Success
   * @throws ApiError
   */
  public inventoryItemGroupBatchUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: InventoryItemGroupBatchUpdateDto,
}): CancelablePromise<InventoryItemGroupBatchDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-item-group-batches/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.InventoryItemGroupBatchController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryItemGroupBatchDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/inventory-item-group-batches/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.InventoryItemGroupBatchController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfInventoryItemGroupBatchDto Success
   * @throws ApiError
   */
  public inventoryItemGroupBatchGetList({
batch,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
batch?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfInventoryItemGroupBatchDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-group-batches',
      query: {
        'Batch': batch,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.InventoryItemGroupBatchController.CreateAsync (SpektrERP.HttpApi)
   * @returns InventoryItemGroupBatchDto Success
   * @throws ApiError
   */
  public inventoryItemGroupBatchCreate({
requestBody,
}: {
requestBody?: InventoryItemGroupBatchCreateDto,
}): CancelablePromise<InventoryItemGroupBatchDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-item-group-batches',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}

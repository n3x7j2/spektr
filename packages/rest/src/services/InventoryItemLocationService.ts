/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InventoryItemLocationCreateDto } from '../models/InventoryItemLocationCreateDto';
import type { InventoryItemLocationDto } from '../models/InventoryItemLocationDto';
import type { InventoryItemLocationUpdateDto } from '../models/InventoryItemLocationUpdateDto';
import type { InventoryItemLocationUpsertDto } from '../models/InventoryItemLocationUpsertDto';
import type { PagedResultDtoOfInventoryItemLocationDto } from '../models/PagedResultDtoOfInventoryItemLocationDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventoryItemLocationService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.InventoryItemLocationController.GetAsync (SpektrERP.HttpApi)
   * @returns InventoryItemLocationDto Success
   * @throws ApiError
   */
  public inventoryItemLocationGet({
id,
}: {
id: string,
}): CancelablePromise<InventoryItemLocationDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-locations/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.InventoryItemLocationController.UpdateAsync (SpektrERP.HttpApi)
   * @returns InventoryItemLocationDto Success
   * @throws ApiError
   */
  public inventoryItemLocationUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: InventoryItemLocationUpdateDto,
}): CancelablePromise<InventoryItemLocationDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-item-locations/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.InventoryItemLocationController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryItemLocationDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/inventory-item-locations/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.InventoryItemLocationController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfInventoryItemLocationDto Success
   * @throws ApiError
   */
  public inventoryItemLocationGetList({
inventoryItemId,
disablePagination,
isHaveQuantity,
sorting,
skipCount,
maxResultCount,
}: {
inventoryItemId?: string,
disablePagination?: boolean,
isHaveQuantity?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfInventoryItemLocationDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-locations',
      query: {
        'InventoryItemId': inventoryItemId,
        'DisablePagination': disablePagination,
        'IsHaveQuantity': isHaveQuantity,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.InventoryItemLocationController.CreateAsync (SpektrERP.HttpApi)
   * @returns InventoryItemLocationDto Success
   * @throws ApiError
   */
  public inventoryItemLocationCreate({
requestBody,
}: {
requestBody?: InventoryItemLocationCreateDto,
}): CancelablePromise<InventoryItemLocationDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-item-locations',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.InventoryItemLocationController.UpsertAsync (SpektrERP.HttpApi)
   * @returns InventoryItemLocationDto Success
   * @throws ApiError
   */
  public inventoryItemLocationUpsert({
inventoryItemId,
requestBody,
}: {
inventoryItemId: string,
requestBody?: Array<InventoryItemLocationUpsertDto>,
}): CancelablePromise<Array<InventoryItemLocationDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-item-locations/upserts/{inventoryItemId}',
      path: {
        'inventoryItemId': inventoryItemId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}

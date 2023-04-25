/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InventoryLocationCreateDto } from '../models/InventoryLocationCreateDto';
import type { InventoryLocationDto } from '../models/InventoryLocationDto';
import type { InventoryLocationUpdateDto } from '../models/InventoryLocationUpdateDto';
import type { InventoryLocationUpsertDto } from '../models/InventoryLocationUpsertDto';
import type { PagedResultDtoOfInventoryLocationDto } from '../models/PagedResultDtoOfInventoryLocationDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventoryLocationService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.InventoryLocationController.GetAsync (SpektrERP.HttpApi)
   * @returns InventoryLocationDto Success
   * @throws ApiError
   */
  public inventoryLocationGet({
id,
}: {
id: string,
}): CancelablePromise<InventoryLocationDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-locations/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.InventoryLocationController.UpdateAsync (SpektrERP.HttpApi)
   * @returns InventoryLocationDto Success
   * @throws ApiError
   */
  public inventoryLocationUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: InventoryLocationUpdateDto,
}): CancelablePromise<InventoryLocationDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-locations/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.InventoryLocationController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryLocationDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/inventory-locations/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.InventoryLocationController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfInventoryLocationDto Success
   * @throws ApiError
   */
  public inventoryLocationGetList({
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfInventoryLocationDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-locations',
      query: {
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.InventoryLocationController.CreateAsync (SpektrERP.HttpApi)
   * @returns InventoryLocationDto Success
   * @throws ApiError
   */
  public inventoryLocationCreate({
requestBody,
}: {
requestBody?: InventoryLocationCreateDto,
}): CancelablePromise<InventoryLocationDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-locations',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.InventoryLocationController.UpsertAsync (SpektrERP.HttpApi)
   * @returns InventoryLocationDto Success
   * @throws ApiError
   */
  public inventoryLocationUpsert({
requestBody,
}: {
requestBody?: Array<InventoryLocationUpsertDto>,
}): CancelablePromise<Array<InventoryLocationDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-locations/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}

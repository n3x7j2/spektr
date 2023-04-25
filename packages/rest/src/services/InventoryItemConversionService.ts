/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InventoryItemConversionCreateDto } from '../models/InventoryItemConversionCreateDto';
import type { InventoryItemConversionDto } from '../models/InventoryItemConversionDto';
import type { InventoryItemConversionUpdateDto } from '../models/InventoryItemConversionUpdateDto';
import type { InventoryItemConversionUpsertDto } from '../models/InventoryItemConversionUpsertDto';
import type { PagedResultDtoOfInventoryItemConversionDto } from '../models/PagedResultDtoOfInventoryItemConversionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventoryItemConversionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.InventoryItemConversionController.GetAsync (SpektrERP.HttpApi)
   * @returns InventoryItemConversionDto Success
   * @throws ApiError
   */
  public inventoryItemConversionGet({
id,
}: {
id: string,
}): CancelablePromise<InventoryItemConversionDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-conversions/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.InventoryItemConversionController.UpdateAsync (SpektrERP.HttpApi)
   * @returns InventoryItemConversionDto Success
   * @throws ApiError
   */
  public inventoryItemConversionUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: InventoryItemConversionUpdateDto,
}): CancelablePromise<InventoryItemConversionDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-item-conversions/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.InventoryItemConversionController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryItemConversionDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/inventory-item-conversions/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.InventoryItemConversionController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfInventoryItemConversionDto Success
   * @throws ApiError
   */
  public inventoryItemConversionGetList({
inventoryItemId,
disablePagination,
inventoryItemConversionTypeId,
sorting,
skipCount,
maxResultCount,
}: {
inventoryItemId?: string,
disablePagination?: boolean,
inventoryItemConversionTypeId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfInventoryItemConversionDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-conversions',
      query: {
        'InventoryItemId': inventoryItemId,
        'DisablePagination': disablePagination,
        'InventoryItemConversionTypeId': inventoryItemConversionTypeId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.InventoryItemConversionController.CreateAsync (SpektrERP.HttpApi)
   * @returns InventoryItemConversionDto Success
   * @throws ApiError
   */
  public inventoryItemConversionCreate({
requestBody,
}: {
requestBody?: InventoryItemConversionCreateDto,
}): CancelablePromise<InventoryItemConversionDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-item-conversions',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.InventoryItemConversionController.UpsertAsync (SpektrERP.HttpApi)
   * @returns InventoryItemConversionDto Success
   * @throws ApiError
   */
  public inventoryItemConversionUpsert({
inventoryItemId,
requestBody,
}: {
inventoryItemId: string,
requestBody?: Array<InventoryItemConversionUpsertDto>,
}): CancelablePromise<Array<InventoryItemConversionDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-item-conversions/upserts/{inventoryItemId}',
      path: {
        'inventoryItemId': inventoryItemId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}

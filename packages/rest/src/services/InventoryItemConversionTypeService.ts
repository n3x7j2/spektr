/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InventoryItemConversionTypeCreateDto } from '../models/InventoryItemConversionTypeCreateDto';
import type { InventoryItemConversionTypeDto } from '../models/InventoryItemConversionTypeDto';
import type { InventoryItemConversionTypeUpdateDto } from '../models/InventoryItemConversionTypeUpdateDto';
import type { InventoryItemConversionTypeUpsertDto } from '../models/InventoryItemConversionTypeUpsertDto';
import type { PagedResultDtoOfInventoryItemConversionTypeDto } from '../models/PagedResultDtoOfInventoryItemConversionTypeDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventoryItemConversionTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.InventoryItemConversionTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns InventoryItemConversionTypeDto Success
   * @throws ApiError
   */
  public inventoryItemConversionTypeGet({
id,
}: {
id: string,
}): CancelablePromise<InventoryItemConversionTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-conversion-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.InventoryItemConversionTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns InventoryItemConversionTypeDto Success
   * @throws ApiError
   */
  public inventoryItemConversionTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: InventoryItemConversionTypeUpdateDto,
}): CancelablePromise<InventoryItemConversionTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-item-conversion-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.InventoryItemConversionTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryItemConversionTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/inventory-item-conversion-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.InventoryItemConversionTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfInventoryItemConversionTypeDto Success
   * @throws ApiError
   */
  public inventoryItemConversionTypeGetList({
conversionType,
isPurchasing,
isEngineering,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
conversionType?: string,
isPurchasing?: boolean,
isEngineering?: boolean,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfInventoryItemConversionTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-conversion-types',
      query: {
        'ConversionType': conversionType,
        'IsPurchasing': isPurchasing,
        'IsEngineering': isEngineering,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.InventoryItemConversionTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns InventoryItemConversionTypeDto Success
   * @throws ApiError
   */
  public inventoryItemConversionTypeCreate({
requestBody,
}: {
requestBody?: InventoryItemConversionTypeCreateDto,
}): CancelablePromise<InventoryItemConversionTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-item-conversion-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.InventoryItemConversionTypeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns InventoryItemConversionTypeDto Success
   * @throws ApiError
   */
  public inventoryItemConversionTypeUpsert({
requestBody,
}: {
requestBody?: Array<InventoryItemConversionTypeUpsertDto>,
}): CancelablePromise<Array<InventoryItemConversionTypeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-item-conversion-types/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}

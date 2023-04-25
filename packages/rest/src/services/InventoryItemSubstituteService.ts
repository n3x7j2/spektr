/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InventoryItemSubstituteCreateDto } from '../models/InventoryItemSubstituteCreateDto';
import type { InventoryItemSubstituteDirection } from '../models/InventoryItemSubstituteDirection';
import type { InventoryItemSubstituteDto } from '../models/InventoryItemSubstituteDto';
import type { InventoryItemSubstituteInfoDto } from '../models/InventoryItemSubstituteInfoDto';
import type { InventoryItemSubstituteUpdateDto } from '../models/InventoryItemSubstituteUpdateDto';
import type { InventoryItemSubstituteUpsertDto } from '../models/InventoryItemSubstituteUpsertDto';
import type { PagedResultDtoOfInventoryItemSubstituteDto } from '../models/PagedResultDtoOfInventoryItemSubstituteDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventoryItemSubstituteService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.InventoryItemSubstituteController.GetAsync (SpektrERP.HttpApi)
   * @returns InventoryItemSubstituteDto Success
   * @throws ApiError
   */
  public inventoryItemSubstituteGet({
id,
}: {
id: string,
}): CancelablePromise<InventoryItemSubstituteDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-substitutes/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.InventoryItemSubstituteController.UpdateAsync (SpektrERP.HttpApi)
   * @returns InventoryItemSubstituteDto Success
   * @throws ApiError
   */
  public inventoryItemSubstituteUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: InventoryItemSubstituteUpdateDto,
}): CancelablePromise<InventoryItemSubstituteDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-item-substitutes/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.InventoryItemSubstituteController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryItemSubstituteDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/inventory-item-substitutes/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.InventoryItemSubstituteController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfInventoryItemSubstituteDto Success
   * @throws ApiError
   */
  public inventoryItemSubstituteGetList({
inventoryItemId,
direction,
directionInventoryItemId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
inventoryItemId?: string,
direction?: InventoryItemSubstituteDirection,
directionInventoryItemId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfInventoryItemSubstituteDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-substitutes',
      query: {
        'InventoryItemId': inventoryItemId,
        'Direction': direction,
        'DirectionInventoryItemId': directionInventoryItemId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.InventoryItemSubstituteController.CreateAsync (SpektrERP.HttpApi)
   * @returns InventoryItemSubstituteDto Success
   * @throws ApiError
   */
  public inventoryItemSubstituteCreate({
requestBody,
}: {
requestBody?: InventoryItemSubstituteCreateDto,
}): CancelablePromise<InventoryItemSubstituteDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-item-substitutes',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get by Inventory Item Id
   * SpektrERP.Controllers.InventoryItemSubstituteController.GetByInventoryItemId (SpektrERP.HttpApi)
   * @returns InventoryItemSubstituteInfoDto Success
   * @throws ApiError
   */
  public inventoryItemSubstituteGetByInventoryItemId({
inventoryItemId,
}: {
inventoryItemId: string,
}): CancelablePromise<Array<InventoryItemSubstituteInfoDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-substitutes/inventory-items/{inventoryItemId}',
      path: {
        'inventoryItemId': inventoryItemId,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.InventoryItemSubstituteController.UpsertAsync (SpektrERP.HttpApi)
   * @returns InventoryItemSubstituteDto Success
   * @throws ApiError
   */
  public inventoryItemSubstituteUpsert({
inventoryItemId,
requestBody,
}: {
inventoryItemId: string,
requestBody?: Array<InventoryItemSubstituteUpsertDto>,
}): CancelablePromise<Array<InventoryItemSubstituteDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-item-substitutes/upserts/{inventoryItemId}',
      path: {
        'inventoryItemId': inventoryItemId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}

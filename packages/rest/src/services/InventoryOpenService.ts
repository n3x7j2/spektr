/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InventoryItemOpenMoveQuantityDto } from '../models/InventoryItemOpenMoveQuantityDto';
import type { InventoryOpenCreateDto } from '../models/InventoryOpenCreateDto';
import type { InventoryOpenDto } from '../models/InventoryOpenDto';
import type { InventoryOpenMoveQuantityDto } from '../models/InventoryOpenMoveQuantityDto';
import type { InventoryOpenUpdateDto } from '../models/InventoryOpenUpdateDto';
import type { PagedResultDtoOfInventoryOpenDto } from '../models/PagedResultDtoOfInventoryOpenDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventoryOpenService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.InventoryOpenController.GetAsync (SpektrERP.HttpApi)
   * @returns InventoryOpenDto Success
   * @throws ApiError
   */
  public inventoryOpenGet({
id,
}: {
id: string,
}): CancelablePromise<InventoryOpenDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-opens/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.InventoryOpenController.UpdateAsync (SpektrERP.HttpApi)
   * @returns InventoryOpenDto Success
   * @throws ApiError
   */
  public inventoryOpenUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: InventoryOpenUpdateDto,
}): CancelablePromise<InventoryOpenDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-opens/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.InventoryOpenController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryOpenDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/inventory-opens/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.InventoryOpenController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfInventoryOpenDto Success
   * @throws ApiError
   */
  public inventoryOpenGetList({
inventoryItemId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
inventoryItemId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfInventoryOpenDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-opens',
      query: {
        'InventoryItemId': inventoryItemId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.InventoryOpenController.CreateAsync (SpektrERP.HttpApi)
   * @returns InventoryOpenDto Success
   * @throws ApiError
   */
  public inventoryOpenCreate({
requestBody,
}: {
requestBody?: InventoryOpenCreateDto,
}): CancelablePromise<InventoryOpenDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-opens',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Move quantity from Inventory Open to Inventory Project Specific
   * @returns string Success
   * @throws ApiError
   */
  public inventoryOpenMoveQuantityToProjectSpecific({
id,
requestBody,
}: {
id: string,
requestBody?: InventoryOpenMoveQuantityDto,
}): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-opens/{id}/move-quantity',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Move quantity from Inventory to Inventory Project Specific
   * @returns any Success
   * @throws ApiError
   */
  public inventoryOpenMoveInventoryItemQuantityToProjectSpecific({
requestBody,
}: {
requestBody?: InventoryItemOpenMoveQuantityDto,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-opens/move-quantity',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}

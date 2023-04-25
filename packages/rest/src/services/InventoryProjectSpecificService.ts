/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InventoryProjectSpecificCreateDto } from '../models/InventoryProjectSpecificCreateDto';
import type { InventoryProjectSpecificDto } from '../models/InventoryProjectSpecificDto';
import type { InventoryProjectSpecificUpdateDto } from '../models/InventoryProjectSpecificUpdateDto';
import type { InventoryProjectSpecificUpdateEstimatedUsageDateDto } from '../models/InventoryProjectSpecificUpdateEstimatedUsageDateDto';
import type { MoveInventoryItemBetweenProjectDto } from '../models/MoveInventoryItemBetweenProjectDto';
import type { PagedResultDtoOfInventoryProjectSpecificDto } from '../models/PagedResultDtoOfInventoryProjectSpecificDto';
import type { ProjectSpecificMoveQuantityDto } from '../models/ProjectSpecificMoveQuantityDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventoryProjectSpecificService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.InventoryProjectSpecificController.GetAsync (SpektrERP.HttpApi)
   * @returns InventoryProjectSpecificDto Success
   * @throws ApiError
   */
  public inventoryProjectSpecificGet({
id,
}: {
id: string,
}): CancelablePromise<InventoryProjectSpecificDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-project-specifics/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.InventoryProjectSpecificController.UpdateAsync (SpektrERP.HttpApi)
   * @returns InventoryProjectSpecificDto Success
   * @throws ApiError
   */
  public inventoryProjectSpecificUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: InventoryProjectSpecificUpdateDto,
}): CancelablePromise<InventoryProjectSpecificDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-project-specifics/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.InventoryProjectSpecificController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryProjectSpecificDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/inventory-project-specifics/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.InventoryProjectSpecificController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfInventoryProjectSpecificDto Success
   * @throws ApiError
   */
  public inventoryProjectSpecificGetList({
inventoryItemId,
projectId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
inventoryItemId?: string,
projectId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfInventoryProjectSpecificDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-project-specifics',
      query: {
        'InventoryItemId': inventoryItemId,
        'ProjectId': projectId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.InventoryProjectSpecificController.CreateAsync (SpektrERP.HttpApi)
   * @returns InventoryProjectSpecificDto Success
   * @throws ApiError
   */
  public inventoryProjectSpecificCreate({
requestBody,
}: {
requestBody?: InventoryProjectSpecificCreateDto,
}): CancelablePromise<InventoryProjectSpecificDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-project-specifics',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Update List Estimated Usage Date
   * SpektrERP.Controllers.InventoryProjectSpecificController.UpdateListEstimatedUsageDate (SpektrERP.HttpApi)
   * @returns InventoryProjectSpecificDto Success
   * @throws ApiError
   */
  public inventoryProjectSpecificUpdateListEstimatedUsageDate({
requestBody,
}: {
requestBody?: Array<InventoryProjectSpecificUpdateEstimatedUsageDateDto>,
}): CancelablePromise<Array<InventoryProjectSpecificDto>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-project-specifics/estimated-usage-dates',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Move quantity from Project Specific to Inventory Open
   * @returns string Success
   * @throws ApiError
   */
  public inventoryProjectSpecificMoveQuantityToProjectSpecific({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectSpecificMoveQuantityDto,
}): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-project-specifics/{id}/move-quantity',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Move Inventory Item between Projects
   * @returns InventoryProjectSpecificDto Success
   * @throws ApiError
   */
  public inventoryProjectSpecificMoveInventoryItemBetweenProjects({
requestBody,
}: {
requestBody?: MoveInventoryItemBetweenProjectDto,
}): CancelablePromise<InventoryProjectSpecificDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-project-specifics/move-inventory-item-between-projects',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}

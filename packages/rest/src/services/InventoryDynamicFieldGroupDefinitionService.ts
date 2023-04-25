/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InventoryDynamicFieldGroupDefinitionCreateDto } from '../models/InventoryDynamicFieldGroupDefinitionCreateDto';
import type { InventoryDynamicFieldGroupDefinitionDropDownItemDto } from '../models/InventoryDynamicFieldGroupDefinitionDropDownItemDto';
import type { InventoryDynamicFieldGroupDefinitionDto } from '../models/InventoryDynamicFieldGroupDefinitionDto';
import type { InventoryDynamicFieldGroupDefinitionUpdateDto } from '../models/InventoryDynamicFieldGroupDefinitionUpdateDto';
import type { InventoryDynamicFieldGroupDefinitionUpsertDto } from '../models/InventoryDynamicFieldGroupDefinitionUpsertDto';
import type { PagedResultDtoOfInventoryDynamicFieldGroupDefinitionDto } from '../models/PagedResultDtoOfInventoryDynamicFieldGroupDefinitionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventoryDynamicFieldGroupDefinitionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.InventoryDynamicFieldGroupDefinitionController.GetAsync (SpektrERP.HttpApi)
   * @returns InventoryDynamicFieldGroupDefinitionDto Success
   * @throws ApiError
   */
  public inventoryDynamicFieldGroupDefinitionGet({
id,
}: {
id: string,
}): CancelablePromise<InventoryDynamicFieldGroupDefinitionDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-dynamic-field-group-definitions/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.InventoryDynamicFieldGroupDefinitionController.UpdateAsync (SpektrERP.HttpApi)
   * @returns InventoryDynamicFieldGroupDefinitionDto Success
   * @throws ApiError
   */
  public inventoryDynamicFieldGroupDefinitionUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: InventoryDynamicFieldGroupDefinitionUpdateDto,
}): CancelablePromise<InventoryDynamicFieldGroupDefinitionDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-dynamic-field-group-definitions/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.InventoryDynamicFieldGroupDefinitionController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryDynamicFieldGroupDefinitionDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/inventory-dynamic-field-group-definitions/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.InventoryDynamicFieldGroupDefinitionController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfInventoryDynamicFieldGroupDefinitionDto Success
   * @throws ApiError
   */
  public inventoryDynamicFieldGroupDefinitionGetList({
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfInventoryDynamicFieldGroupDefinitionDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-dynamic-field-group-definitions',
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
   * SpektrERP.Controllers.InventoryDynamicFieldGroupDefinitionController.CreateAsync (SpektrERP.HttpApi)
   * @returns InventoryDynamicFieldGroupDefinitionDto Success
   * @throws ApiError
   */
  public inventoryDynamicFieldGroupDefinitionCreate({
requestBody,
}: {
requestBody?: InventoryDynamicFieldGroupDefinitionCreateDto,
}): CancelablePromise<InventoryDynamicFieldGroupDefinitionDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-dynamic-field-group-definitions',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert List
   * SpektrERP.Controllers.InventoryDynamicFieldGroupDefinitionController.UpsertListAsync (SpektrERP.HttpApi)
   * @returns InventoryDynamicFieldGroupDefinitionUpsertDto Success
   * @throws ApiError
   */
  public inventoryDynamicFieldGroupDefinitionUpsertList({
requestBody,
}: {
requestBody?: Array<InventoryDynamicFieldGroupDefinitionUpsertDto>,
}): CancelablePromise<Array<InventoryDynamicFieldGroupDefinitionUpsertDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-dynamic-field-group-definitions/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down Lookup
   * SpektrERP.Controllers.InventoryDynamicFieldGroupDefinitionController.GetListDropDownLookup (SpektrERP.HttpApi)
   * @returns InventoryDynamicFieldGroupDefinitionDropDownItemDto Success
   * @throws ApiError
   */
  public inventoryDynamicFieldGroupDefinitionGetListDropDownLookup({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<InventoryDynamicFieldGroupDefinitionDropDownItemDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-dynamic-field-group-definitions/lookup',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

}

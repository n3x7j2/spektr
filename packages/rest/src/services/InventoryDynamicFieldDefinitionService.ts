/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InventoryDynamicFieldDefinitionCreateDto } from '../models/InventoryDynamicFieldDefinitionCreateDto';
import type { InventoryDynamicFieldDefinitionDropDownItemDto } from '../models/InventoryDynamicFieldDefinitionDropDownItemDto';
import type { InventoryDynamicFieldDefinitionDto } from '../models/InventoryDynamicFieldDefinitionDto';
import type { InventoryDynamicFieldDefinitionUpdateDto } from '../models/InventoryDynamicFieldDefinitionUpdateDto';
import type { InventoryDynamicFieldDefinitionUpsertDto } from '../models/InventoryDynamicFieldDefinitionUpsertDto';
import type { PagedResultDtoOfInventoryDynamicFieldDefinitionDto } from '../models/PagedResultDtoOfInventoryDynamicFieldDefinitionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventoryDynamicFieldDefinitionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.InventoryDynamicFieldDefinitionController.GetAsync (SpektrERP.HttpApi)
   * @returns InventoryDynamicFieldDefinitionDto Success
   * @throws ApiError
   */
  public inventoryDynamicFieldDefinitionGet({
id,
}: {
id: string,
}): CancelablePromise<InventoryDynamicFieldDefinitionDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-dynamic-field-definitions/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.InventoryDynamicFieldDefinitionController.UpdateAsync (SpektrERP.HttpApi)
   * @returns InventoryDynamicFieldDefinitionDto Success
   * @throws ApiError
   */
  public inventoryDynamicFieldDefinitionUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: InventoryDynamicFieldDefinitionUpdateDto,
}): CancelablePromise<InventoryDynamicFieldDefinitionDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-dynamic-field-definitions/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.InventoryDynamicFieldDefinitionController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryDynamicFieldDefinitionDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/inventory-dynamic-field-definitions/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.InventoryDynamicFieldDefinitionController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfInventoryDynamicFieldDefinitionDto Success
   * @throws ApiError
   */
  public inventoryDynamicFieldDefinitionGetList({
fieldDefinitionGroupId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
fieldDefinitionGroupId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfInventoryDynamicFieldDefinitionDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-dynamic-field-definitions',
      query: {
        'FieldDefinitionGroupId': fieldDefinitionGroupId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.InventoryDynamicFieldDefinitionController.CreateAsync (SpektrERP.HttpApi)
   * @returns InventoryDynamicFieldDefinitionDto Success
   * @throws ApiError
   */
  public inventoryDynamicFieldDefinitionCreate({
requestBody,
}: {
requestBody?: InventoryDynamicFieldDefinitionCreateDto,
}): CancelablePromise<InventoryDynamicFieldDefinitionDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-dynamic-field-definitions',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert List
   * SpektrERP.Controllers.InventoryDynamicFieldDefinitionController.UpsertListAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryDynamicFieldDefinitionUpsertList({
requestBody,
}: {
requestBody?: Array<InventoryDynamicFieldDefinitionUpsertDto>,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-dynamic-field-definitions/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down Lookup
   * SpektrERP.Controllers.InventoryDynamicFieldDefinitionController.GetListDropDownLookup (SpektrERP.HttpApi)
   * @returns InventoryDynamicFieldDefinitionDropDownItemDto Success
   * @throws ApiError
   */
  public inventoryDynamicFieldDefinitionGetListDropDownLookup({
fieldGroupId,
isIncludeBatchField,
}: {
fieldGroupId?: string,
isIncludeBatchField?: boolean,
}): CancelablePromise<Array<InventoryDynamicFieldDefinitionDropDownItemDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-dynamic-field-definitions/lookup',
      query: {
        'FieldGroupId': fieldGroupId,
        'IsIncludeBatchField': isIncludeBatchField,
      },
    });
  }

}
